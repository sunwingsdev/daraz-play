import { Menu } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserMenu = ({ handleLogout }) => {
  const { user, singleUser } = useSelector((state) => state.auth);

  return (
    <div className="">
      <Menu.Item>
        {({ active }) => (
          <Link
            to="/profile"
            className={`block px-4 py-2 text-sm ${
              active ? "bg-gray-700 text-white" : "text-gray-300"
            }`}
          >
            Profile
          </Link>
        )}
      </Menu.Item>
      {user && singleUser?.role === "admin" && (
        <Menu.Item>
          {({ active }) => (
            <Link
              to="/dashboard"
              className={`block px-4 py-2 text-sm ${
                active ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
            >
              Dashboard
            </Link>
          )}
        </Menu.Item>
      )}
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={handleLogout}
            className={`w-full text-left block px-4 py-2 text-sm ${
              active ? "bg-gray-700 text-white" : "text-gray-300"
            }`}
          >
            Logout
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

export default UserMenu;
