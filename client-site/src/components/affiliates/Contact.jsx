import { Link } from "react-router-dom";
import flogo from "../../assets/Affiliates/fb-1.png";
import tlogo from "../../assets/Affiliates/Telegram.png";
import dlogo from "../../assets/Affiliates/footer_logo.png";

const Contact = () => {
  return (
    <div>
      <div className="h-auto pt-6   bg-backgroundImageRed w-auto">
        <div
          data-aos="zoom-in-up"
          className="flex-none md:flex-row  lg:flex  justify-center mb-12"
        >
          <div className="grid lg:grid-cols-3  gap-y-2  justify-items-center   ">
            {/* First Section */}
            <div className="w-64 md:w-10/12 lg:w-80 h-24 rounded-3xl bg-black skew-x-[-30deg] order-2 lg:order-none">
              <h3 className="font-semibold text-[18px] text-4xl sans-serif poppins flex items-center justify-center">
                <span className="transform skew-x-[30deg]">CONTACT US:</span>
              </h3>
              <ul className="flex items-center justify-center pl-8 gap-2">
                <li>
                  <img
                    className="transform skew-x-[30deg]"
                    src={tlogo}
                    alt="Telegram"
                  />
                </li>
                <li>
                  <img
                    className="transform skew-x-[30deg]"
                    src={flogo}
                    alt="Facebook"
                  />
                </li>
              </ul>
            </div>

            <div className="w-36 text-center pt-[15px] pb-5 lg:pb-0  order-1 lg:order-none">
              <img src={dlogo} alt="Logo" />
            </div>

            {/* Second Section */}
            <div className="w-64 md:w-10/12 lg:w-80 h-24 rounded-3xl bg-black skew-x-[-30deg] order-3 lg:order-none">
              <h3 className="font-semibold text-[18px] text-4xl sans-serif poppins flex items-center justify-center">
                <span className="transform skew-x-[30deg]">FOLLOW US:</span>
              </h3>
              <ul className="flex items-center justify-center pl-8 gap-2">
                <li>
                  <img
                    className="transform skew-x-[30deg]"
                    src={tlogo}
                    alt="Telegram"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex-row  md:flex-row lg:flex justify-center font-medium text-sm w-full space-y-4 lg:space-y-0 pl-6 lg:pl-10 gap-36">
          <div className="flex lg:flex-none gap-5 md:gap-60 lg:gap-20">
            <div>
              <Link to="/affiliate/terns">
                <h3 className=" hover:text-customYellow">Terms & Conditions</h3>
              </Link>
            </div>

            <div>
              <div>
                <Link to="/affiliate/privacy">
                  <h3 className=" hover:text-customYellow">Privacy Policy</h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-none gap-2 md:gap-60 lg:gap-20    ">
            <div>
              <Link to="/affiliate/disconnection">
                <h3 className=" hover:text-customYellow ">
                  Disconnection Policy
                </h3>
              </Link>
            </div>

            <div>
              <Link to="/affiliate/faqs">
                <h3 className=" hover:text-customYellow ml-1 md:-ml-2.5 lg:ml-0">
                  FAQs
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center text-customYellow  py-4">
        <p>Copyright 2024 darazplay. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
