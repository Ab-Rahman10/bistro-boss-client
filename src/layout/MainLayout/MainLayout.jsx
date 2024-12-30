import React from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <section className="min-h-[calc(100vh-298px)]"> */}
      <Outlet></Outlet>
      {/* </section> */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
