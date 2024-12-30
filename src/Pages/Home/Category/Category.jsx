import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mb-10">
      <SectionTitle
        subTitle={"--- From 11:00am to 10:00pm ---"}
        title={"Order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
          <p className="text-center text-lg -mt-10 text-white">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p className="text-center text-lg -mt-10 text-white">Cake</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p className="text-center text-lg -mt-10 text-white">Snacks</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <p className="text-center text-lg -mt-10 text-white">Beverage</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <p className="text-center text-lg -mt-10 text-white">Dessert</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
