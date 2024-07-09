import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import swipe_1 from "../../../assets/home/slide1.jpg";
import swipe_2 from "../../../assets/home/slide2.jpg";
import swipe_3 from "../../../assets/home/slide3.jpg";
import swipe_4 from "../../../assets/home/slide4.jpg";
import swipe_5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={swipe_1} alt="swipe_image_1" />
          <h3 className="text-3xl uppercase text-center -mt-24 text-white tracking-widest">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe_2} alt="swipe_image_2" />
          <h3 className="text-3xl uppercase text-center -mt-24 text-white tracking-widest">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe_3} alt="swipe_image_3" />
          <h3 className="text-3xl uppercase text-center -mt-24 text-white tracking-widest">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe_4} alt="swipe_image_4" />
          <h3 className="text-3xl uppercase text-center -mt-24 text-white tracking-widest">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe_5} alt="swipe_image_5" />
          <h3 className="text-3xl uppercase text-center -mt-24 text-white tracking-widest">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
