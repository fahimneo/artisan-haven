import Swal from "sweetalert2";
import UseAuth from "../../Hoocks/UseAuth";

const AddCraftItem = () => {
  const { user } = UseAuth();
  const handleAddCraft = (e) => {
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
    const user_name = e.target.user_name.value;
    const email = e.target.email.value;
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
      user_name,
      email,
    };
    console.log(info);
    //send data to server
    fetch("https://artisan-haven.vercel.app/addCraft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Craft Item has been added successfully",
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
    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8  ">
      <div className="shadow-2xl p-6 sm:p-8 lg:p-10 border-2 rounded-lg">
        {/* Heading */}
        <div className="mt-5 mb-8 text-center">
          <span className="text-2xl sm:text-3xl lg:text-4xl  font-bold ">
            Please Add Your Craft Item
          </span>
        </div>
        {/* form */}
        <form onSubmit={handleAddCraft}>
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
              />
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
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
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
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="user_name"
              >
                User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter user name"
                id="user_name"
                name="user_name"
                defaultValue={user?.displayName || ""}
                readOnly
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="email "
              >
                User Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter user email"
                id="email"
                name="email"
                defaultValue={user?.email || ""}
                readOnly
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

export default AddCraftItem;
