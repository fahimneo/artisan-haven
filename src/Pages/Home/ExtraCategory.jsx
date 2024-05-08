import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExtraCategory = () => {
  const [extras, setExtras] = useState([]);
  useEffect(() => {
    fetch("https://artisan-haven.vercel.app/extraItem")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExtras(data);
      });
  }, []);
  console.log(extras);
  console.log(extras.subcategory_Name);
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-4xl font-bold mt-10 mb-10">
          Art & Craft Categories
        </h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 justify-center">
        {extras.map((extra) => (
          <div key={extra._id}>
            <Link to={`/extraCard/${extra.subcategory_Name}`}>
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={extra.image} alt="{extra.item_name}" />
                </figure>
                <div className="card-body flex justify-center items-center f">
                  <h2 className="card-title font-extrabold text-3xl">
                    {extra.subcategory_Name}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCategory;
