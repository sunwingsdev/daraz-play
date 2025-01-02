const PromotionCardMenu = ({ text }) => {
  return (
    <div className="">
      <button className="py-1.5 px-6 w-full text-sm font-semibold text-white hover:bg-slate-400 bg-slate-500 duration-300 rounded-sm whitespace-nowrap">
        {text}
      </button>
    </div>
  );
};

export default PromotionCardMenu;
