import { IoMdHome } from "react-icons/io";
import { useState } from "react";
import CashAgentSidebar from "../components/cash-agent/CashAgentSidebar";
import CashAgentMobileMenu from "../components/cash-agent/CashAgentMobileMenu";
import { Outlet } from "react-router-dom";

const CashAgentLayout = () => {
  const [open, setOpen] = useState(true);
  const menuItems = [
    { name: "Dashboard", icon: <IoMdHome />, path: "/cash-agent", submenu: [] },
    {
      name: "All Deposit History",
      icon: <IoMdHome />,
      path: "/all-deposit-history",
      submenu: [],
    },
    {
      name: "All Withdraw History",
      icon: <IoMdHome />,
      path: "/all-withdraw-history",
      submenu: [],
    },
    {
      name: "My All Deposit Method",
      icon: <IoMdHome />,
      path: "/my-all-deposit-method",
      submenu: [],
    },
    {
      name: "My All Withdraw Method",
      icon: <IoMdHome />,
      path: "/my-all-withdraw-method",
      submenu: [],
    },
    {
      name: "Request Admin Ticket",
      icon: <IoMdHome />,
      path: "/request-admin-ticket",
      submenu: [],
    },
    // {
    //   name: "Games Control",
    //   icon: <IoGameController />,
    //   submenu: [
    //     { name: "Categories", path: "/dashboard/game-categories" },
    //     { name: "Active Games", path: "/dashboard/active-games" },
    //     { name: "Inactive Games", path: "/dashboard/inactive-games" },
    //   ],
    // },
  ];
  return (
    <div className="flex">
      {/* CashAgent Sidebar */}
      <CashAgentSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <CashAgentMobileMenu open={open} menuItems={menuItems} />
        <div className="mt-[62px] md:mt-16 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CashAgentLayout;
