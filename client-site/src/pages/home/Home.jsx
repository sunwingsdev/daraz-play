import FeaturedGames from "../../components/home/FeaturedGames/FeaturedGames";
import MarqueeSlider from "../../components/home/marqueeSlider/MarqueeSlider";
import MenuBar from "../../components/home/menuBar/MenuBar";
import Slider from "../../components/home/slider/Slider";
import BannerSlider from "../../components/shared/bannerSlider/BannerSlider";

const Home = () => {
  const messages = [
    "1burl.com আমাদের ব্যাকআপ লিংক থেকে চেষ্টা করুন",
    "বেটজিলি বাংলাদেশ দিচ্ছে ২৪/৭ ডিপোজিট এবং উইথড্র সহ আরও অনেক অনেক বিশেষ বিশেষ সুবিধা।",
    "Betjili বাংলাদেশের সেরা ক্রিকেট বেটিং এক্সচেঞ্জ প্ল্যাটফর্ম।  আজই সাইন আপ করুন আপনার ফ্রি  আইডির জন্য। বিকাশ, নগদ এবং রকেট দিয়ে ক্যাশ আউট করে ২ মিনিটে ডিপোজিট করুন সহজে।",
    "Betjili অ্যাফিলিয়েট প্রোগ্রামে জয়েন করুন ও উপভোগ করুন ৫০% মাসিক কমিশন লাইফ টাইম।",
  ];
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
