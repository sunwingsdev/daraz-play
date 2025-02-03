import FeaturedGames from "../../components/home/FeaturedGames/FeaturedGames";
import MarqueeSlider from "../../components/home/marqueeSlider/MarqueeSlider";
import MenuBar from "../../components/home/menuBar/MenuBar";
import Slider from "../../components/home/slider/Slider";
import BannerSlider from "../../components/shared/bannerSlider/BannerSlider";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="px-4 bg-footerBg">
        <MarqueeSlider />
        <MenuBar />
        <Slider />
        <FeaturedGames />
      </div>
    </div>
  );
};

export default Home;
