import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estate from "./Estate";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <Estate></Estate>
    </div>
  );
};

export default Home;
