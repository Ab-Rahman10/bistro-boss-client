import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import UseAxiosPublic from "./useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();

      //   send user info to db
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL,
      };
      await axiosPublic
        .post("/users", userInfo)
        .then((result) => console.log(result.data));

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <img
        src="https://img.icons8.com/?size=48&id=17949&format=png"
        alt="Google Logo"
        className="w-5 h-5 mr-2"
      />
      <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
