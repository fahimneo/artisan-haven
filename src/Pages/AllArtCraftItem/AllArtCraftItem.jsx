import { NavLink, useLoaderData } from "react-router-dom";

const AllArtCraftItem = () => {
  const allItems = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Customization</th>
              <th>Stock Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allItems?.map((item, index) => (
              <tr key={item._id}>
                <td>{`${index + 1}`}</td>
                <td>{item.item_name}</td>
                <td>{item.subcategory_Name}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.customization}</td>
                <td>{item.stockStatus}</td>
                {
                  <NavLink to={`/viewDetails/${item._id}`}>
                    <button className="btn btn-sm btn-error btn-outline font-bold">
                      View Details
                    </button>
                  </NavLink>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraftItem;
