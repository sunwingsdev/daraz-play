import { Link } from "react-router-dom";
import BrandAmbassador from "../brandAmbassador/BrandAmbassador";
import Social from "../social/Social";

const Footer = () => {
  // ব্র্যান্ড অ্যাম্বাসেডর
  const signatures = [
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/dark/footer/ambassadors-quinton-de-kock.png?v=1727771384153&source=mcdsrc",
      heading: "কুইন্টন ডি কক",
      text: "দক্ষিণ আফ্রিকান ক্রিকেটার",
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/dark/footer/ambassadors-monami-ghosh.png?v=1727771384153&source=mcdsrc",
      heading: "মনামী ঘোষ",
      text: "ফিল্ম ও টেলিভিশন সুপারস্টার",
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/dark/footer/ambassadors-david-de-gea.png?v=1727771384153&source=mcdsrc",
      heading: "ডেভিড ডি গিয়া",
      text: "স্প্যানিশ পেশাদার ফুটবলার",
    },
    {
      image:
        "https://img.m156b.com/mb/h5/assets/images/dark/footer/ambassadors-sunny-leone.png?v=1727771384153&source=mcdsrc",
      heading: "সানি লিওন",
      text: "অভিনেত্রী",
    },
  ];
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
      <div className="bg-zinc-800 p-4">
        {/* ব্র্যান্ড অ্যাম্বাসেডর */}
        <p className="pb-1 text-sm text-white">ব্র্যান্ড অ্যাম্বাসেডর</p>
        <div className="flex flex-wrap gap-4 bg-[#333333] p-3 rounded-md">
          {signatures.map((signature) => (
            <BrandAmbassador
              key={signature.image}
              signature={signature}
              image={signature.image}
              heading={signature.heading}
              text={signature.text}
            />
          ))}
        </div>
        {/* অফিসিয়াল পার্টনার */}
        <p className="mt-2 pb-1 text-sm text-white">অফিসিয়াল পার্টনার</p>
        <div className="flex gap-4 bg-[#333333] p-3 rounded-md">
          <img
            className="w-14"
            src="https://img.m156b.com/mb/h5/assets/images/footer/white/official-partner-heyvip.png?v=1727771384153&source=mcdsrc"
            alt=""
          />
        </div>
        {/* কমিউনিটি ওয়েবসাইট */}
        <p className="mt-2 pb-1 text-sm text-white">কমিউনিটি ওয়েবসাইট</p>
        <div className="flex gap-4 bg-[#333333] p-3 rounded-md">
          {socials.map((social) => (
            <Social key={social.image} social={social} />
          ))}
          <Social />
        </div>
        {/* মুল্য পরিশোধ পদ্ধতি */}
        <p className="mt-2 pb-1 text-sm text-white">মুল্য পরিশোধ পদ্ধতি</p>
        <div className="flex gap-4 bg-[#333333] p-3 rounded-md">
          {accounts.map((account) => (
            <BrandAmbassador
              key={account.image}
              image={account.image}
              item={account}
            />
          ))}
        </div>
        {/* আমাদের সম্পর্কে */}
        <p className="mt-2 pb-1 text-sm text-white">আমাদের সম্পর্কে</p>
        <div className="flex flex-wrap gap-4 bg-[#333333] p-3 rounded-md">
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              আমাদের সম্পর্কে
            </p>
          </Link>
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              গোপনীয়তা নীতি
            </p>
          </Link>
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              শর্তাবলী
            </p>
          </Link>
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              নিয়ম এবং প্রবিধান
            </p>
          </Link>
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              দায়িত্বশীল গেম্বলিং
            </p>
          </Link>
          <Link to={""}>
            <p className="text-yellow-400 text-xs md:text-sm underline">
              সচরাচর জিজ্ঞাসা বাদ
            </p>
          </Link>
        </div>
        <p className="pt-3 text-center text-sm text-white">
          © 2024 Betjili কপিরাইট। সমস্ত অধিকার সংরক্ষিত
        </p>
      </div>
    </div>
  );
};

export default Footer;
