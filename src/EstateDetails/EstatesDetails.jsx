import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EstatesDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((item) => item.id === idInt);

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Estate-Details</title>
      </Helmet>
      <div className="hero-content flex-col ">
        <img src={estate.image} className="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{estate.estate_title}</h1>
          <p className="font-bold">
            Location:
            {estate.location}
          </p>
          <p className="font-bold">Segment-name: {estate.segment_name}</p>
          <p className="font-bold">Price : {estate.price}</p>
          <p className="font-bold">Status : {estate.status}</p>
          <p className="font-bold">Area : {estate.area}</p>
          <div className="flex">
            <span className="font-bold">Facilities :</span>
            {estate.facilities.map((facility) => (
              <p className="font-bold" key={facility}>
                {facility}
              </p>
            ))}
          </div>
          <p className="font-bold">{estate.description}</p>

          <Link to={"/"} className="btn btn-primary mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstatesDetails;
