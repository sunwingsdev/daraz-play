import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../assets/footer_logo.png";

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
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-9w.png?v=1735560346274",
          path: "#",
        },
        {
          name: "CRAZYTIME",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-crazytime.png?v=1735560346274",
          path: "#",
        },
        {
          name: "AVIATOR",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-aviator.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SUPERACE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-superace.png?v=1735560346274",
          path: "#",
        },
        {
          name: "MONEY COMING",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-moneycoming.png?v=1735560346274",
          path: "#",
        },
        {
          name: "ANDAR BAHAR",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-andarbahar.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SEXY BACCARAT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-sexybacarratclassic.png?v=1735560346274",
          path: "#",
        },
        {
          name: "7UP7DOWN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-7up7down2.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-exchange.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SBO",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-sbov2.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SABA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-saba.png?v=1735560346274",
          path: "#",
        },
        {
          name: "CMD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-cmd.png?v=1735560346274",
          path: "#",
        },
        {
          name: "BTI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-sbtech.png?v=1735560346274",
          path: "#",
        },
        {
          name: "HORSE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-horsebook.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SV388",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-awcmrwb.png?v=1735560346274",
          path: "#",
        },
        {
          name: "RWB",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-nst.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PINNACLE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-awcmpinnacle.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
          path: "#",
        },
        {
          name: "JDB",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdb.png?v=1735560346274",
          path: "#",
        },
        {
          name: "FASTSPIN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmfastspin.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PLAY8",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmp8.png?v=1735560346274",
          path: "#",
        },
        {
          name: "REDTIGER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmrt.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsg.png?v=1735560346274",
          path: "#",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
          path: "#",
        },
        {
          name: "FC",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmfc.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
          path: "#",
        },
        {
          name: "NETENT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-netent.png?v=1735560346274",
          path: "#",
        },
        {
          name: "JOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-joker.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-playngo.png?v=1735560346274",
          path: "#",
        },
        {
          name: "NEXTSPIN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-nextspin.png?v=1735560346274",
          path: "#",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
          path: "#",
        },
        {
          name: "YELLOWBAT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmyesbingo.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
          path: "#",
        },
        {
          name: "JILI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-evo.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SEXY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsexy.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
          path: "#",
        },
        {
          name: "HOTROAD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1735560346274",
          path: "#",
        },
        {
          name: "DG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmdg.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
          path: "#",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SPRIBE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
          path: "#",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
          path: "#",
        },
        {
          name: "BPOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-bpoker.png?v=1735560346274",
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-monopoly.png?v=1735560346274",
          path: "#",
        },
      ],
    },
    {
      name: "Lottery",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-lottery.png?v=1735554286625",
      submenu: [
        {
          name: "AVIATOR",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
          path: "#",
        },
        {
          name: "JILI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
          path: "#",
        },
      ],
    },
    {
      name: "Fishing",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-fish.png?v=1735554286625",
      submenu: [
        {
          name: "EVO",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-evo.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SEXY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsexy.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
          path: "#",
        },
        {
          name: "HOTROAD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1735560346274",
          path: "#",
        },
        {
          name: "DG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmdg.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
          path: "#",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
          path: "#",
        },
        {
          name: "SPRIBE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
          path: "#",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
          path: "#",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
          path: "#",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
          path: "#",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
          path: "#",
        },
        {
          name: "BPOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-bpoker.png?v=1735560346274",
          path: "#",
        },
        {
          name: "MONOPOLY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-monopoly.png?v=1735560346274",
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
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-telegram.png?v=1735560346274",
          path: "#",
        },
        {
          name: "Live Chat",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-customer.png?v=1735560346274",
          path: "#",
        },
        {
          name: "Messenger",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-facebook-messenger.png?v=1735560346274",
          path: "#",
        },
        {
          name: "Email",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-email.png?v=1735560346274",
          path: "#",
        },
      ],
    },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-[#222222] pb-6 transform overflow-y-auto ${
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
        <img src={logo} className="w-28" alt="" />
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
                      {/* Icon */}
                      <img
                        src={subItem.icon}
                        alt={`${subItem.name} icon`}
                        className="w-5 h-5"
                      />
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
