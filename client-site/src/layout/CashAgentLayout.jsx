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
import CashAgentSidebar from "../components/cash-agent/CashAgentSidebar";
// import DashboardSidebar from "../components/dashboard/DashboardSidebar";
// import DashboardMobileMenu from "../components/dashboard/DashboardMobileMenu";
// import { Outlet } from "react-router-dom";

const CashAgentLayout = () => {
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
        { name: "Active Games", path: "/dashboard/active-games" },
        { name: "Inactive Games", path: "/dashboard/inactive-games" },
      ],
    },
    {
      name: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { name: "Sprots Live TV", path: "/dashboard/games-api/sports-live-tv" },
        { name: "BetFair API", path: "/dashboard/games-api/betfair-api" },
        {
          name: "Sports Radar API",
          path: "/dashboard/games-api/sports-radar-api",
        },
        { name: "Odds Jam API", path: "/dashboard/games-api/odds-jam-api" },
        {
          name: "Bet Construct API",
          path: "/dashboard/games-api/bet-construct-api",
        },
        { name: "Kambi API", path: "/dashboard/games-api/kambi-api" },
        { name: "Pinnacle API", path: "/dashboard/games-api/pinnacle-api" },
        { name: "SoftSwiss API", path: "/dashboard/games-api/softswiss-api" },
        { name: "Betradar API", path: "/dashboard/games-api/betradar-api" },
        { name: "Evolution API", path: "/dashboard/games-api/evolution-api" },
        {
          name: "Pragmatic Play API",
          path: "/dashboard/games-api/pragmatic-play-api",
        },
        { name: "Playtech API", path: "/dashboard/games-api/playtech-api" },
        { name: "NetEnt API", path: "/dashboard/games-api/netent-api" },
        {
          name: "Betsoft Gaming API",
          path: "/dashboard/games-api/betsoft-gaming-api",
        },
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
        { name: "Home Control", path: "/dashboard/home-control" },
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
      <CashAgentSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
    </div>
  );
};

export default CashAgentLayout;
