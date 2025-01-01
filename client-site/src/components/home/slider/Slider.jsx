// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import favourites_1 from "../../../assets/Favourites/1.jpg";
import favourites_2 from "../../../assets/Favourites/2.jpg";
import favourites_3 from "../../../assets/Favourites/3.jpg";
import favourites_4 from "../../../assets/Favourites/4.jpg";

const Slider = () => {
  return (
    <div className="bg-zinc-800">
      <div className="pt-4">
        <p className="text-white text-base font-semibold mb-3 pl-2 border-l-4 border-l-red-600">
          Favourites
        </p>
      </div>
      <Swiper
        breakpoints={{
          // মোবাইল ডিভাইসে ১টি স্লাইড
          0: {
            slidesPerView: 1.2,
          },
          // ট্যাবলেট ডিভাইসে ২টি স্লাইড
          640: {
            slidesPerView: 2,
          },
          // ডেস্কটপ ডিভাইসে ৩টি স্লাইড
          1024: {
            slidesPerView: 3,
          },
          1156: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={favourites_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={favourites_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
