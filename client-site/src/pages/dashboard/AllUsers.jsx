import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/features/allApis/usersApi/usersApi";
import moment from "moment";

const AllUsers = () => {
  const { data: usersData, isLoading, error } = useGetUsersQuery();

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered users based on search query
  const filteredUsers = usersData?.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">All Users</h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 block md:hidden">
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
          <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 hidden md:block">
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
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">
            Data is loading...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            Failed to load data.
          </div>
        ) : (
          <table className="w-full border-collapse border border-[#3b3b3b] text-center">
            <thead>
              <tr className="bg-[#3b3b3b] text-white">
                <th className="px-4 py-2 whitespace-nowrap">Username</th>
                <th className="px-4 py-2 whitespace-nowrap">Phone</th>
                <th className="px-4 py-2 whitespace-nowrap">Email</th>
                <th className="px-4 py-2 whitespace-nowrap">Joined At</th>
                <th className="px-4 py-2 whitespace-nowrap">Last Login</th>
                <th className="px-4 py-2 whitespace-nowrap">Balance</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                  } text-black`}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-blue-500 hover:text-blue-600">
                    <Link to="/dashboard/user-profile">{user.username}</Link>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{user.phone}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {user.email || "N/A"}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {moment(user.createdAt).format("MMMM Do YYYY, h:mm")}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {user.lastLoginAt
                      ? moment(user.lastLoginAt).format("MMMM Do YYYY, h:mm:ss")
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {user.balance || 0}
                  </td>
                </tr>
              ))}
              {filteredUsers?.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
