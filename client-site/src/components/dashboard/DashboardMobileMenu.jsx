import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/footer_logo.png";
import { Link, useNavigate } from "react-router-dom";
import OppsModal from "../shared/modal/OppsModal";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { FaAngleDown, FaRegCircle } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const DashboardMobileMenu = ({ open, menuItems }) => {
  const { user, token } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const toggleSubmenu = (index) => {
    setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
  };
  const { addToast } = useToasts();
  const navigate = useNavigate();

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-[#222222] pb-6 transform overflow-y-auto ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-white absolute top-3 right-3"
          >
            <HiX size={28} />
          </button>
          <Link to="/">
            <div className="py-2 ps-4">
              <img src={logo} className="w-28" alt="" />
            </div>
          </Link>

          {/* Menu List */}
          <ul className="font-bold text-white">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={!item?.path && !item?.submenu && handleMenuClick}
                  to={item?.path}
                >
                  <div
                    className={`px-4 py-3 flex items-center gap-2 border-b border-gray-700 duration-300 hover:bg-[#114d3a] hover:border-l-4 hover:border-l-slate-400 ${
                      !open && "justify-center"
                    }`}
                    onClick={() => item.submenu && toggleSubmenu(index)}
                  >
                    {/* Icon */}
                    {item?.icon}
                    {/* <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="w-5 h-5"
                    /> */}

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
                  <ul className="pl-8 flex flex-col gap-2 bg-[#114d3a]">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          onClick={() =>
                            !subItem?.path &&
                            !subItem?.submenu &&
                            handleMenuClick(subItem)
                          }
                          to={subItem?.demo ? subItem?.demo : subItem?.path}
                          className="px-4 py-2 flex gap-5 items-center text-white hover:bg-[#114d3a]"
                        >
                          {/* Icon */}
                          {/* {subItem?.icon} */}
                          <FaRegCircle className="text-yellow-400" />
                          {/* <img
                            src={subItem.icon}
                            alt={`${subItem.name} icon`}
                            className="w-5 h-5"
                          /> */}
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
