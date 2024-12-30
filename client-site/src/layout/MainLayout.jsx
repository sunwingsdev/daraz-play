import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/footer";
import Navbar from "../components/shared/navbar/Navbar";
import SidebarMenu from "../components/shared/sidebarMenu/SidebarMenu";
import { useState } from "react";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarMenu open={open} setOpen={setOpen} />

      {/* Content Area */}
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <Navbar open={open} />
        <div className="mt-[62px] md:mt-16 bg-gray-700">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
