import casinoImage from "../../assets/Affiliates/Casino.png";
import slotImage from "../../assets/Affiliates/slot.png";
import sportsImage from "../../assets/Affiliates/sports.png";
import crashImage from "../../assets/Affiliates/crash.png";
import fishingImage from "../../assets/Affiliates/fishing.png";
import lotteryImage from "../../assets/Affiliates/lotary.png";
import arcadeImage from "../../assets/Affiliates/Arcade.png";

const Products = () => {
  const products = [
    { image: casinoImage, title: "CASINO" },
    { image: slotImage, title: "SLOTS" },
    { image: sportsImage, title: "SPORTS" },
    { image: lotteryImage, title: "TABLE" },
    { image: crashImage, title: "CRASH" },
    { image: fishingImage, title: "FISHING" },
    { image: lotteryImage, title: "LOTTERY" },
    { image: arcadeImage, title: "ARCADE" },
  ];

  return (
    <div className="w-full bg-red-900 py-12 flex flex-col items-center">
      <h2 className="text-4xl text-yellow-400 font-bold mb-10">PRODUCTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-black shadow-lg w-36 md:w-40 lg:w-56 p-4 rounded-2xl flex flex-col items-center"
          >
            <img
              className={` ${index === 0 ? 'max-w-[120%]' : 'max-w-[100%]'} h-full mb-4 `}
              src={product.image}
              alt={product.title}
            />
            <h3 className="lg:w-[78%] w-[80%] p-1 text-center mx-auto text-base font-semibold poppins sans-serif text-[18px] tracking-[1px] border-2 border-customGreenHeading border-solid rounded-[20px] bg-backgroundImageRed shadow-customHeadingShadow text-white">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
