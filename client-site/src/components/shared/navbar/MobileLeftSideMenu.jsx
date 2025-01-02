import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import logo from "../../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const MobileLeftSideMenu = ({ isMenuOpen, toggleMenu }) => {
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const toggleSubmenu = (index) => {
    setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
  };
  const menuItems = [
    {
      name: "Home",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1735554286625",
      path: "/",
      submenu: [],
    },
    {
      name: "Hot Games",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-arcade.png?v=1735554286625",
      submenu: [
        {
          name: "9WICKETS",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "CRAZYTIME",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "AVIATOR",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SUPERACE",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "MONEY COMING",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "ANDAR BAHAR",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SEXY BACCARAT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "7UP7DOWN",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Sports",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-sport.png?v=1735554286625",
      submenu: [
        {
          name: "9WICKETS",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SBO",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SABA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "CMD",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "BTI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "HORSE",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SV388",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "RWB",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "INSPORTS",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PINNACLE",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Slot",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-slot.png?v=1735554286625",
      submenu: [
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "JDB",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "FASTSPIN",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PLAY8",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "REDTIGER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "CQ9",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "FC",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PP",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "NETENT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "JOKER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PNG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "NEXTSPIN",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "RICH88",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "YELLOWBAT",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Crash",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-crash.png?v=1735554286625",
      submenu: [
        {
          name: "AVIATOR",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KM",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PP",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Casino",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-casino.png?v=1735554286625",
      submenu: [
        {
          name: "EVO",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SEXY",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PP",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "HOTROAD",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "DG",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Table",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-table.png?v=1735554286625",
      submenu: [
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KM",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "RICH88",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SPRIBE",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "CQ9",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PNG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "BPOKER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Lottery",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-lottery.png?v=1735554286625",
      submenu: [
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KM",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "JOKER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "YELLOWBAT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SABA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Fishing",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-fish.png?v=1735554286625",
      submenu: [
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KM",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "JOKER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "YELLOWBAT",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SABA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Arcade",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-arcade.png?v=1735554286625",
      submenu: [
        {
          name: "JILI",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KM",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "RICH88",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "SPRIBE",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "KA",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "CQ9",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "PNG",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "BPOKER",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
    {
      name: "Promotions",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-promotion.png?v=1735554286625",
      path: "/promotions",
    },
    {
      name: "Download",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-download.png?v=1735554286625",
      path: "/download",
    },
    {
      name: "Contact Us",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-talk.png?v=1735554286625",
      submenu: [
        {
          name: "Telegram Support",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "Live Chat",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "Messenger",
          icon: <IoMdHome />,
          path: "#",
        },
        {
          name: "Email",
          icon: <IoMdHome />,
          path: "#",
        },
      ],
    },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-[#222222] py-6 transform overflow-y-auto ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="text-white absolute top-3 right-3"
      >
        <HiX size={28} />
      </button>

      <div className="py-2 ps-4">
        <img src={logo} className="w-40" alt="" />
      </div>

      {/* Menu List */}
      <ul className="font-bold text-white">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path || "#"}>
              <div
                className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-red-600 hover:border-l-4 hover:border-l-slate-400 ${
                  !open && "justify-center"
                }`}
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-5 h-5"
                />

                {/* Label */}
                <div className="flex items-center justify-between w-full">
                  <p className="">{item.name}</p>
                  {item?.submenu && item?.submenu?.length !== 0 && open && (
                    <FaAngleDown
                      className={`text-white duration-300 transform ${
                        submenuOpenIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Submenu toggle arrow */}
              </div>
            </Link>

            {/* Render Submenu */}
            {item.submenu && submenuOpenIndex === index && open && (
              <ul className="ml-8 flex flex-col gap-2 border-l border-gray-700">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subItem.path || "#"}
                      className="px-4 py-2 flex gap-5 items-center text-gray-400 hover:text-white hover:bg-red-600"
                    >
                      {/* Submenu Icon */}
                      {subItem.icon || <IoMdHome size={20} />}
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )} */}
    </div>
  );
};

export default MobileLeftSideMenu;
