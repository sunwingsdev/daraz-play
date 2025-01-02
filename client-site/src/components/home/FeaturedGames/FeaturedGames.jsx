import { Pagination, Navigation } from "swiper/modules";
import GameCard from "../../shared/gameCard/GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

const FeaturedGames = () => {
  return (
    <div>
      <div className="pt-4">
        <p className="text-white text-base font-semibold mb-3 pl-2 border-l-4 border-l-red-600">
          Featured Games
        </p>
      </div>
      <Swiper
        breakpoints={{
          // মোবাইল ডিভাইসে ১টি স্লাইড
          0: {
            slidesPerView: 2,
          },
          // ট্যাবলেট ডিভাইসে ২টি স্লাইড
          640: {
            slidesPerView: 3,
          },
          // ডেস্কটপ ডিভাইসে ৩টি স্লাইড
          1024: {
            slidesPerView: 4,
          },
          1156: {
            slidesPerView: 5,
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
        modules={[Pagination, Navigation, Scrollbar]}
        scrollbar={{
          hide: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-027.png"
            }
            title={"Super Ace"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-029.png"
            }
            title={"Money Coming"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-031.png"
            }
            title={"Boxing King"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-076.png"
            }
            title={"Fortune Gems 2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-014.png"
            }
            title={"Crazy777"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-043.png"
            }
            title={"Fortune Gems"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-102.png"
            }
            title={"Super Ace Deluxe"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-042.png"
            }
            title={"Golden Empire"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard
            imageUrl={
              "https://img.d4040p.com/upload/game/AWCMJILI/JILI-SLOT-049.png"
            }
            title={"Alibaba"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedGames;
