import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtCraft = () => {
  const { id } = useParams();
  console.log(id);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/addCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
      });
  }, [id]);

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const item_name = e.target.item_name.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const short_description = e.target.short_description.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const customization = e.target.customization.value;
    const rating = e.target.rating.value;
    const processing_time = e.target.processing_time.value;
    const stockStatus = e.target.stockStatus.value;
    const info = {
      item_name,
      subcategory_Name,
      short_description,
      price,
      image,
      customization,
      rating,
      processing_time,
      stockStatus,
    };
    console.log(info);
    //send data to server
    fetch(`http://localhost:5000/addCraft/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Your Craft Item has been updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
      <div className="shadow-2xl p-6 sm:p-8 lg:p-10 border-2 rounded-lg">
        {/* Heading */}
        <div className="mt-5 mb-8 text-center">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
            Update Your Craft Item
          </span>
        </div>
        {/* form */}
        <form onSubmit={handleUpdateCraft}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Item Name"
                id="item_name"
                name="item_name"
                defaultValue={updateData.item_name}
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="subcategory"
              >
                Subcategory Name
              </label>
              <select
                name="subcategory_Name"
                id="subcategory_Name"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Subcategory Name"
                defaultValue={updateData.subcategory_Name}
              >
                <option value="Landscape Painting" selected>
                  Landscape Painting
                </option>
                <option value="Portrait Drawing" selected>
                  Portrait Drawing
                </option>
                <option value="WaterColor Painting" selected>
                  WaterColor Painting
                </option>
                <option value="Oil Painting" selected>
                  Oil Painting
                </option>
                <option value="Charcoal Sketching" selected>
                  Charcoal Sketching
                </option>
                <option value="Cartoon Drawing" selected>
                  Cartoon Drawing
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="short_description"
              >
                Short Description
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Short Description"
                id="short_description"
                name="short_description"
                defaultValue={updateData.short_description}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="price"
                name="price"
                defaultValue={updateData.price}
              />
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
                defaultValue={updateData.image}
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="customization"
              >
                Customization
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter customization"
                id="customization"
                name="customization"
                defaultValue={updateData.customization}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
                defaultValue={updateData.rating}
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="processing"
              >
                Processing Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter processing time                "
                id="processing_time"
                name="processing_time"
                defaultValue={updateData.processing_time}
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="stockStatus "
              >
                Stock Status
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Stock Status"
                id="stockStatus"
                name="stockStatus"
                defaultValue={updateData.stockStatus}
              />
            </div>
          </div>

          <input
            className="px-4 w-2/4 mb-7 py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold items-center justify-center flex mx-auto"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateArtCraft;
