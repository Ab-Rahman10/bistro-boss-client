import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <SectionTitle
        subTitle={"--- What Our Client Say ---"}
        title={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-20 text-center flex flex-col items-center">
              <Rating
                style={{ maxWidth: 200 }}
                value={review.rating}
                readOnly
              />
              <p className="text-sm mt-5">{review.details}</p>

              <h3 className="text-center text-lg text-yellow-500 mt-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
