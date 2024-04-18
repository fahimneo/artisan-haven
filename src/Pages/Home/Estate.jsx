import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estate = () => {
  const [estate, setEstate] = useState([]);
  useEffect(() => {
    fetch("/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setEstate(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center m-6 ">Estates</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-8  p-5">
        {estate.map((item) => (
          <div key={item.id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 ">
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.estate_title}</h2>
                <p>{item.location}</p>
                <p>{item.segment_name}</p>
                <p className="font-bold">Price : {item.price}</p>
                <div className="card-actions justify-center">
                  <Link
                    to={`/estates/${item.id}`}
                    className="btn btn-outline btn-warning w-full"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estate;
