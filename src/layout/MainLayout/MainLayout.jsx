import React from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Components/Shared/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const noNavbarFooter = pathname === "/login" || pathname === "/signUp";

  return (
    <div>
      {!noNavbarFooter && <Navbar></Navbar>}
      <Outlet></Outlet>
      {!noNavbarFooter && <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
