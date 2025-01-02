import FeaturedGames from "../../components/home/FeaturedGames/FeaturedGames";
import MarqueeSlider from "../../components/home/marqueeSlider/MarqueeSlider";
import MenuBar from "../../components/home/menuBar/MenuBar";
import Slider from "../../components/home/slider/Slider";
import BannerSlider from "../../components/shared/bannerSlider/BannerSlider";

const Home = () => {
  const messages = ["Welcome to Melbet99"];
  return (
    <div>
      <BannerSlider />
      <div className="px-4 bg-zinc-800">
        <MarqueeSlider messages={messages} />
        <MenuBar />
        <Slider />
        <FeaturedGames />
      </div>
    </div>
  );
};

export default Home;
