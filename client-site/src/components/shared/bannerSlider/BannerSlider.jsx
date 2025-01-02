import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import sliderImage_1 from "../../../assets/sliderImg-1.jpg";
import sliderImage_2 from "../../../assets/sliderImg-2.jpg";
import sliderImage_3 from "../../../assets/sliderImg-3.jpg";

const BannerSlider = () => {
  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="banner-slider relative md:px-4 md:pt-4 bg-zinc-800">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Assign the refs to Swiper's navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="w-full object-cover h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 2xl:h-auto"
              src={sliderImage_1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="w-full object-cover h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 2xl:h-auto"
              src={sliderImage_2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto">
            <img
              className="w-full object-cover h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 2xl:h-auto"
              src={sliderImage_3}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons with react-icons */}
      <div
        ref={nextRef}
        className=" absolute top-1/2 transform -translate-y-1/2 right-2 text-xl sm:text-2xl text-white z-10"
      >
        <AiOutlineRight />
      </div>
      <div
        ref={prevRef}
        className=" absolute top-1/2 transform -translate-y-1/2 left-2 text-xl sm:text-2xl text-white z-10"
      >
        <AiOutlineLeft />
      </div>
    </div>
  );
};

export default BannerSlider;
