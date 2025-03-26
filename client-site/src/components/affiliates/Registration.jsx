import bgImage from '../../assets/background-registration.png';

const Registration = () => {
  return (
    <div className="bg-customGreenSecondary ">
      <div
        className="h-auto lg:h-[400px] pb-4 lg:pb-0 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-neutral-content lg:max-w-6xl mx-auto text-center h">
  <h1 className="mb-5 text-4xl text-customGreenText font-bold">
    Registration Steps
  </h1>
  <div className="grid lg:grid-cols-3 md:grid-cols-3 justify-items-center gap-6">
    {[
      {
        title: "Registration Form",
        text: `To become a ${import.meta.env.VITE_SITE_NAME} partner, 
        applicants must complete the registration form. Click Register 
        and fill it out accurately.`,
      },
      {
        title: "Verification",
        text: "After submitting the darazplay partner form, expect review and email confirmation within 24 hours.",
      },
      {
        title: "Payment",
        text: "Earnings are transferred weekly to the partner's darazplay account provided during registration.",
      },
    ].map((step, index) => (
      <div
        key={index}
        className="w-52 h-48 bg-black  shadow-customBoxGreenShadow border border-customYellow rounded-[20px] flex flex-col justify-center items-center p-4"
      >
        <h3 className="text-lg text-customGreenText font-bold">{step.title}</h3>
        <p className="text-md font-medium text-white text-center mt-2">
          {step.text}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Registration;
