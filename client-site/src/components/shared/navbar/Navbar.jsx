import { Link, useNavigate } from "react-router-dom";
import AccoundModal from "../modal/AccoundModal";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiMenuAltLeft } from "react-icons/bi";
import { LuHardDriveDownload } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineMessage } from "react-icons/md";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useLazyGetUserByIdQuery } from "../../../redux/features/allApis/usersApi/usersApi";
import { logout, setSingleUser } from "../../../redux/slices/authSlice";
import { useToasts } from "react-toast-notifications";
import { TfiReload } from "react-icons/tfi";
import DepositModal from "../../home/deposit-modal/DepositModal";
import { FaRegUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsProjector } from "react-icons/bs";

const Navbar = ({ open }) => {
  const [loading, setLoading] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { token, user, singleUser } = useSelector((state) => state.auth);
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!user) return;
    getSingleUser(user?._id).then(({ data }) => {
      dispatch(setSingleUser(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const reloadBalance = () => {
    if (!user) return;

    setLoading(true);

    getSingleUser(user?._id)
      .then(({ data }) => {
        dispatch(setSingleUser(data));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  // LanguageModal
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const toggleLanguageModal = () => {
    setIsLanguageModalOpen(!isLanguageModalOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#222222] py-2 md:py-4 px-4 fixed left-0 right-0 z-20 duration-300 ${
            !open ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <div className="md:flex items-center justify-between">
            <div className="flex items-center justify-between gap-1 sm:gap-3">
              <button
                className="md:hidden text-red-600"
                onClick={toggleSidebar}
              >
                <BiMenuAltLeft size={36} />
              </button>
              <Link to={"/"}>
                <img
                  className="w-36 sm:w-28 md:w-36"
                  src="https://img.d4040p.com/dp/h5/assets/images/logo.png?v=1735034317574"
                  alt=""
                />
              </Link>
              <div className="flex items-center gap-3 text-red-600 md:hidden">
                <div className="flex flex-col items-center cursor-pointer">
                  <LuHardDriveDownload size={26} />
                  <p>app</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <MdOutlineMessage size={26} />
                  <p>LiveChat</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-1 sm:gap-2 md:gap-3">
              <div className="flex gap-1 items-center sm:gap-2">
                {!user && !token ? (
                  <>
                    <button
                      className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 text-white loginButtonBgColor transition-all duration-300 rounded-md"
                      onClick={() => openModal("login_modal")}
                    >
                      Login
                    </button>
                    <button
                      className="text-xs sm:text-sm font-medium px-2 sm:px-3 md:px-6 py-1 md:py-2 text-white signinButtonBgColor transition-all duration-300 rounded-md"
                      onClick={() => openModal("signup_modal")}
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    {/* <button
                      onClick={() => setIsDepositModalOpen(true)}
                      className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 text-black bg-[#fde111] transition-all duration-300 rounded-md"
                    >
                      Deposit
                    </button>
                    <button
                      onClick={handleLogout}
                      className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 text-black bg-[#fde111] transition-all duration-300 rounded-md"
                    >
                      logout
                    </button>
                    <button className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 text-white bg-[#2d985f] transition-all duration-300 rounded-md inline-flex items-center gap-2">
                      {loading ? (
                        <span>...</span>
                      ) : (
                        <TfiReload onClick={reloadBalance} />
                      )}
                      Main Balance <span>{singleUser?.balance || 0}</span>
                    </button>
                    <FaRegUserCircle className="text-xl text-white md:text-3xl" /> */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsDepositModalOpen(true)}
                        className="flex items-center gap-1 py-1.5 px-3 rounded-md text-white loginButtonBgColor"
                      >
                        {" "}
                        <RiLuggageDepositFill size={18} />
                        Deposit
                      </button>
                      <button
                        onClick={reloadBalance}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                      >
                        <TfiReload
                          className={`mr-2 ${
                            loading ? "animate-spin" : ""
                          } transition duration-300`}
                        />

                        <span className="mr-2">Main Wallet</span>
                        <span className="font-semibold">
                          {singleUser?.balance || 0}
                        </span>
                      </button>
                      <button>
                        <FaRegUserCircle size={24} className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center">
                <div
                  className="w-6 md:w-7 cursor-pointer"
                  onClick={toggleLanguageModal}
                >
                  <img
                    src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                    alt="BD flag"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu login and sign up*/}
        <div className="fixed bottom-0 left-0 z-50 w-full text-white flex justify-between md:hidden">
          {/* Bangladesh Flag Section */}
          <button
            className="py-1.5 px-1 w-full flex justify-center gap-1 languageBgColor"
            onClick={toggleLanguageModal}
          >
            <img
              className="w-8 h-8"
              src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
              alt="BD flag"
            />
            <span className="text-sm text-start font-semibold leading-none">
              BDT <br /> English
            </span>
          </button>
          {/* Sign In Button */}
          <button
            className="py-1.5 px-1 w-full flex items-center justify-center signinButtonBgColor"
            onClick={() => openModal("signup_modal")}
          >
            Sign up
          </button>
          {/* Login Button */}
          <button
            className="py-1.5 px-1 w-full flex items-center justify-center loginButtonBgColor"
            onClick={() => openModal("login_modal")}
          >
            Login
          </button>
        </div>

        {/* Login Modal */}
        <AccoundModal id="login_modal" title="Login">
          <LoginForm />
        </AccoundModal>

        {/* Signup Modal */}
        <AccoundModal id="signup_modal" title="Sign Up">
          <SignupForm />
        </AccoundModal>

        {/* Language Modal */}
        {isLanguageModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 z-40 backdrop-filter backdrop-blur">
            <div className="relative bg-black rounded-lg ">
              <div className="flex justify-between items-center gap-4 p-4 bg-[#333] rounded-t-lg">
                <p className="text-white text-lg font-bold">
                  Currency and Language
                </p>
                <button
                  className="absolute top-2 right-2 text-white"
                  onClick={toggleLanguageModal}
                >
                  <IoClose size={24} />
                </button>
              </div>
              <div className="py-6 px-4">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <img
                      className="w-8 sm:w-10"
                      src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                      alt="BD flag"
                    />
                    <div className="flex items-center text-sm sm:text-base font-semibold text-gray-400">
                      <TbCurrencyTaka /> BDT
                    </div>
                  </div>
                  <button className="text-white p-1.5 w-24 sm:w-32 border border-gray-500">
                    বাংলা
                  </button>
                  <button className="text-red-600 p-1.5 w-24 sm:w-32 border border-red-600">
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isDepositModalOpen && (
        <DepositModal closeDepositModal={() => setIsDepositModalOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
