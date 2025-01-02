import { Menu } from "@headlessui/react";
import { BsBoxArrowInDown, BsBoxArrowInRight } from "react-icons/bs";
import { RiLuggageDepositFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoProjectSymlink } from "react-icons/go";
import {
  MdLockReset,
  MdOutlineForwardToInbox,
  MdOutlinePersonalInjury,
  MdOutlineRoomPreferences,
} from "react-icons/md";

const UserMenu = ({ handleLogout, openDeposit, openWithdraw }) => {
  const { user, singleUser } = useSelector((state) => state.auth);

  return (
    <div className=" space-y-1 w-44 rounded-lg">
      <div className="p-4 text-gray-100 bg-[#da120fdd] rounded-t-lg">
        <h2 className="text-sm font-bold">{singleUser?.username}</h2>
        <p className="text-sm mt-2">VIP Points</p>
        <span className="text-white font-bold">0</span>
        <p className="text-sm mt-0.5">Bonus Wallet</p>
        <span className="text-white font-bold">
          ৳ {singleUser?.balance || 0}
        </span>
      </div>
      {user && singleUser?.role === "admin" && (
        <Menu.Item>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor"
          >
            <MdOutlineRoomPreferences size={18} />
            Dashboard
          </Link>
        </Menu.Item>
      )}
      <button
        onClick={openDeposit}
        className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor"
      >
        {" "}
        <RiLuggageDepositFill size={18} />
        Deposit
      </button>
      <button
        onClick={openWithdraw}
        className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor"
      >
        {" "}
        <BsBoxArrowInDown size={18} />
        Withdrawal
      </button>
      <button className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor">
        {" "}
        <GoProjectSymlink size={18} />
        My Promotion
      </button>
      <button className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor">
        {" "}
        <MdOutlinePersonalInjury size={18} />
        Personal Info
      </button>
      <button className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor">
        {" "}
        <MdLockReset size={18} />
        Reset Password
      </button>
      <button className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor">
        {" "}
        <MdOutlineForwardToInbox size={18} />
        Inbox
      </button>
      <button className="flex items-center gap-2 py-1.5 px-3 w-full text-base text-white loginButtonBgColor">
        {" "}
        <MdOutlineRoomPreferences size={18} />
        Refer Bonus
      </button>

      <Menu.Item>
        {({ active }) => (
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 rounded-b-lg py-1.5 px-3 w-full text-base text-white loginButtonBgColor ${
              active ? "bg-gray-700 text-white" : "text-gray-300"
            }`}
          >
            <BsBoxArrowInRight size={18} />
            Logout
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

export default UserMenu;
