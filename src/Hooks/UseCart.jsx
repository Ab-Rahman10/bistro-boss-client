import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const UseCart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();

  const {
    refetch,
    data: carts = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [carts, refetch, isLoading];
};

export default UseCart;
