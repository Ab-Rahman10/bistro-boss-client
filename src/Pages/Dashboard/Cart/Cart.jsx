import { FaTrash } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = UseAxiosSecure();
  const [carts, refetch] = UseCart();
  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0);

  const handleDelete = (id) => {
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
        await axiosSecure.delete(`/carts/${id}`).then((res) => {
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
    <div>
      <ul className="flex justify-evenly items-center mt-10">
        <li>Total Order: {carts.length} </li>
        <li>Price: {totalPrice.toFixed(2)} </li>
        <li>
          {carts.length ? (
            <Link to="/dashboard/payment">
              <button className="py-0.5 px-3 rounded-md bg-blue-500 text-white">
                Pay
              </button>
            </Link>
          ) : (
            <Link>
              <button
                disabled
                className="py-0.5 px-3 rounded-md bg-blue-500 text-white disabled:cursor-not-allowed"
              >
                Pay
              </button>
            </Link>
          )}
        </li>
      </ul>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, idx) => (
              <tr key={cart._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={cart.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cart.name}</td>
                <td>
                  <button onClick={() => handleDelete(cart._id)}>
                    {" "}
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

export default Cart;
