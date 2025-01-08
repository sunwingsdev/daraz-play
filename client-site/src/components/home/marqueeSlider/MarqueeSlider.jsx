import { GrAnnounce } from "react-icons/gr";
import { useGetHomeControlsQuery } from "../../../redux/features/allApis/homeControlApi/homeControlApi";

const MarqueeSlider = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const notice = homeControls?.find(
    (control) => control.category === "notice" && control.isSelected
  );
  return (
    <div className="mb-2 overflow-hidden whitespace-nowrap text-white bg-zinc-800 relative">
      <div className="bg-zinc-800 absolute top-0 left-0 z-10 p-2 pl-6 text-red-600">
        <GrAnnounce size={14} />
      </div>
      <div className="inline-block animate-marquee px-4 text-xs">
        {notice?.title}
      </div>
    </div>
  );
};

export default MarqueeSlider;
