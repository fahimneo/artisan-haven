import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import CraftItemsDetails from "../Pages/Home/CraftItemsDetails";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList/MyArtCraftList";
import UpdateArtCraft from "../Pages/MyArtCraftList/UpdateArtCraft";
import ExtraCard from "../Pages/Home/ExtraCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:8080/addCraft"),
      },
      {
        path: "/extraCard/:subcategory_Name",
        element: <ExtraCard></ExtraCard>,
        loader: () => fetch("http://localhost:8080/extraItem"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <CraftItemsDetails></CraftItemsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8080/addCraft/${params.id}`),
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraftItem></AllArtCraftItem>,
        loader: () => fetch("http://localhost:8080/addCraft"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/artCraftList",
        element: (
          <PrivateRoute>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateArtCraft></UpdateArtCraft>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
