import LogoSelection from "../../components/dashboard/LogoSelection";
import LogoUpload from "../../components/dashboard/LogoUpload";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUpload />
      <LogoSelection />
      {/* <SliderUploadSection /> */}
      {/* <SliderSelectionSection />  */}
    </div>
  );
};

export default HomeControl;
