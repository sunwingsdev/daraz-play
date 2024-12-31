import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const CashAgent = () => {
  const [agentsData, setAgentsData] = useState([
    {
      agent_name: "Agent001",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 2500,
      status: "active",
    },
    {
      agent_name: "Agent002",
      login: "Login",
      W_B: 5300,
      D_B: 2300,
      A_U_C: 14,
      A_D_C: 14,
      balance: 3200,
      status: "inactive",
    },
    // Add more agents as needed
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered agents based on search query
  const filteredAgents = agentsData.filter((agent) =>
    agent.agent_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a new agent (dummy function)
  const handleAddAgent = () => {
    const newAgent = {
      agent_name: "New_Agent",
      login: "Login",
      W_B: 0,
      D_B: 0,
      A_U_C: 0,
      A_D_C: 0,
      balance: 0,
      status: "active",
    };
    setAgentsData([newAgent, ...agentsData]);
  };
  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Cash Agent</h1>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 block md:hidden whitespace-nowrap"
            onClick={handleAddAgent}
          >
            Add Agent
          </button>
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="md:w-3/4 hidden md:flex flex-row items-center">
            <input
              type="text"
              placeholder="Search Agent Name..."
              className="py-2 px-1 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 hidden md:block whitespace-nowrap"
            onClick={handleAddAgent}
          >
            Add Agent
          </button>
        </div>
        <form className="w-full flex flex-row items-center md:hidden">
          <input
            type="text"
            placeholder="Search Agent Name..."
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
        <table className="w-full border-collapse border border-[#3b3b3b]">
          <thead>
            <tr className="bg-[#3b3b3b] text-white">
              <th className="px-4 py-2 whitespace-nowrap">Agent Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Login</th>
              <th className="px-4 py-2 whitespace-nowrap">W-B</th>
              <th className="px-4 py-2 whitespace-nowrap">D-B</th>
              <th className="px-4 py-2 whitespace-nowrap">A-U-C</th>
              <th className="px-4 py-2 whitespace-nowrap">A-D-C</th>
              <th className="px-4 py-2 whitespace-nowrap">Balance</th>
              <th className="px-4 py-2 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.map((agent, index) => (
              <tr
                key={index}
                className={`text-center border-b border-[#3b3b3b] ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                } text-black`}
              >
                <td className="px-4 py-2 text-blue-500 hover:text-blue-600">
                  <Link to="/dashboard/agent-profile">{agent.agent_name}</Link>
                </td>
                <td className="px-4 py-2">{agent.login}</td>
                <td className="px-4 py-2">{agent.W_B}</td>
                <td className="px-4 py-2">{agent.D_B}</td>
                <td className="px-4 py-2">{agent.A_U_C}</td>
                <td className="px-4 py-2">{agent.A_D_C}</td>
                <td className="px-4 py-2">{agent.balance}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-4 py-1 text-white size-20 ${
                      agent.status.toLowerCase() === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {agent.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashAgent;
