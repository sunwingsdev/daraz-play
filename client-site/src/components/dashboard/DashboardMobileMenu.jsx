import { IoMdMenu, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Close icon
import logo from "../../assets/footer_logo.png";
import { Link, useNavigate } from "react-router-dom";
import OppsModal from "../shared/modal/OppsModal";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

const DashboardMobileMenu = ({ open, menuItems }) => {
  const { user, token } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu
  const { addToast } = useToasts();
  const navigate = useNavigate();

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

  const handleMenuClick = (menu) => {
    if (!user && !token) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (menu?.path && !menu?.submenu) {
      navigate(menu?.path);
      closeSidebar();
    } else if (menu?.submenu) {
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSubmenuClick = (submenu) => {
    if (!user && !token) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (submenu?.path) {
      navigate(submenu?.path);
      closeSidebar();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#222222] p-4 fixed left-0 right-0 z-20 duration-300 ${
            !open ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <div
                className="md:hidden text-yellow-300"
                onClick={toggleSidebar}
              >
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
              <div
                key={item?.name}
                className={`${
                  menuItems[menuItems.length - 1] === item
                    ? ""
                    : "border-b-2 border-zinc-500"
                }`}
              >
                <div
                  className={`py-2.5 px-4 flex items-center justify-between ${
                    item?.submenu?.length > 0 ? "cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    item?.submenu?.length > 0 && toggleSubmenu(item?.name)
                  }
                >
                  <div
                    onClick={() => handleMenuClick(item)}
                    className="inline-flex items-center gap-3 w-full"
                  >
                    {item.icon} {item.name}
                  </div>
                  {item?.submenu?.length > 0 && (
                    <div>
                      {openSubmenu === item?.name ? (
                        <IoIosArrowDown size={20} />
                      ) : (
                        <IoIosArrowForward size={20} />
                      )}
                    </div>
                  )}
                </div>
                {openSubmenu === item?.name && (
                  <div className="pl-4">
                    {item?.submenu?.map((submenuItem) => (
                      <div
                        onClick={() => handleSubmenuClick(submenuItem)}
                        key={submenuItem?.name}
                        className={`py-2.5 pl-6 text-sm ${
                          item?.submenu[item?.submenu.length - 1] ===
                          submenuItem
                            ? ""
                            : "border-b-2 divide-black"
                        }`}
                      >
                        <Link to={submenuItem?.path} className="block">
                          {submenuItem?.name}
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

      {/* Modal */}
      <OppsModal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </OppsModal>
    </>
  );
};

export default DashboardMobileMenu;
