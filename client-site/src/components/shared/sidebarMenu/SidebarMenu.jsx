import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const SidebarMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "w-64" : "w-16"
      } hidden md:block duration-300 h-screen fixed`}
    >
      {/* Start Top collapse */}
      <div className={`bg-black py-3 ${!open && "py-5"}`}>
        <div className="flex gap-x-3 items-center justify-center">
          <div className={`flex gap-1 ${!open && "hidden"}`}>
            <button className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-200 hover:bg-slate-300 duration-300">
              <img
                className="w-6"
                src="https://img.m156b.com/mb/h5/assets/images/desktop/leftmenu-head/icon-cricket.svg"
                alt=""
              />
              <p className="text-sm font-semibold">CRICKET</p>
            </button>
            <button className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-yellow-400 hover:bg-yellow-600 duration-300">
              <img
                className="w-4"
                src="https://img.m156b.com/mb/h5/assets/images/desktop/leftmenu-head/icon-casino.svg"
                alt=""
              />
              <p className="w-16 text-start text-sm font-semibold">
                লাইভ ক্যাসিনো{" "}
              </p>
            </button>
          </div>
          <div>
            <IoIosArrowBack
              className={`m-auto text-center w-10 h-7 p-1 text-[#cacaca] bg-[#666666] hover:bg-[#575757] rounded-full cursor-pointer ${
                !open && "rotate-180"
              } `}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
      {/* End Top collapse */}
      {/* Start Menu bar */}
      <div className="bg-[#333] overflow-y-auto pb-20 h-full scrollbar-hide">
        <Link to={"/"}>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 border-b border-gray-700 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Home
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-slot.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Slots
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-sport.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Sports
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-table.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Table
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-crash.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Crash
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-lottery.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Lottery
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-fish.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Fishing
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-arcade.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Arcade
              </p>
            </div>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-promotion.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Promotions
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-download.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Download
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div
            className={`px-4 py-3 text-white flex justify-center hover:bg-red-600 duration-300 ${
              !open ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-2">
              <img
                className="w-6"
                src="https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-talk.png?v=1735554286625"
                alt=""
              />
              <p className={`text-white font-semibold ${!open && "hidden"}`}>
                Contact Us
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* End Menu bar */}
    </div>
  );
};

export default SidebarMenu;

// import { useState } from "react";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { IoIosArrowBack, IoMdFootball, IoMdHome } from "react-icons/io";
// import { Link } from "react-router-dom";

// const SidebarMenu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className={`${
//         open ? "w-64" : "w-16"
//       } duration-300 h-screen fixed top-0 left-0 bg-[#333]`}
//     >
//       {/* Sidebar Collapse Toggle */}
//       <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
//         <div className="flex items-center justify-center gap-x-3">
//           <div className={`flex gap-1 ${!open && "hidden"}`}>
//             <button className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-200 hover:bg-slate-100">
//               <img
//                 className="w-6"
//                 src="https://img.m156b.com/mb/h5/assets/images/desktop/leftmenu-head/icon-cricket.svg"
//                 alt=""
//               />
//               <p className="text-sm font-semibold">CRICKET</p>
//             </button>
//             <button className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-yellow-300 hover:bg-yellow-400">
//               <img
//                 className="w-4"
//                 src="https://img.m156b.com/mb/h5/assets/images/desktop/leftmenu-head/icon-casino.svg"
//                 alt=""
//               />
//               <p className="w-16 text-sm font-semibold">লাইভ ক্যাসিনো</p>
//             </button>
//           </div>
//           <IoIosArrowBack
//             className={`m-auto w-10 h-7 p-1 bg-yellow-300 rounded-full cursor-pointer ${
//               !open && "rotate-180"
//             }`}
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//       </div>

//       {/* Menu Items */}
//       <div className="bg-[#333] overflow-y-auto pb-20 h-full scrollbar-hide">
//         <Link to={"/"}>
//           <div
//             className={`pl-3 py-3 pr-2 text-yellow-300 flex gap-2 border-b border-gray-700 ${
//               !open && "justify-center"
//             }`}
//           >
//             <IoMdHome size={24} />
//             <p className={`${!open && "hidden"}`}>Home</p>
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <IoMdFootball size={24} />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-casino.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-slot.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-table.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-crash.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-lottery.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-fish.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-arcade.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-cockfighting.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-promotion.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-download.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-affiliate.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <img
//               className="w-6"
//               src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-ambassador.svg?v=1727771384153"
//               alt=""
//             />
//           </div>
//         </Link>
//         <Link>
//           <div className="py-3 text-yellow-300 flex justify-center">
//             <BiSolidPhoneCall size={24} />
//           </div>
//         </Link>
//         {/* Repeat similar structure for other menu items */}
//       </div>
//     </div>
//   );
// };

// export default SidebarMenu;
