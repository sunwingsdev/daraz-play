import { Link } from "react-router-dom";
import BrandAmbassador from "../brandAmbassador/BrandAmbassador";
import Social from "../social/Social";

const Footer = () => {
  // social
  const socials = [
    {
      urlLink: "https://www.facebook.com/",
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/socialicons/facebook.svg?v=1727771384153&source=mcdsrc",
    },
    {
      urlLink: "https://www.instagram.com/",
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/socialicons/instagram.svg?v=1727771384153&source=mcdsrc",
    },
    {
      urlLink: "https://twitter.com/",
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/socialicons/twitter.svg?v=1727771384153&source=mcdsrc",
    },
    {
      urlLink: "https://web.telegram.org/",
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/socialicons/telegram-channel.svg?v=1727771384153&source=mcdsrc",
    },
    {
      urlLink: "/",
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/socialicons/pinterest.svg?v=1727771384153&source=mcdsrc",
    },
  ];
  const accounts = [
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/white/pay16.png?v=1727771384153&source=mcdsrc",
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/white/pay22.png?v=1727771384153&source=mcdsrc",
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/white/pay33.png?v=1727771384153&source=mcdsrc",
      imageSize: true,
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/footer/white/pay34.png?v=1727771384153&source=mcdsrc",
    },
  ];
  return (
    <div>
      <div className="bg-zinc-800 p-4 pt-8 space-y-3">
        {/* মুল্য পরিশোধ পদ্ধতি */}
        <p className="text-sm text-white">Payment Methods</p>
        <div className="flex gap-6 py-2">
          {accounts.map((account) => (
            <BrandAmbassador
              key={account.image}
              image={account.image}
              item={account}
            />
          ))}
        </div>
        {/* কমিউনিটি ওয়েবসাইট */}
        <p className="text-sm text-white">Community Websites</p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Social key={social.image} social={social} />
          ))}
          <Social />
        </div>
        {/* অফিসিয়াল পার্টনার */}
        <p className="pt-4 text-sm text-white">Official Partner</p>
        <div className="flex gap-4">
          <img
            className="w-28"
            src="https://img.m156b.com/mb/h5/assets/images/footer/white/official-partner-heyvip.png?v=1727771384153&source=mcdsrc"
            alt=""
          />
        </div>
        <div className="pt-4 flex flex-wrap gap-2 text-white ">
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              About Us
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Contact Us
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Privacy Policy
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Terms & Conditions
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Rules & Regulations
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Responsible Gaming
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Frequentiy Asked Questions
            </p>
          </Link>
          <Link to={""}>
            <p className="text-xs md:text-sm border-r border-r-white pr-2">
              Affiliate
            </p>
          </Link>
        </div>
        <div className="pt-4 pb-12 md:pb-0 text-sm text-white flex gap-3 items-center">
          <img
            className="w-24 md:w-32 lg:w-40"
            src="https://img.d4040p.com/dp/h5/assets/images/logo-02.png?v=1735554256445"
            alt=""
          />
          <div className="">
            <h2 className="font-bold">Best Quality Platform</h2>
            <p>© 2025 DarazPlay Copyrights. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
