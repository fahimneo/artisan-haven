import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hoocks/UseAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password).then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <Helmet>
          <title>Login-Page</title>
        </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                {/* <PasswordResetModal /> */}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Login</button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
