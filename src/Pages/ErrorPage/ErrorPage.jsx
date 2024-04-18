import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-[400px] font-bold">404</h1>

        <h2 className="text-5xl font-bold">NOT FOUND</h2>
        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
