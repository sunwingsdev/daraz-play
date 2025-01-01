import { useState } from "react";
import logo from "../../../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown, FaRegCircle } from "react-icons/fa";
import OppsModal from "../modal/OppsModal";
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaAffiliatetheme, FaUsers } from "react-icons/fa";
import { PiCashRegister } from "react-icons/pi";
import { SlGameController } from "react-icons/sl";
import { BsFront, BsPiggyBank, BsShop } from "react-icons/bs";

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
      icon: <IoMdHome />,
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
      icon: <IoMdHome />,
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
      icon: <PiCashRegister />,
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
      icon: <FaUsers />,
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
      icon: <FaUsers />,
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
      icon: <FaAffiliatetheme />,
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
      icon: <IoGameController />,
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
      icon: <IoGameController />,
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
      icon: <SlGameController />,
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
      icon: <BsShop />,
      path: "/promotions",
    },
    {
      name: "Refer Bonus",
      icon: <BsFront />,
      path: "/refer-bonus",
    },
    {
      name: "Download",
      icon: <BsPiggyBank />,
      path: "/download",
    },
    {
      name: "Contact Us",
      icon: <BsPiggyBank />,
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
        <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
          <div className="flex gap-x-3 items-center justify-center">
            <div className={`flex gap-1 ${!open && "hidden"}`}>
              <Link
                to={"/"}
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
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
                <img className="w-40" src={logo} alt="Logo" />
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
        className={`bg-[#222222] overflow-y-auto fixed mt-[62px] hidden md:block pb-16 ${
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
                className={`px-4 py-3 flex flex-row items-center gap-2 hover:bg-red-600 duration-300 ${
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
              <div className="pl-8 text-white text-sm font-semibold bg-black duration-300">
                {item?.submenu?.map((subItem, subIndex) => (
                  <Link
                    onClick={
                      !subItem.path && !subItem.submenu && handleModalOpen
                    }
                    key={subIndex}
                    to={subItem?.path}
                    className="py-2.5 flex gap-2"
                  >
                    <FaRegCircle size={22} className="text-yellow-300" />
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
