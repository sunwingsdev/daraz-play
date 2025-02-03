import { HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";
import OppsModal from "../modal/OppsModal";
import { useGetHomeControlsQuery } from "../../../redux/features/allApis/homeControlApi/homeControlApi";

const MobileLeftSideMenu = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const { user, token } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const sidebarRef = useRef(null);
  const toggleSubmenu = (index) => {
    setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
  };
  const { addToast } = useToasts();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Sidebar বন্ধ হবে
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuOpen]);

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const menuItems = [
    {
      name: "Home",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1735554286625",
      path: "/",
    },
    {
      name: "Hot Games",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-arcade.png?v=1735554286625",
      submenu: [
        {
          name: "9WICKETS",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-9w.png?v=1735560346274",
        },
        {
          name: "CRAZYTIME",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-crazytime.png?v=1735560346274",
        },
        {
          name: "AVIATOR",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-aviator.png?v=1735560346274",
          demo: "/games/demo/aviator",
        },
        {
          name: "SUPERACE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-superace.png?v=1735560346274",
          demo: "/games/demo/super-ace",
        },
        {
          name: "MONEY COMING",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-moneycoming.png?v=1735560346274",
        },
        {
          name: "ANDAR BAHAR",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-andarbahar.png?v=1735560346274",
        },
        {
          name: "SEXY BACCARAT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-sexybacarratclassic.png?v=1735560346274",
        },
        {
          name: "7UP7DOWN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-7up7down2.png?v=1735560346274",
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
        },
        {
          name: "SBO",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-sbov2.png?v=1735560346274",
        },
        {
          name: "SABA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-saba.png?v=1735560346274",
        },
        {
          name: "CMD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-cmd.png?v=1735560346274",
        },
        {
          name: "BTI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-sbtech.png?v=1735560346274",
        },
        {
          name: "HORSE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-horsebook.png?v=1735560346274",
        },
        {
          name: "SV388",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-awcmrwb.png?v=1735560346274",
        },
        {
          name: "RWB",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-nst.png?v=1735560346274",
        },
        {
          name: "PINNACLE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/sports-icon/icon-awcmpinnacle.png?v=1735560346274",
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
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
        },
        {
          name: "JDB",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdb.png?v=1735560346274",
        },
        {
          name: "FASTSPIN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmfastspin.png?v=1735560346274",
        },
        {
          name: "PLAY8",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmp8.png?v=1735560346274",
        },
        {
          name: "REDTIGER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmrt.png?v=1735560346274",
        },
        {
          name: "SG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsg.png?v=1735560346274",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
        },
        {
          name: "FC",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmfc.png?v=1735560346274",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
        },
        {
          name: "NETENT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-netent.png?v=1735560346274",
        },
        {
          name: "JOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-joker.png?v=1735560346274",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-playngo.png?v=1735560346274",
        },
        {
          name: "NEXTSPIN",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-nextspin.png?v=1735560346274",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
        },
        {
          name: "YELLOWBAT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmyesbingo.png?v=1735560346274",
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
        },
        {
          name: "JILI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
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
        },
        {
          name: "SEXY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsexy.png?v=1735560346274",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
        },
        {
          name: "HOTROAD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1735560346274",
        },
        {
          name: "DG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmdg.png?v=1735560346274",
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
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
        },
        {
          name: "SPRIBE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
        },
        {
          name: "BPOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-bpoker.png?v=1735560346274",
        },
        {
          name: "MONOPOLY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-monopoly.png?v=1735560346274",
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
        },
        {
          name: "JILI",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmjili.png?v=1735560346274",
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
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
        },
        {
          name: "SEXY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmsexy.png?v=1735560346274",
        },
        {
          name: "PP",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpp.png?v=1735560346274",
        },
        {
          name: "PT",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmpt.png?v=1735560346274",
        },
        {
          name: "HOTROAD",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1735560346274",
        },
        {
          name: "DG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmdg.png?v=1735560346274",
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
        },
        {
          name: "KM",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-awcmkm.png?v=1735560346274",
        },
        {
          name: "RICH88",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-rich88.png?v=1735560346274",
        },
        {
          name: "SPRIBE",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-jdbaspribe.png?v=1735560346274",
        },
        {
          name: "PG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-pg.png?v=1735560346274",
        },
        {
          name: "WORLDMATCH",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-worldmatch.png?v=1735560346274",
        },
        {
          name: "KA",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-ka.png?v=1735560346274",
        },
        {
          name: "CQ9",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
        },
        {
          name: "PNG",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-cq9.png?v=1735560346274",
        },
        {
          name: "BPOKER",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-bpoker.png?v=1735560346274",
        },
        {
          name: "MONOPOLY",
          icon: "https://img.d4040p.com/dp/h5/assets/images/brand/white/provider-monopoly.png?v=1735560346274",
        },
      ],
    },
    {
      name: "Promotions",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-promotion.png?v=1735554286625",
      path: "/promotion",
    },
    {
      name: "Download",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-download.png?v=1735554286625",
    },
    {
      name: "Contact Us",
      icon: "https://img.k516g.com/kg/h5/assets/images/icon-set/theme-icon/icon-talk.png?v=1735554286625",
      submenu: [
        {
          name: "Telegram Support",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-telegram.png?v=1735560346274",
        },
        {
          name: "Live Chat",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-customer.png?v=1735560346274",
        },
        {
          name: "Messenger",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-facebook-messenger.png?v=1735560346274",
        },
        {
          name: "Email",
          icon: "https://img.d4040p.com/dp/h5/assets/images/icon-set/theme-icon/icon-email.png?v=1735560346274",
        },
      ],
    },
  ];

  const handleMenuClick = (submenu) => {
    if (!user && !token) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (submenu?.demo) {
      navigate(submenu?.demo);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-mobileMenuBg pb-6 transform overflow-y-auto ${
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

      <div className="pt-6 pb-3 ps-4">
        {isLoading ? (
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
            className="w-28"
            alt=""
          />
        )}
      </div>

      {/* Menu List */}
      <ul className="font-bold text-white">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              onClick={!item?.path && !item?.submenu && handleMenuClick}
              to={item?.path}
            >
              <div
                className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:border-l-4 hover:border-l-slate-400 ${
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
              <ul className="pl-4 py-2 flex flex-col gap-1 bg-mobileSubMenuBg">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      onClick={() =>
                        !subItem?.path &&
                        !subItem?.submenu &&
                        handleMenuClick(subItem)
                      }
                      to={subItem?.demo ? subItem?.demo : subItem?.path}
                      className="px-4 py-2 flex gap-4 text-sm items-center text-white"
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
      {/* Modal */}
      <OppsModal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </OppsModal>
    </div>
  );
};

export default MobileLeftSideMenu;
