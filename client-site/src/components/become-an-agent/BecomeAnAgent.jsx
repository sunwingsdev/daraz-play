import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SingleBecomeAnAgent from "./SingleBecomeAnAgent";
import "aos/dist/aos.css";
import Aos from "aos";

const BecomeAnAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [phone, setPhone] = useState(""); // ✅ Proper state declaration

  const languages = [
    { code: "en", name: "en", flag: "" },
    { code: "es", name: "es", flag: "" },
  ];

  const handleLanguageChange = (code) => {
    setLanguage(code);
  };

  // ✅ Corrected phone number input handler
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits allowed
    setPhone(value);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="bg-[#212121]">
      <div className="becomeAnAgent">
        {/* Start Top menu */}
        <div className="relative w-full">
          <div className="bg-[#212121] flex justify-between items-center p-4 shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo Section with Image */}
            <img src={""} alt="Logo" className="h-10" />
            <div className="text-white space-x-10 text-lg font-bold hidden lg:block">
              <a href="#about" className="hover:text-gray-300 duration-300">
                About Us
              </a>
              <a
                href="#collaboration"
                className="hover:text-gray-300 duration-300"
              >
                Collaboration
              </a>
              <a href="#contacts" className="hover:text-gray-300 duration-300">
                Contacts
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="flex text-white text-base lg:text-lg font-semibold lg:font-bold items-center space-x-2 lg:space-x-3">
              <button className="bg-[#333] hover:bg-red-600 text-white px-4 py-1.5 rounded duration-300">
                Login
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded duration-300 hidden lg:block">
                Become an Agent
              </button>

              {/* Language Selector with Flags */}
              <div className="relative">
                <button className="p-2 bg-black rounded flex items-center">
                  <img
                    src={languages.find((lang) => lang.code === language).flag}
                    alt="Flag"
                    className="inline-block w-5 h-5 mr-2"
                  />
                  {languages.find((lang) => lang.code === language).name}
                </button>
                <div className="absolute bg-white text-black rounded mt-2 shadow-lg">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="p-2 flex items-center cursor-pointer hover:bg-gray-200"
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-5 h-5 mr-2"
                      />
                      {lang.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden text-white flex items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute right-0 w-full h-screen text-lg font-bold bg-[#212121] text-white flex flex-col items-center justify-center space-y-4 py-4 shadow-lg lg:hidden">
              <a href="#about" className="hover:text-gray-300 duration-300">
                About Us
              </a>
              <a
                href="#collaboration"
                className="hover:text-gray-300 duration-300"
              >
                Collaboration
              </a>
              <a href="#contacts" className="hover:text-gray-300 duration-300">
                Contacts
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded duration-300">
                Become an Agent
              </button>
            </div>
          )}
        </div>
        {/* End Top menu */}

        <SingleBecomeAnAgent
          heading={"Make money with MelBet TeamCash!"}
          text={[
            "Partnering up with an international bookmaker is incredibly rewarding. Accept funds, top up accounts, make withdrawals for customers or create your very own agent network and earn commission!",
          ]}
          btn={"Become an agent"}
          image={"https://melbetagents.com/wp-content/uploads/2023/06/img.png"}
        />

        <div
          data-aos="fade-up"
          className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 pt-10 px-4"
        >
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-24 lg:w-28 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/crown-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Reliable bookmaker since 2012
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-16 lg:w-20 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/erth-icon.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              50+ countries
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-24 lg:w-28 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/400K-6-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              400 000+ players worldwide
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-20 lg:w-24 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/cup-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Best terms
            </h2>
          </div>
          <div className="max-w-[200px] m-auto uppercase space-y-4">
            <img
              className="w-16 lg:w-20 m-auto"
              src="https://melbetagents.com/wp-content/uploads/2023/06/chest-1.png"
              alt=""
            />
            <h2 className="text-base lg:text-lg text-center font-semibold text-white italic">
              Stable payouts
            </h2>
          </div>
        </div>

        <SingleBecomeAnAgent
          reverse={true}
          heading={"What is a Melbet agent?"}
          text={[
            "A Melbet agent is someone who works online/offline and earns commission for bringing in new customers and helping them make deposits/withdrawals from their account.",
            "With Melbet continuing to expand globally each year, why not join our international team? If you’d like to earn more, you could even set up your own agent network.",
            "The more agents in your network, the larger your income! You can start earning with Melbet today. Submit an application on our website and we’ll soon be in touch!",
          ]}
          btn={"Start earning"}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/06/img-3.png"
          }
        />

        <SingleBecomeAnAgent
          heading={"Mobile EPOS"}
          text={[
            "For smooth operation and workflow, we have developed a convenient Android app available in several languages. Thanks to the app’s simple interface, you’ll be able to create your very own agent network and boost your income.",
          ]}
          listText={"You can use our app to:"}
          list={[
            "Accept deposits and top up customers’ accounts",
            "Credit winnings online or in cash",
            "Set up your own agent network in your region",
            "Expand your business to another country and bring in new customers",
          ]}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/05/Group-18-e1732707404688.png"
          }
        />

        <SingleBecomeAnAgent
          reverse={true}
          heading={"How can I become a Melbet agent?"}
          text4={[
            "Obtain agent status",
            "Log in and make your first deposit",
            "Download and install the app",
            "Start chatting with players",
            "Help players make quick deposits",
            "Earn commission",
          ]}
          additionalText={[
            "Once you've completed verification, the bookmaker will grant you agent status.",
            "Once you've logged in, you'll need to verify your identity on the MelBet website. You'll then get access to your own agent balance, which you'll use to top up customers' accounts.",
            "Your manager will send you a link which you can use to download the mobile app. Please make sure that your phone's operating system is no older than the Android 4.4 version before installing the app.",
            "Make sure that they have a MelBet account.",
            "You'll be able to top up customers' accounts quickly and easily. Use the deposits in your account to transfer funds from your agent account to customers' accounts.",
            "Earn between 3-5% comission on deposits and 2% on withdrawals. Your total earnings will depend on the specifics of your region and other parameters. You'll gain access to additional information once you fill in all of your details.",
          ]}
          image={
            "https://melbetagents.com/wp-content/uploads/2023/06/img-3-1.png"
          }
        />

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 pt-20 pb-14 px-4">
          <div className="max-w-[600px]">
            <h2 className="w-full lg:max-w-[100px] text-2xl lg:text-4xl uppercase font-bold text-red-600 italic">
              Contact information
            </h2>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="">
                <Link>
                  <div className="flex gap-2 items-center text-base lg:text-xl font-bold uppercase italic underline text-white mt-4 lg:mt-8">
                    <FaEarthAmericas className="text-red-700" size={28} />
                    <p>melbet99.com</p>
                  </div>
                </Link>
                <Link>
                  <div className="flex gap-2 items-center text-base lg:text-xl font-bold uppercase italic underline text-white mt-3">
                    <MdEmail className="text-red-700" size={28} />
                    <p>support@melbet99agents.com</p>
                  </div>
                </Link>
              </div>
              <img
                data-aos="zoom-in"
                className="w-64 sm:w-80 lg:w-64"
                src="https://melbetagents.com/wp-content/uploads/2023/05/Group-8.png"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <h2 className="mb-2 lg:mb-4 text-2xl lg:text-4xl text-center uppercase font-bold text-red-600 italic">
              Submit an application
            </h2>
            <form action="" className="space-y-1 lg:space-y-2">
              <div className="space-y-1">
                <label className="text-white text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
                />
              </div>
              <div className="space-y-1">
                <label className="text-white text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
                />
              </div>
              <div className="space-y-1 relative w-full pb-1.5 lg:pb-2">
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
                  {/* ✅ Fixed state binding */}
                  <input
                    type="text"
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="1XXXXXXXXX"
                    className="flex-1 bg-transparent border-none outline-none py-1.5 px-4 text-white"
                    maxLength="10"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnAgent;
