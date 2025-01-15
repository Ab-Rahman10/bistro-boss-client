import React from "react";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import UseCart from "../../Hooks/UseCart";

const Dashboard = () => {
  const [carts] = UseCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto flex">
      {/* sidebar */}

      <div className=" p-5 bg-orange-400 min-h-screen w-1/3">
        <ul className="space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink className="flex items-center gap-2" to="userHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="addItems">
                  <ImSpoonKnife></ImSpoonKnife> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="manageBookings"
                >
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="allUsers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="flex items-center gap-2" to="userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="cart">
                  <FaShoppingCart></FaShoppingCart> My Cart: ({carts.length})
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to="review">
                  <FaAd></FaAd> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="paymentHistory"
                >
                  <FaList></FaList> Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* Shared nav */}
          <div className="divider"></div>
          <li>
            <NavLink className="flex items-center gap-2" to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2" to="menu">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2" to="menu">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard content */}
      <div className=" w-2/3 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
