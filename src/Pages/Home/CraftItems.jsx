import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const CraftItems = ({ craft }) => {
  const { item_name, price, stockStatus, image, _id } = craft;
  return (
    <div>
      <div className=" card mt-2 bg-base-100 shadow-2xl border-2 ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Not Found" className="rounded-xl h-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {item_name}</h2>
          <p>
            <span className="font-display font-bold">Status : </span>{" "}
            {stockStatus}
          </p>
          <div className="card-actions">
            <p>
              <span className="font-display font-bold">Price : </span> {price}{" "}
              Tk
            </p>
          </div>
          {
            <NavLink to={`/viewDetails/${_id}`}>
              <button className="btn bg-red-400 font-bold text-white w-full">
                View Details
              </button>
            </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

CraftItems.propTypes = {
  craft: PropTypes.object,
};

export default CraftItems;
