import { Link, useLoaderData, useParams } from "react-router-dom";

const EstatesDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((item) => item.id === idInt);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <img src={estate.image} className="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">{estate.estate_title}</h1>
          <p>
            Location:
            {estate.location}
          </p>
          <p>{estate.segment_name}</p>
          <p>Price : {estate.price}</p>
          <p>{estate.status}</p>
          <p>{estate.area}</p>
          <p>{estate.description}</p>
          {estate.facilities.map((facility) => (
            <p key={facility}>{facility}</p>
          ))}
          <Link to={"/"} className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstatesDetails;
