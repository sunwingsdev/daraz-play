import LogoSelection from "../../components/dashboard/LogoSelection";
import LogoUpload from "../../components/dashboard/LogoUpload";
import SliderSelectionSection from "../../components/dashboard/SliderSelectionSection";
import SliderUploadSection from "../../components/dashboard/SliderUploadSection";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUpload />
      <LogoSelection />
      <SliderUploadSection />
      <SliderSelectionSection />
    </div>
  );
};

export default HomeControl;
