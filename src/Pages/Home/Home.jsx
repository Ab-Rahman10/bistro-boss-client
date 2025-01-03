import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import Recommend from "./Recjommend/Recommend";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Recommend></Recommend>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
