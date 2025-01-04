import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => console.log(result));
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 max-w-sm shadow-2xl w-full lg:w-1/2 p-6">
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* Name input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1">
                      Name is required
                    </span>
                  )}
                </div>
                {/* Email input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1">
                      Email is required
                    </span>
                  )}
                </div>
                {/* Password input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must not exceed 20 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter and one number",
                      },
                    })}
                    name="password"
                    type="password"
                    placeholder="Create a Password"
                    className="input input-bordered w-full"
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Sign Up
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 underline">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left w-full lg:w-1/2 p-6">
              <h1 className="text-4xl md:text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6 text-sm md:text-base">
                Join us and start your journey today. Explore the amazing
                features we offer by signing up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
