import { useEffect, useState } from "react";
import UseAuth from "../../Hoocks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MyArtCraftList = () => {
  const { user } = UseAuth();
  const [myCraft, setMyCraft] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch(`https://artisan-haven.vercel.app/artCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraft(data);
      });
  }, [user, deleteItem]);
  console.log(myCraft);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artisan-haven.vercel.app/deleteItem/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              setDeleteItem(true);
              Swal.fire(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
              );
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
  return (
    <div>
      <div className="flex justify-center items-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter by Customization <FaChevronDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => setFilter("All")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilter("Yes")}>Yes</a>
            </li>
            <li>
              <a onClick={() => setFilter("No")}>No</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 ">
        {myCraft
          ?.filter((item) => filter === "All" || item.customization === filter)
          .map((item, index) => (
            <div
              key={index}
              className="card w-96 bg-base-100 shadow-2xl border-2"
            >
              <figure className="px-10 pt-10">
                <img
                  src={item.image}
                  alt="Image Not Found"
                  className="rounded-xl h-80 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name : {item.item_name}</h2>
                <p>
                  <span className="font-display font-bold">Rating : </span>
                  {item.rating}
                </p>
                <p>
                  <span className="font-display font-bold">Status : </span>
                  {item.stockStatus}
                </p>
                <p>
                  <span className="font-display font-bold">
                    Customization :{" "}
                  </span>
                  {item.customization}
                </p>
                <p>
                  <span className="font-display font-bold">Price : </span>
                  {item.price} Tk
                </p>
                <div className="card-actions">
                  <Link to={`/update/${item._id}`}>
                    <button className="btn btn-sm btn-outline btn-primary">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
