import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ExtraCard = () => {
  const { subcategory_Name } = useParams();
  const [extras, setExtras] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/addCraft")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.subcategory_Name === subcategory_Name
        );
        setExtras(filtered);
      });
  }, []);
  console.log(extras);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {extras.map((extra, index) => (
          <div
            key={index}
            className="card w-96 glass border-2 shadow-2xl mb-20 mt-10"
          >
            <figure>
              <img src={extra.image} alt={extra.item_name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{extra.item_name}</h2>
              <h3>
                <span>{extra.subcategory_Name}</span>
              </h3>
              <p>Price: {extra.price}</p>
              <p>{extra.short_description.slice(0, 100)}...</p>
              <Link to={`/viewDetails/${extra._id}`}>
                <button className="btn btn-warning btn-outline w-full ">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCard;
