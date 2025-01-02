import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import OppsModal from "../modal/OppsModal";
import logo from "../../../assets/footer_logo.png";

const SidebarMenu = ({ open, setOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    GamesControl: false,
    GamesApikey: false,
    OracleTechnology: false, // Track submenu state for Games Control
    Bonuses: false, // Track submenu state for Games Control
    gameHistory: false, // Track submenu state for Games Control
    Fontend: false, // Track submenu state for Games Control
    BankingDeposit: false, // Track submenu state for Games Control
    BankingWithdrow: false, // Track submenu state for Games Control
    Settings: false, // Track submenu state for Games Control
  });

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
  //   const logoHomeControl = homeControls?.find(
  //       (control) => control.category === "logo" && control.isSelected === true
  //      );

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Handle toggle sidebar visibility
  const handleToggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  // Open modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div
        className={`${
          open ? "w-64" : "w-16"
        } hidden md:block duration-300 h-screen fixed`}
      >
        {/* Start Top collapse */}
        <div className={`bg-black py-3 ${!open && "py-5"}`}>
          <div className="flex gap-x-3 items-center justify-center">
            <div className={`flex gap-1 ${!open && "hidden"}`}>
              <Link
                to={"/"}
                className="flex items-center gap-1 px-2 rounded-lg"
              >
                {/* {logoHomeControl?.image ? (
                  <img
                    className="w-40"
                    src={`${import.meta.env.VITE_BASE_API_URL}${
                      logoHomeControl?.image
                    }`}
                    alt="Logo"
                  />
                ) : (
                  <div className="h-10"></div>
                )} */}
                <img className="w-32" src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <IoIosArrowBack
                className={`m-auto text-center w-10 h-7 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer ${
                  !open && "rotate-180"
                } `}
                onClick={handleToggleSidebar}
              />
            </div>
          </div>
        </div>
        {/* End Top collapse */}
      </div>

      {/* Start Menu bar */}
      <div
        className={`bg-[#303030] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold h-full scrollbar-hide`}
      >
        {/* Dynamic Menu Rendering */}
        {menuItems?.map((item, index) => (
          <div key={index}>
            <Link
              onClick={!item?.path && !item?.submenu && handleModalOpen}
              to={item?.path || "#"}
            >
              <div
                className={`px-4 py-2 flex flex-row items-center gap-2 hover:bg-red-600 duration-300 ${
                  open ? "justify-between" : "justify-center"
                }
                }`}
                onClick={() => item?.submenu && toggleSubmenu(item?.name)}
              >
                {/* Only show icon for menu items with submenus */}
                <div className="flex flex-row items-center gap-2">
                  <img className="w-8" src={item?.icon} alt="" />
                  <p className={`${!open && "hidden"}`}>{item?.name}</p>
                </div>
                {/* Show arrow for submenu toggle */}
                {item?.submenu && item?.submenu?.length !== 0 && open && (
                  <FaAngleDown className={`text-white ${!open && "hidden"}`} />
                )}
              </div>
            </Link>

            {/* Only show submenu when "Games Control" is clicked */}
            {item?.submenu && submenuOpen[item?.name] && open && (
              <div className="pl-8 text-white text-sm font-semibold bg-[#1c1b1b] duration-300">
                {item?.submenu?.map((subItem, subIndex) => (
                  <Link
                    onClick={
                      !subItem.path && !subItem.submenu && handleModalOpen
                    }
                    key={subIndex}
                    to={subItem?.path}
                    className="py-2.5 flex gap-2"
                  >
                    <img className="w-5 h-5" src={subItem?.icon} alt="" />
                    {subItem?.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <OppsModal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </OppsModal>
    </div>
  );
};

export default SidebarMenu;
