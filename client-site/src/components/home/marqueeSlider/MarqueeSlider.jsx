import { GrAnnounce } from "react-icons/gr";

const MarqueeSlider = ({ messages }) => {
  return (
    <div className="mb-2 overflow-hidden whitespace-nowrap text-white bg-zinc-800 relative">
      <div className="bg-zinc-800 absolute top-0 left-0 z-10 p-2 pl-6 text-red-600">
        <GrAnnounce size={14} />
      </div>
      <div className="inline-block animate-marquee">
        {messages.map((message, index) => (
          <span key={index} className="px-4 py-2 text-xs">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
