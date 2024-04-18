import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hoocks/UseAuth";

const NavBar = () => {
  const { user, logOut } = UseAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">User Login</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl font-bold">Sovereign Suites</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end flex justify-center items-center">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onMouseOver={(e) =>
                (e.target.title = user?.displayName || "user name not found")
              }
              onMouseLeave={(e) => (e.target.title = "")}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/WP05v9w/Rakib.jpg"}
                />
              </div>
            </label>
            <button
              onClick={logOut}
              className="btn btn-sm btn-outline btn-warning"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-outline btn-warning">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
