import slogo from "../../assets/Affiliates/commision_plan_banner.png";
import dlogo from "../../assets/Affiliates/dollar.png";
import clogo from "../../assets/Affiliates/cost.png";
import blogo from "../../assets/Affiliates/bonus.png";
import flogo from "../../assets/Affiliates/fee.png";
import tlogo from "../../assets/Affiliates/affilate_total.png";
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />;

const Introduction = () => {
  // Table data
  const rows = [
    ["5", "1000", "30%"],
    ["15", "1000", "35%"],
    ["25", "1000", "40%"],
    ["30", "1000", "45%"],
  ];

  return (
    <div className="bg-backgroundImageRed p-10 w-full">
      <div className="text-center">
        <div className="max-w-full">
          {/* Title */}
          <h2 className="text-4xl text-customYellowHeading mb-10">
            COMISSION PLAN
          </h2>

          {/* Card Section */}
          <div className="flex justify-center items-center overflow-x-auto py-4">
            <div className="flex flex-wrap justify-center gap-2  lg:flex-nowrap">
              {[
                { img: slogo, logo: dlogo, text: "Player Win/Loss" },
                { img: slogo, logo: clogo, text: "18% Operation Cost" },
                { img: slogo, logo: blogo, text: "Bonus/Promotions" },
                { img: slogo, logo: flogo, text: "2% Payment Fee" },
                {
                  img: slogo,
                  logo: tlogo,
                  text: "Affiliate Earns Upto 45% of Net Profit",
                },
              ].map((item, index) => (
                <div key={index} className="relative ">
                  {/* Main Image */}
                  <img
                    className="w-56 mx-auto"
                    src={item.img}
                    alt="Commission Plan Banner"
                  />

                  {/* Logo Inside Image */}
                  <img
                    className="absolute top-2 left-1/2 -translate-x-1/2 right-1/2 m-auto w-20 lg:w-auto  h-auto"
                    src={item.logo}
                    alt="Icon"
                  />

                  {/* Text Inside Image */}
                  <div className={`absolute bottom-10 lg:bottom-4 ${index ===4 ? 'lg:bottom-2 bottom-3':''} w-full  flex items-center  px-8 justify-center text-center text-customGreenPrimary font-bold text-xs`}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-10 flex justify-center items-center">
            <table className="border-collapse border border-customGreenPrimary w-full  h-[285px] max-w-4xl  text-center bg-white shadow-lg">
              <thead>
                <tr className="bg-customGreenSecondary h-[60px] ">
                  <th className=" text-customYellowHeading font-semibold  px-4 py-2">
                    Active Players
                  </th>
                  <th className=" text-customYellowHeading font-semibold px-4 py-2">
                    Net Profit
                  </th>
                  <th className=" text-customYellowHeading font-semibold px-4 py-2">
                    Commission %
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => {
                  // Define unique background colors for each row
                  const rowColors = [
                    "bg-green-400",
                    "bg-customGreenPrimary",
                    "bg-green-400",
                    "bg-customGreenSecondary",
                  ];
                  const bgColor = rowColors[rowIndex] || "bg-gray-100"; // Default color if index exceeds

                  return (
                    <tr
                      key={rowIndex}
                      className={`${
                        rowIndex === rows.length - 1
                          ? bgColor // Last row with no hover effect
                          : `${bgColor} hover:bg-green-800` // Other rows with hover effect
                      }`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-2 ${
                            rowIndex === rows.length - 1
                              ? "text-customYellowHeading font-semibold" // Last row text color
                              : "text-black hover:text-white font-semibold" // Other rows text color on hover
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
