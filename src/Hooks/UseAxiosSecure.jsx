import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  // request interceptor to add authorization header for every secure call
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // Send token to server
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // Interceptors 401 and 403 status
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      // Logout the user if the token is invalid and kick him to login page.
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
