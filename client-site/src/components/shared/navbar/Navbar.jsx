import { IoIosEye, IoIosEyeOff, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import AccoundModal from "../modal/AccoundModal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { FaSync } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const Navbar = ({ open }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = (id) => {
    document.getElementById(id).showModal();
  };
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const toggleLanguageModal = () => {
    setIsLanguageModalOpen(!isLanguageModalOpen);
  };

  // পাসওয়ার্ড শো/হাইড করার জন্য টাইপ পরিবর্তন
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Phone Number শুধুমাত্র সংখ্যা গ্রহণ করতে হবে
  const [phone, setPhone] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };
  // ভেরিফিকেশন কোড
  const [verificationCode, setVerificationCode] = useState(generateCode());
  // ভেরিফিকেশন কোড জেনারেট করার ফাংশন
  function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // ৬-সংখ্যার কোড
  }
  // রিফ্রেশ ফাংশন
  const handleRefresh = () => {
    const newCode = generateCode();
    setVerificationCode(newCode);
  };

  return (
    <div>
      <div
        className={`bg-[#222222] p-4 fixed left-0 right-0 z-20 duration-300 ${
          !open ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
            <Link to={"/"}>
              <img
                className="w-24 sm:w-28 md:w-36"
                src="https://img.d4040p.com/dp/h5/assets/images/logo.png?v=1735034317574"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            <div className="flex gap-1 sm:gap-2">
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div className="m-2 mb-6 mt-6 w-3/5">
            <div className="border-2 border-[#2a2a2a] rounded-lg">
              <div className="flex items-center bg-[#242424] rounded-tl-lg rounded-tr-lg">
                <img
                  className="w-24"
                  src="https://img.d4040p.com/dp/h5/assets/images/member-logo.png?v=1735034317574"
                  alt=""
                />
                <p className="text-sm font-semibold text-yellow-300">
                  হাই স্বাগতম
                </p>
              </div>
              <div className="bg-yellow-300 py-4 px-4 flex gap-2 justify-between rounded-br-lg rounded-bl-lg">
                <div className="flex items-center gap-1">
                  <HiOutlineLogin />
                  <p className="text-sm font-medium text-black">লগ ইন</p>
                </div>
                <div className="flex items-center gap-1">
                  <BiUserPlus />
                  <p className="text-sm font-medium text-black">সাইন আপ</p>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-x-2 gap-y-[10px]">
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-sport.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    স্পোর্ট
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-casino.svg"
                    alt=""
                  />
                  <p className="mt-1 whitespace-nowrap text-white text-[10px] font-medium text-center">
                    লাইভ ক্যাসিনো
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-slot.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    স্লট
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-table.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    টেবিল
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-crash.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    ক্রাশ
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-lottery.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    লটারি
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-fish.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    ফিশিং
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-arcade.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    আর্কেড
                  </p>
                </div>
              </Link>
              <Link>
                <div className="py-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
                  <img
                    className="w-7 m-auto"
                    src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-cockfighting.svg"
                    alt=""
                  />
                  <p className="mt-1 text-white text-[10px] font-medium text-center">
                    মোরগ লড়াই
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
              <div className="grid grid-cols-3 items-center">
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-promotion.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      প্রমোশন
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-download.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      ডাউনলোড
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-affiliate.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      অ্যাফিলিয়েট
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-ambassador.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      অ্যাম্বাসেডর
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg">
              <div className="grid grid-cols-3 items-center">
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-telegram.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      Telegram
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-whatsapp.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      WhatsApp
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-facebook-messenger.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      Facebook Messenger
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-email.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      মার্কেটিং ইমেইল
                    </p>
                  </div>
                </Link>
                <Link>
                  <div className="py-2">
                    <img
                      className="w-7 m-auto"
                      src="https://img.m156b.com/mb/h5/assets/images/dark/menu/icon-email.svg"
                      alt=""
                    />
                    <p className="mt-1 text-white text-[10px] font-medium text-center">
                      গ্রাহক সাহায্য ইমেল
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-2 bg-[#242424] border-2 border-[#2a2a2a] rounded-lg grid grid-cols-2">
              <Link to={"/"}>
                <div className="flex items-center gap-1 py-4 px-2">
                  <MdHome size={30} className="text-yellow-400" />
                  <p className="text-xs font-medium text-white">হোম</p>
                </div>
              </Link>
              <div className="flex items-center gap-1 py-4 px-2">
                <HiOutlineLogin size={30} className="text-yellow-400" />
                <p className="text-xs font-medium text-white">লগ ইন</p>
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
      </div>

      {/* Login Modal */}
      <AccoundModal id="login_modal" title="Login" buttonText="Login">
        <form className="py-4 px-6">
          <div className="space-y-1 mb-2">
            <label className="text-white text-sm" htmlFor="name">
              Username
            </label>
            <input
              type="name"
              placeholder="4-15 char, allow number"
              className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
              required
            />
          </div>
          <div className="space-y-1 relative">
            <label className="text-white text-sm" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // পাসওয়ার্ড শো/হাইড করার জন্য টাইপ পরিবর্তন
              placeholder="6-20 Characters and Numbers"
              className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
              required
            />
            <button
              type="button"
              className="absolute top-8 right-3 text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>

          <div className="text-right text-sm font-semibold text-red-600">
            <div className="inline-block cursor-pointer">Forgot password?</div>
          </div>
        </form>
      </AccoundModal>

      {/* Signup Modal */}
      <AccoundModal id="signup_modal" title="Sign Up" buttonText="Submit">
        <form className="py-4 px-6">
          <div className="space-y-1 mb-2">
            <label className="text-white text-sm" htmlFor="name">
              Username
            </label>
            <input
              type="name"
              placeholder="4-15 char, allow number"
              className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
              required
            />
          </div>
          <div className="space-y-1 relative mb-2">
            <label className="text-white text-sm" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // পাসওয়ার্ড শো/হাইড করার জন্য টাইপ পরিবর্তন
              placeholder="6-20 Characters and Numbers"
              className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
              required
            />
            <button
              type="button"
              className="absolute top-8 right-3 text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </button>
          </div>
          <div className="space-y-1 relative w-full mb-2">
            <label className="text-white text-sm" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center bg-[#363636] text-white ring-1 ring-[#767575] hover:ring-red-600 rounded-md">
              <div className="flex items-center px-3 border-r border-[#767575]">
                <img
                  src="https://flagcdn.com/w40/bd.png"
                  alt="Bangladesh Flag"
                  className="w-6 h-4"
                />
                <span className="ml-2">+880</span>
              </div>
              <input
                type="text"
                value={phone}
                onChange={handleInputChange}
                placeholder="1XXXXXXXXX"
                className="flex-1 bg-transparent border-none outline-none py-1.5 px-4 text-white"
                maxLength="10"
                required
              />
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="text-white text-sm" htmlFor="verificationCode">
              Verification Code
            </label>
            <div className="flex items-center bg-[#363636] text-white ring-1 ring-[#767575] hover:ring-red-600 rounded-md">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full bg-transparent text-white py-2 px-4 outline-none"
                  maxLength={6}
                />
              </div>
              <div className="w-1/2 flex items-center justify-between border-l border-[#767575] px-3 gap-3">
                <span className="text-lg">{verificationCode}</span>
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="hover:text-red-600"
                >
                  <FaSync size={18} />
                </button>
              </div>
            </div>
          </div>
        </form>
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
  );
};

export default Navbar;
