import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hoocks/UseAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">Continue with</div>
      <div className="flex justify-evenly p-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm  btn-outline"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
