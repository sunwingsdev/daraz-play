import { IoMdMenu, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const DashboardMobileMenu = ({ open, menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the submenu and close sidebar when a submenu item is clicked
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Handle click on a submenu item (close the sidebar after selecting)
  const handleSubmenuClick = () => {
    closeSidebar();
  };

  //   const handleLogout = () => {
  //     logOut();
  //     addToast("Successfully logged out!", {
  //       appearance: "success",
  //       autoDismiss: true,
  //     });
  //   };

  return (
    <div>
      <div
        className={`bg-[#222222] p-4 fixed left-0 right-0 z-20 duration-300 ${
          !open ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between bg-[#172437]">
          <div className="m-2 mb-6 mt-6 w-3/5">
            <div className="rounded-lg">
              <div className="flex items-center rounded-tl-lg rounded-tr-lg">
                <Link to={"/"}>
                  <img className="w-44" src={logo} alt="logo" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="text-white cursor-pointer mt-1"
            onClick={closeSidebar}
          >
            <IoClose size={36} />
          </div>
        </div>

        {/* Menu Items with Fixed Icons and Dynamic Submenu */}
        <div className="text-white bg-[#172437]">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div
                className={`py-2.5 px-4 flex items-center justify-between ${
                  item.submenu.length > 0 ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  item.submenu.length > 0 && toggleSubmenu(item.name)
                }
              >
                <div className="flex items-center">
                  {item.icon}
                  <Link
                    to={item.path}
                    className="ml-2 block"
                    onClick={handleSubmenuClick}
                  >
                    {item.name}
                  </Link>
                </div>
                {item.submenu.length > 0 && (
                  <div>
                    {openSubmenu === item.name ? (
                      <IoIosArrowDown size={20} />
                    ) : (
                      <IoIosArrowForward size={20} />
                    )}
                  </div>
                )}
              </div>
              {openSubmenu === item.name && (
                <div className="pl-4">
                  {item.submenu.map((submenuItem) => (
                    <div key={submenuItem.name} className="py-2.5 pl-6 text-sm">
                      <Link
                        to={submenuItem.path}
                        className="block"
                        onClick={handleSubmenuClick}
                      >
                        {submenuItem.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMobileMenu;
