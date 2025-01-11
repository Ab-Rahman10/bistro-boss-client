import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center font-bold  text-2xl">
        Loading....
      </div>
    );

  const handleMakeAdmin = async (user) => {
    const { data } = await axiosSecure.patch(`/user/admin/${user._id}`);
    refetch();
    if (data.modifiedCount) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an admin now.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/user/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="ml-5">
      <div className="flex justify-evenly mt-5">
        <h2 className="text-2xl">All Users</h2>
        <p className="text-2xl">Total Users: {users?.length}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      <FaUsers className=" text-2xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(user)}>
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
