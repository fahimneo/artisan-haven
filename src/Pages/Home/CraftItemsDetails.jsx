import { Link, useLoaderData } from "react-router-dom";

const CraftItemsDetails = () => {
  const craftItems = useLoaderData();
  const {
    item_name,
    subcategory_Name,
    short_description,
    price,
    image,
    customization,
    rating,
    processing_time,
    stockStatus,
    user_name,
    email,
  } = craftItems;
  console.log(craftItems);
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row gap-x-20 shadow-2xl rounded-lg p-10">
        <img src={image} className=" rounded-lg w-[700px] md:max-w-md " />
        <div>
          <h1 className="text-3xl font-bold">{item_name}</h1>
          <p className="text-lg font-bold">{subcategory_Name}</p>
          <p>{short_description}</p>
          <hr className="my-3 border border-dashed dark:border-base-200" />
          <p>
            <span className="font-bold">Price:</span> {price} Tk
          </p>
          <p>
            <span className="font-bold">Customization:</span> {customization}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {rating}
          </p>
          <p>
            <span className="font-bold">Processing Time:</span>{" "}
            {processing_time}
          </p>
          <p>
            <span className="font-bold">Status:</span> {stockStatus}
          </p>
          <hr className="my-3 border border-dashed dark:border-base-200" />
          <h2 className="text-xl font-bold">User Information</h2>
          <hr className="my-3 border border-dashed dark:border-base-200" />
          <p>
            <span className="font-bold">Name:</span> {user_name}
          </p>
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          <Link to="/" className="btn btn-sm btn-warning mt-7">
            Go Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItemsDetails;
