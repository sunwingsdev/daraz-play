import logo1 from '../../assets/free-Accounts.png';
import logo2 from '../../assets/Fast-Payments.png';
import logo3 from '../../assets/Live-Matrics.png';
import logo4 from '../../assets/Promo-Materials.png';
import logo5 from '../../assets/Extra-Bonuses.png';
import logo6 from '../../assets/Personal-Manager.png';
import logo7 from '../../assets/Fast-Approvals.png';
import logo8 from '../../assets/Fair-Open.png';

const features = [
  { img: logo1, title: 'Free Account', desc: 'Easily create your free darazplay agent account independently and effortlessly.' },
  { img: logo2, title: 'Fast Payments', desc: 'We guarantee timely payments and smooth, delay-free money transfers.' },
  { img: logo3, title: 'Live Matrics', desc: 'Real-time campaign results with statistics updating every minute.' },
  { img: logo4, title: 'Promo Materials', desc: 'Access unique promo materials and successful case studies from us.' },
  { img: logo5, title: 'Extra Bonuses', desc: 'Earn extra rewards and incentives based on your performance.' },
  { img: logo6, title: 'Personal Manager', desc: 'Our support team is here 24/7—feel free to ask anything.' },
  { img: logo7, title: 'Fast Approvals', desc: 'Our team will contact you within 24 hours of submission.' },
  { img: logo8, title: 'Fair & Open', desc: 'User-friendly software with clear tracking of daily downtime.' },
];

const Introduction = () => {
  return (
    <div className=" bg-backgroundImageRed w-full">
      <div className=" text-center">
        <div className="max-w-full">
          <h2 className="text-4xl text-customYellowHeading mb-10">WHY DARAZPLAY AFFILIATE</h2>
          <div className="grid grid-cols-2 relative md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 justify-items-center py-3  lg:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-black text-xl shadow-lg w-36 md:w-40 lg:w-56 h-auto rounded-[20px] p-4"
              >
                <h3 className="text-sm lg:text-lg absolute left-0 top-2 font-semibold text-black bg-custom-gradient  rounded-r-[20px] p-2 shadow-xl text-left">
                  {feature.title}
                </h3>
                <div className='pt-10 lg:pt-8'>
                <img className="max-w-full lg:mx-auto p-4" src={feature.img} alt={feature.title} />
                <p className="text-left font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
