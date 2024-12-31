import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
// import DynamicTable from "../../components/shared/table/DynamicTable";

const AllUsers = () => {
  // const data = [
  //   {
  //     agent_name: "Agent001",
  //     login: "Login",
  //     t_w_b: 5000,
  //     "w-d-b": 2300,
  //     win: 1200,
  //     los: 800,
  //     balance: 2500,
  //     status: "active",
  //   },
  //   {
  //     agent_name: "Agent002",
  //     login: "Login",
  //     t_w_b: 6000,
  //     "w-d-b": 2300,
  //     win: 1500,
  //     los: 1000,
  //     balance: 3200,
  //     status: "inactive",
  //   },
  //   {
  //     agent_name: "Agent003",
  //     login: "Login",
  //     t_w_b: 4500,
  //     "w-d-b": 2300,
  //     win: 1000,
  //     los: 700,
  //     balance: 2100,
  //     status: "active",
  //   },
  //   {
  //     agent_name: "Agent004",
  //     login: "Login",
  //     t_w_b: 7000,
  //     "w-d-b": 2300,
  //     win: 1700,
  //     los: 1300,
  //     balance: 4000,
  //     status: "active",
  //   },
  //   {
  //     agent_name: "Agent005",
  //     login: "Login",
  //     t_w_b: 5500,
  //     "w-d-b": 2300,
  //     win: 1400,
  //     los: 1100,
  //     balance: 2800,
  //     status: "inactive",
  //   },
  //   {
  //     agent_name: "Agent006",
  //     login: "Login",
  //     t_w_b: 4800,
  //     "w-d-b": 2300,
  //     win: 1100,
  //     los: 800,
  //     balance: 2400,
  //     status: "active",
  //   },
  //   {
  //     agent_name: "Agent007",
  //     login: "Login",
  //     t_w_b: 5200,
  //     "w-d-b": 2300,
  //     win: 1300,
  //     los: 900,
  //     balance: 2600,
  //     status: "active",
  //   },
  //   {
  //     agent_name: "Agent008",
  //     login: "Login",
  //     t_w_b: 4900,
  //     "w-d-b": 2300,
  //     win: 1200,
  //     los: 850,
  //     balance: 2500,
  //     status: "inactive",
  //   },
  //   {
  //     agent_name: "Agent009",
  //     login: "Login",
  //     t_w_b: 6200,
  //     "w-d-b": 2300,
  //     win: 1600,
  //     los: 1100,
  //     balance: 3500,
  //     status: "ACTIVE",
  //   },
  //   {
  //     agent_name: "Agent010",
  //     login: "Login",
  //     t_w_b: 5300,
  //     "w-d-b": 2300,
  //     win: 14,
  //     los: 95,
  //     balance: 2800,
  //     status: "inactive",
  //   },
  // ];

  // const columns = [
  //   { headerName: "Agent name", field: "agent_name" },
  //   {
  //     headerName: "Login",
  //     customRender: (row) => (
  //       <span className="px-4 py-1 rounded text-white bg-green-500">
  //         {row.login}
  //       </span>
  //     ),
  //   },

  //   { headerName: "T-W-B", field: "t_w_b" },
  //   { headerName: "W-D-B", field: "w-d-b" },
  //   { headerName: "Win", field: "win" },
  //   { headerName: "Loss", field: "los" },
  //   { headerName: "Balance", field: "balance" },
  //   // { headerName: "status", field: "status" },
  //   {
  //     headerName: "Status",
  //     customRender: (row) => (
  //       <span
  //         className={`px-2 py-1 rounded text-white ${
  //           row.status.toLowerCase() === "active"
  //             ? "bg-green-500 "
  //             : "bg-red-500"
  //         }`}
  //       >
  //         {row.status.toUpperCase()}
  //       </span>
  //     ),
  //   },
  // ];

  const [usersData, setUsersData] = useState([
    {
      username: "john_doe",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      referCode: "ABC123",
      joinedAt: "2023-12-30",
      lastLogin: "2024-12-30",
      balance: "$120.00",
    },
    {
      username: "jane_smith",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      referCode: "XYZ789",
      joinedAt: "2024-01-15",
      lastLogin: "2024-12-25",
      balance: "$200.50",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered users based on search query
  const filteredUsers = usersData.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a new user (dummy function)
  const handleAddUser = () => {
    const newUser = {
      username: "new_user",
      name: "New User",
      phone: "000-000-0000",
      email: "newuser@example.com",
      referCode: "NEW456",
      joinedAt: new Date().toISOString().split("T")[0],
      lastLogin: new Date().toISOString().split("T")[0],
      balance: "$0.00",
    };
    setUsersData([newUser, ...usersData]);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">All Users</h1>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 block md:hidden"
            onClick={handleAddUser}
          >
            Add User
          </button>
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="md:w-3/4 hidden md:flex flex-row items-center">
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
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 hidden md:block"
            onClick={handleAddUser}
          >
            Add User
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
            {filteredUsers.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                } text-black`}
              >
                <td className="px-4 py-2 whitespace-nowrap text-blue-500 hover:text-blue-600">
                  <Link to="/dashboard/user-profile">{user.username}</Link>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.phone}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {user.referCode}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{user.joinedAt}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {user.lastLogin}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{user.balance}</td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
