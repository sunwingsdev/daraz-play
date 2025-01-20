import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAgentByIdQuery } from "../../redux/features/allApis/usersApi/usersApi";
import noImage from "../../assets/noImageAvailable.png";
import frontImage from "../../assets/nidFront.jpg";
import backImage from "../../assets/nidBack.jpeg";
import { useGetKycByIdQuery } from "../../redux/features/allApis/kycApi/kycApi";

const AgentProfile = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState("userInfo");
  const { data: singleAgent } = useGetAgentByIdQuery(id);
  const { data: singleKyc } = useGetKycByIdQuery(id);

  const balances = [
    { label: "Main Balance", value: "500 BDT" },
    { label: "Deposit Balance", value: "800 BDT" },
    { label: "Withdraw Balance", value: "1000 BDT" },
    { label: "Support Pin", value: "123456" },
  ];

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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                    defaultValue={singleAgent?.fullName}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                    defaultValue={singleAgent?.email}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                    defaultValue={singleAgent?.username}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                  />
                  <div className="flex items-center border border-gray-300 rounded-md p-2">
                    <div className="flex items-center ps-1 pe-7">
                      <img
                        src="https://flagcdn.com/w40/bd.png"
                        alt="Bangladesh Flag"
                        className="w-6 h-4"
                      />
                      <span className="ml-2">+880</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full outline-none"
                      defaultValue={singleAgent?.phone}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6b7699f1] text-white py-3 rounded-md hover:bg-green-600 transition-all"
              >
                Update Info
              </button>
            </form>
          )}

          {selectedSection === "transactionHistory" && (
            <div className="text-center text-gray-600">
              No transactions available.
            </div>
          )}

          {selectedSection === "kycUpdate" && (
            <div>
              <div className="flex flex-col items-center justify-center bg-white pt-5">
                <div>
                  <h2 className="text-lg font-semibold text-center mb-4 capitalize">
                    Agent NID for KYC Verification
                  </h2>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Front Side
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                        {frontImage ? (
                          <img
                            src={frontImage}
                            alt="NID Front"
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-gray-500">
                            No image uploaded
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Back Side
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                        {backImage ? (
                          <img
                            src={backImage}
                            alt="NID Back"
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-gray-500">
                            No image uploaded
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      Update KYC Status
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-lg p-2"
                      // value={status}
                      // onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  </div>

                  <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"
                    onClick={() => {
                      if (status) {
                        alert(
                          `Images submitted successfully with status: ${status}`
                        );
                      } else {
                        alert("Please select a status before submitting.");
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
