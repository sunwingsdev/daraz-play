import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAgentByIdQuery } from "../../redux/features/allApis/usersApi/usersApi";
import noImage from "../../assets/noImageAvailable.png";
import CashAgentProfileUserInfo from "../../components/cash-agent/cash-agent-profile/CashAgentProfileUserInfo";
import CashAgentKycUpdate from "../../components/cash-agent/cash-agent-profile/CashAgentKycUpdate";

const CashAgentProfile = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState("userInfo");

  const { data: singleAgent } = useGetAgentByIdQuery(id);

  const balances = [
    { label: "Main Balance", value: "500 BDT" },
    { label: "Deposit Balance", value: "800 BDT" },
    { label: "Withdraw Balance", value: "1000 BDT" },
    { label: "Support Pin", value: "123456" },
  ];

  if (!singleAgent) {
    return <p>Loading agent data...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <h1 className="text-center bg-gradient-to-r from-gray-300 to-gray-500 text-lg lg:text-xl font-bold text-white p-4 rounded-md shadow-md mb-6">
        Agent Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-2 text-nowrap text-center">
          <div className="mb-6">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Agent Name:{" "}
              <span className="capitalize">{singleAgent?.fullName}</span>
            </h1>
            <p className="text-gray-500">User Name: {singleAgent?.username}</p>
          </div>

          <div className="flex flex-col items-center mb-6">
            <img
              className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-gray-500"
              src={noImage}
              alt="User Avatar"
            />
            <button className="bg-[#6b7699f1] text-white rounded-md px-4 py-2 hover:bg-gray-300">
              Upload New Photo
            </button>
          </div>

          {/* Balance Section */}
          <div className="space-y-4">
            {balances.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
              >
                <p className="text-gray-600 font-semibold">{item.label}</p>
                <p className="text-green-600 font-bold ml-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-2/3 rounded-lg shadow-lg p-6">
          <h2 className="text-center text-xl text-gray-800 font-semibold mb-6">
            Edit Agent Profile
          </h2>

          <div className="flex sm:flex-row flex-col justify-center gap-2 mb-6 text-nowrap">
            <button
              onClick={() => setSelectedSection("userInfo")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "userInfo"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              User Info
            </button>
            <button
              onClick={() => setSelectedSection("transactionHistory")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "transactionHistory"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setSelectedSection("kycUpdate")}
              className={`p-2 rounded-md transition-all ${
                selectedSection === "kycUpdate"
                  ? "bg-[#6b7699f1] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              KYC Update
            </button>
          </div>

          {selectedSection === "userInfo" && (
            <CashAgentProfileUserInfo id={id} />
          )}

          {selectedSection === "transactionHistory" && (
            <div className="text-center text-gray-600">
              No transactions available.
            </div>
          )}

          {selectedSection === "kycUpdate" && <CashAgentKycUpdate id={id} />}
        </div>
      </div>
    </div>
  );
};

export default CashAgentProfile;
