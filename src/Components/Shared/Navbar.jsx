import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../Hooks/UseCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [carts, isLoading] = UseCart();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Our Shop</NavLink>
      </li>
      {user && isAdmin ? (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      ) : user && !isAdmin ? (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      ) : null}
      {user ? (
        <li>
          <button onClick={logout} className=" btn-ghost">
            Logout
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black text-white bg-opacity-50 fixed z-10 ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-8 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="dashboard">
            <div className="flex items-center mr-2">
              <FaShoppingCart className="text-3xl" />
              <div className="badge badge-secondary -mt-4">
                +{carts?.length}
              </div>
            </div>
          </Link>
          {user?.photoURL && (
            <img className="w-10 rounded-full" src={user?.photoURL} />
          )}
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
