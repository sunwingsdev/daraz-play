import { IoTimeOutline } from "react-icons/io5";

const PromotionOfferCard = ({ offer }) => {
  const { image, title, subtitle, time } = offer;
  return (
    <div className="menubarBgAct rounded-md">
      <img className="rounded-t-md" src={image} alt="" />
      <div className={""}>
        <div className="pb-2 relative">
          <div className="border-dashed absolute -top-4 w-full h-4 border-t-4 border-[#8E8E8E]"></div>
          <div className="text-white border-s-4 border-[#FFE22B] px-4 my-3">
            <h2 className="text-xl">{title}</h2>
          </div>
          <div className="px-4 text-sm text-white space-y-2">
            <p>{subtitle}</p>
            <div className="flex items-center gap-2">
              <IoTimeOutline className="text-xl" />
              <p>{time}</p>
            </div>
            <div className="flex items-center gap-3 pb-3">
              <button className="py-1.5 px-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border rounded-md duration-300">
                {" "}
                Apply Now{" "}
              </button>
              <button className="py-1.5 px-2 w-full loginButtonBgColor border rounded-md">
                {" "}
                Detail{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionOfferCard;
