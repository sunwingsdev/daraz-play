import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import AccoundModal from "../modal/AccoundModal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
import { MdHome } from "react-icons/md";

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

  return (
    <div>
      <div
        className={`bg-[#333333] p-4 fixed left-0 right-0 z-20 duration-300 ${
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
                src="https://img.m156b.com/mb/h5/assets/images/dark/logo.png?v=1727771384153"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            <div className="flex gap-1 sm:gap-2">
              <button
                className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 rounded-md"
                onClick={() => openModal("login_modal")}
              >
                লগ ইন
              </button>
              <button
                className="text-xs sm:text-sm font-medium px-2 sm:px-3 md:px-6 py-1 md:py-2 bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-md"
                onClick={() => openModal("signup_modal")}
              >
                সাইন আপ
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-6 md:w-7">
                <img
                  src={
                    "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                  }
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
                  src="https://img.m156b.com/mb/h5/assets/images/dark/animation/head-coin.png?v=1730260800861"
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
      <AccoundModal id="login_modal" title="লগ ইন" buttonText="লগ ইন">
        <form className="py-4 px-4">
          <div className="bg-[#45434360] p-3 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="name">
                ব্যবহারকারীর নাম
              </label>
              <input
                type="name"
                placeholder="৪-১৫ অক্ষর নাম্বার এলাউ"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                placeholder="৬-২০ অক্ষর বা সংখ্যা"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="text-right text-xs text-yellow-300">
              <div className="p-0.5 inline-block border border-yellow-300 rounded-md cursor-pointer">
                পাসওয়ার্ড ভুলে গেছেন?
              </div>
            </div>
          </div>
        </form>
      </AccoundModal>

      {/* Signup Modal */}
      <AccoundModal id="signup_modal" title="সাইন আপ" buttonText="নিশ্চিত করুন">
        <form className="py-4 px-4">
          <div className="bg-[#45434360] p-3 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="name">
                ব্যবহারকারীর নাম
              </label>
              <input
                type="name"
                placeholder="৪-১৫ অক্ষর নাম্বার এলাউ"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                placeholder="৬-২০ অক্ষর বা সংখ্যা"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
          </div>
          <div className="bg-[#45434360] p-3 mt-2 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                ফোন নাম্বার
              </label>
              <input
                type="password"
                placeholder="ফোন নাম্বার"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
          </div>
        </form>
      </AccoundModal>
    </div>
  );
};

export default Navbar;
