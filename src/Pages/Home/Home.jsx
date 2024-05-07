import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import CraftItems from "./CraftItems";
import ReviewSection from "./ReviewSection";
import AskedQuestion from "./AskedQuestion";
import ExtraCategory from "./ExtraCategory";

const Home = () => {
  const craftItem = useLoaderData();
  console.log(craftItem);
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold mt-10">Craft Items</h1>
        </div>
        <div className=" mt-6 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 ">
          {craftItem?.slice(0 - 6)?.map((craft) => (
            <CraftItems key={craft._id} craft={craft}></CraftItems>
          ))}
        </div>
      </div>
      <div className="mt-20">
        {" "}
        <ExtraCategory></ExtraCategory>
      </div>
      <ReviewSection></ReviewSection>
      <AskedQuestion></AskedQuestion>
    </div>
  );
};

export default Home;
