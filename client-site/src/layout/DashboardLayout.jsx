import { IoMdHome } from "react-icons/io";

import {
  IoGameController,
  IoLogoWechat,
  IoSettingsSharp,
} from "react-icons/io5";

import { FaAffiliatetheme, FaUsers } from "react-icons/fa";
import { PiCashRegister } from "react-icons/pi";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { BsBank, BsFront, BsPiggyBank, BsShop } from "react-icons/bs";
import { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardMobileMenu from "../components/dashboard/DashboardMobileMenu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const menuItems = [
    { name: "Dashboard", icon: <IoMdHome />, path: "/dashboard", submenu: [] },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/dashboard/all-user",
      submenu: [],
    },
    {
      name: "Cash Agent",
      icon: <PiCashRegister />,
      path: "/dashboard/agent-tree",
      submenu: [],
    },
    {
      name: "Affiliators",
      icon: <FaAffiliatetheme />,
      path: "/dashboard/affiliators",
      submenu: [],
    },
    {
      name: "Games Control",
      icon: <IoGameController />,
      submenu: [
        { name: "Categories", path: "/dashboard/game-categories" },
        { name: "Active Games", path: "/dashboard/user-profile" },
        { name: "Inactive Games", path: "/dashboard/agent-profile" },
      ],
    },
    {
      name: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { name: "Sports Live TV", path: "/dashboard/games-api" },
        { name: "BetFair API", path: "/dashboard" },
        { name: "Sports Radar API", path: "/dashboard/user-profile" },
        { name: "Odds Jam API", path: "/dashboard/user-profile" },
        { name: "Bet Construct API", path: "/dashboard/user-profile" },
        { name: "Kambi API", path: "/dashboard/user-profile" },
        { name: "Pinnacle API", path: "/dashboard/user-profile" },
        { name: "SoftSwiss API", path: "/dashboard" },
        { name: "Betradar API", path: "/dashboard" },
        { name: "Evolution API", path: "/dashboard" },
        { name: "Pragmatic Play API", path: "/dashboard" },
        { name: "Playtech API", path: "/dashboard" },
        { name: "NetEnt API", path: "/dashboard" },
        { name: "Betsoft Gaming API", path: "/dashboard" },
      ],
    },
    {
      name: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { name: "Happy Hours", path: "/dashboard/games" },
        { name: "Deposit Bonuses", path: "/dashboard" },
        { name: "Refer Bonuses", path: "/dashboard" },
        { name: "Welcome Bonuses", path: "/dashboard" },
      ],
    },
    {
      name: "Game History",
      icon: <SlGameController />,
      submenu: [
        { name: "Play Stats", path: "/dashboard" },
        { name: "Win Game Stats", path: "/dashboard" },
        { name: "Loss Game Stats", path: "/dashboard" },
      ],
    },
    { name: "Tournament", icon: <BsShop />, path: "/dashboard", submenu: [] },
    { name: "Jack Pot", icon: <BsShop />, path: "/dashboard", submenu: [] },
    {
      name: "Frontend",
      icon: <BsFront />,
      submenu: [
        { name: "Slider", path: "/dashboard/frontend-slider" },
        { name: "Promotions", path: "/dashboard/promotion-offer" },
        { name: "Pages", path: "/dashboard" },
        { name: "Notice", path: "/dashboard" },
        { name: "About Us", path: "/dashboard" },
        { name: "FAQ", path: "/dashboard" },
        { name: "Sponsorship", path: "/dashboard" },
        { name: "Brand Ambassador", path: "/dashboard" },
      ],
    },
    {
      name: "Banking Deposit",
      icon: <BsPiggyBank />,
      submenu: [
        { name: "Deposit Method", path: "/dashboard" },
        { name: "Deposit History", path: "/dashboard/deposits" },
      ],
    },
    {
      name: "Banking Withdraw",
      icon: <BsBank />,
      submenu: [
        { name: "Withdraw Method", path: "/dashboard" },
        { name: "Withdraw History", path: "/dashboard/withdraws" },
      ],
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { name: "Pincodes", path: "/dashboard" },
        { name: "Activity Log", path: "/dashboard" },
        { name: "Permissions", path: "/dashboard" },
        { name: "Gateway API Keys", path: "/dashboard" },
        { name: "SMS", path: "/dashboard" },
        { name: "Mailings", path: "/dashboard" },
        { name: "Support", path: "/dashboard" },
        { name: "Security", path: "/dashboard" },
      ],
    },
    {
      name: "Oracle Technology",
      icon: <IoLogoWechat />,
      submenu: [
        { name: "Instant Support", path: "/dashboard" },
        { name: "Normal Support", path: "/dashboard" },
        { name: "Permissions", path: "/dashboard" },
        { name: "Notice", path: "/dashboard" },
        { name: "About Us", path: "/dashboard" },
        { name: "Contact Us", path: "/dashboard" },
      ],
    },
  ];
  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <DashboardSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <DashboardMobileMenu open={open} menuItems={menuItems} />
        <div className="mt-[62px] md:mt-16 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
