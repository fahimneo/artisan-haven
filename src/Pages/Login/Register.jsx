import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hoocks/UseAuth";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
// import { useState } from "react";

const Register = () => {
  // const [registerUser, setRegisterUser] = useState("");
  const { createUser, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase and one lowercase"
      );
      return;
    } else {
      toast.success("User created successfully");
    }

    createUser(email, password).then(() => {
      updateUserProfile(fullName, image)
        .then(() => {
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  return (
    <>
      <Toaster />
      <div className="hero min-h-screen bg-base-200 w-full">
        <Helmet>
          <title>Register-Page</title>
        </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
