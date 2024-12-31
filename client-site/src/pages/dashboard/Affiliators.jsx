import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Affiliators = () => {
  const [affiliatorsData, setAffiliatorsData] = useState([
    {
      username: "affiliator_01",
      name: "Alice Doe",
      phone: "321-654-9870",
      email: "alice@example.com",
      referCode: "REF123",
      joinedAt: "2023-11-10",
      lastLogin: "2024-12-29",
      balance: "$300.00",
    },
    {
      username: "affiliator_02",
      name: "Bob Smith",
      phone: "654-987-3210",
      email: "bob@example.com",
      referCode: "REF456",
      joinedAt: "2023-12-01",
      lastLogin: "2024-12-30",
      balance: "$150.75",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredAffiliators = affiliatorsData.filter((affiliator) =>
    affiliator.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAffiliator = () => {
    const newAffiliator = {
      username: "new_affiliator",
      name: "New Affiliator",
      phone: "000-000-0000",
      email: "newaffiliator@example.com",
      referCode: "NEWREF",
      joinedAt: new Date().toISOString().split("T")[0],
      lastLogin: new Date().toISOString().split("T")[0],
      balance: "$0.00",
    };
    setAffiliatorsData([newAffiliator, ...affiliatorsData]);
  };
  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Affiliators</h1>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-2/5 block md:hidden whitespace-nowrap"
            onClick={handleAddAffiliator}
          >
            Add Affiliator
          </button>
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="md:w-3/5 hidden md:flex flex-row items-center">
            <input
              type="text"
              placeholder="Type Username or Phone Number or Email..."
              className="py-2 px-1 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-2/5 hidden md:block whitespace-nowrap"
            onClick={handleAddAffiliator}
          >
            Add Affiliator
          </button>
        </div>
        <form className="w-full flex flex-row items-center md:hidden">
          <input
            type="text"
            placeholder="Type Username or Phone Number or Email..."
            className="py-2 px-1 w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#3b3b3b] text-center">
          <thead>
            <tr className="bg-[#3b3b3b] text-white">
              <th className="px-4 py-2 whitespace-nowrap">Username</th>
              <th className="px-4 py-2 whitespace-nowrap">Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Phone</th>
              <th className="px-4 py-2 whitespace-nowrap">Email</th>
              <th className="px-4 py-2 whitespace-nowrap">Refer Code</th>
              <th className="px-4 py-2 whitespace-nowrap">Joined At</th>
              <th className="px-4 py-2 whitespace-nowrap">Last Login</th>
              <th className="px-4 py-2 whitespace-nowrap">Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredAffiliators.map((affiliator, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                } text-black`}
              >
                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  {affiliator.username}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.phone}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.email}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.referCode}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.joinedAt}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.lastLogin}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {affiliator.balance}
                </td>
              </tr>
            ))}
            {filteredAffiliators.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No affiliators found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Affiliators;
