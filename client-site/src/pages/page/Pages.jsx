import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/pages/PageHeader";
import { useGetHomeControlsQuery } from "../../redux/features/allApis/homeControlApi/homeControlApi";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { useGetPagesDetailQuery } from "../../redux/features/allApis/pagesApi/pagesApi";

const Pages = () => {
  const { route } = useParams();
  const { data: homeControls } = useGetHomeControlsQuery();
  const { data: pagesDetails } = useGetPagesDetailQuery();
  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const selectedPage = pagesDetails?.find((page) => page.route === route);

  console.log(selectedPage);

  return (
    <div className="h-screen bg-green-800">
      {/* <div className="">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
          alt=""
        />
      </div> */}
      <PageHeader />
      <div className="bg-[#053018] py-4">
        <div className="container mx-auto lg:px-28">
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: selectedPage?.details }}
          ></div>
        </div>
      </div>
      <div className="bg-green-800 py-16">
        <div className="flex items-center justify-between gap-4 md:gap-8 container mx-auto lg:px-28 text-white">
          <div className="w-full md:w-1/5">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
              alt=""
            />
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-3 font-semibold gap-2">
            <Link className="w-fit">About Us</Link>
            <Link className="w-fit">Contact Us</Link>
            <Link className="w-fit">Terms and Conditions</Link>
            <Link className="w-fit">Rules and Regulations</Link>
            <Link className="w-fit">Responsible Gaming</Link>
            <Link className="w-fit">Privacy Policy</Link>
          </div>
          <div className="w-full md:w-1/5">
            <p className="mb-2">Community websites</p>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl bg-blue-600 rounded-full" />
              <FaTelegram className="text-3xl bg-blue-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-customYellow py-4">
        <p>Copyright 2024 darazplay. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Pages;
