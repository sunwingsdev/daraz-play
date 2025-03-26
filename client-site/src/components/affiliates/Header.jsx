import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/Affiliates/footer_logo.png";
import blogo from "../../assets/Affiliates/BD.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-backgroundImageRed text-white shadow-md py-6 px-4 lg:px-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center lg:px-28">
        {/* Menu Button */}
        <button
          className="lg:hidden  rounded-md  "
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="yellow"
            className="w-8 h-auto"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <ul className="bg-green-800 font-bold w-56 h-full absolute top-16 left-0 z-50 p-4  shadow-lg space-y-2">
              <li>
                <Link
                  to="/affiliate/login"
                  className="block w-full text-center bg-customGreenSecondary  hover:text-black text-white py-2 px-4 rounded"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate/terms"
                  className="block w-full text-center bg-customGreenSecondary hover:text-black text-white py-2 px-4 rounded"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate/login"
                  className="block w-full text-center bg-customGreen hover:bg-customYellow hover:text-black text-white py-2 px-4 rounded"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate/signup"
                  className="block w-full text-center bg-customYellow hover:bg-customYellow text-black  py-2 px-4 rounded"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Logo */}
        <div className="w-24 px-2 md:px-0 lg:px-0 lg:w-36">
          <img src={logo} alt="Logo" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/affiliate/login"
            className="bg-customGreen hover:bg-customYellow hover:text-black text-white py-2 px-4 rounded hidden lg:inline-block"
          >
            Login
          </Link>
          <Link
            to="/affiliate/signup"
            className="bg-customYellow hover:bg-customYellow text-black py-2 px-4 rounded hidden lg:inline-block"
          >
            Sign Up
          </Link>

          {/* Language Selection */}
          <div
            role="button"
            className="w-20  h-8 lg:h-10 flex bg-customYellow hover:bg-customYellow font-medium text-black rounded-sm items-center"
            onClick={() => setModalOpen(true)}
          >
            <img
              src={blogo}
              alt="Bangladesh Flag"
              className="w-6 h-6 rounded-full ml-2"
            />
            <span>EN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 16.5a.75.75 0 01-.53-.22l-5.25-5.25a.75.75 0 111.06-1.06L12 14.69l4.72-4.72a.75.75 0 111.06 1.06l-5.25 5.25a.75.75 0 01-.53.22z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0    bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white rounded-lg w-96  shadow-lg"
          >
            <div className="bg-green-600 rounded-t-lg px-2 py-6 flex justify-between items-center">
              <h3 className="text-lg text-black text-center font-semibold">
                Currency and Language
              </h3>
              <button
                className="text-white hover:text-gray-300"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-10 h-auto "
                >
                  <path
                    fillRule="evenodd"
                    d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.526l4.714-4.715a.75.75 0 0 1 1.06 1.061L13.06 10.586l4.715 4.714a.75.75 0 0 1-1.06 1.061L12 11.647l-4.715 4.714a.75.75 0 0 1-1.06-1.061l4.714-4.714-4.714-4.714a.75.75 0 0 1 0-1.061Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <img
                  src={blogo}
                  alt="Bangladesh Flag"
                  className="w-10 rounded-full"
                />
              </div>
              <button className="border hover:border-customYellow text-black py-2 px-4 shadow-customShadow rounded ">
                Bengali
              </button>
              <button className="border hover:border-customYellow py-2 px-4 text-black shadow-customShadow rounded ">
                English
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
