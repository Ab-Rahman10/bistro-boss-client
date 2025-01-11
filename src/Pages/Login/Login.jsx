import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Hooks/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useAuth();

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((result) => console.log(result));
    navigate(location?.state || "/");
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 max-w-sm shadow-2xl w-full lg:w-1/2 p-6">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    ref={captchaRef}
                    name="captcha"
                    type="text"
                    placeholder="Type the captcha above"
                    className="input input-bordered w-full"
                    onBlur={handleValidateCaptcha}
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    disabled={false}
                    className="btn btn-primary w-full"
                  >
                    Login
                  </button>
                </div>
                {/* google sign in */}
                <SocialLogin></SocialLogin>

                <div className="mt-4 text-center">
                  <p className="text-sm">
                    New here? {""}
                    <Link to="/signUp" className="text-blue-500 underline">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2 p-6">
              <h1 className="text-4xl md:text-5xl font-bold">Login now!</h1>
              <p className="py-6 text-sm md:text-base">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
