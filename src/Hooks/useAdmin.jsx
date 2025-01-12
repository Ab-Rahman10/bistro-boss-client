import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      //   console.log(res.data.admin);
      return res.data?.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
