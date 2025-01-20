import { useState } from "react";
// import { useUpdateAgentStatusMutation } from "../../redux/features/allApis/usersApi/usersApi";
import { IoIosSearch } from "react-icons/io";
// import { ClipLoader } from "react-spinners";
import TablePagination from "../../components/dashboard/TablePagination";
// import nidFront from "../../assets/nidFront.jpg";
// import nidBack from "../../assets/nidBack.jpeg";
import { useGetAllKycsQuery } from "../../redux/features/allApis/kycApi/kycApi";
import { Link } from "react-router-dom";

const Kyc = () => {
  // const { data: allAgentsData, isLoading, error } = useGetAgentsQuery();
  const { data: allKycs, isLoading, error } = useGetAllKycsQuery();
  // const [updateStatus] = useUpdateAgentStatusMutation();
  // const [loadingStates, setLoadingStates] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered agents based on search query
  const filteredKycs = allKycs?.filter((kyc) =>
    kyc?.userInfo?.fullName?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  const paginatedKycs = filteredKycs?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const formattedDate = (date) => {
    if (!date) return "N/A";

    const d = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };

    return d.toLocaleDateString("en-US", options);
  };

  // const handleStatusUpdate = async (agentId, newStatus, email) => {
  //   setLoadingStates((prev) => ({ ...prev, [agentId]: true })); // Set loading for specific agent
  //   try {
  //     await updateStatus({
  //       id: agentId,
  //       status: newStatus,
  //       email: email,
  //     }).unwrap();
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoadingStates((prev) => ({ ...prev, [agentId]: false })); // Reset loading
  //   }
  // };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Agents Kyc</h1>
          {/* <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 block md:hidden whitespace-nowrap">
            Add Agent
          </button> */}
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="w-full hidden md:flex flex-row items-center">
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
          {/* <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 hidden md:block whitespace-nowrap"
            // onClick={handleAddAgent}
          >
            Add Agent
          </button> */}
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
      <div className="">
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">
            Data is loading...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            Failed to load data.
          </div>
        ) : (
          <div className="overflow-x-scroll">
            <table className="w-full border-collapse border border-blue-600">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Agent Name
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    User Name
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Email
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Phone
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    NID Front
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    NID Back
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Sub. Date
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Verify Date
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    KYC Status
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Update KYC Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedKycs?.map((kyc, index) => (
                  <tr
                    key={index}
                    className={`text-center border-b border-blue-600 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                    } text-black`}
                  >
                    <td className="px-4 py-2 text-blue-500 hover:text-blue-600 whitespace-nowrap">
                      <Link
                        to={`/dashboard/agentprofile/${kyc?.userInfo?._id}`}
                      >
                        {kyc?.userInfo?.fullName}
                      </Link>
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      {kyc?.userInfo?.username || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      {kyc?.userInfo?.email || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      0{kyc?.userInfo?.phone || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      {/* {agent?.nidFront || "N/A"} */}
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          kyc?.frontImage
                        }`}
                        alt="nid front img"
                        className="w-14"
                      />
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      {/* {agent?.nidBack || "N/A"} */}
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          kyc?.backImage
                        }`}
                        alt="nid back img"
                        className="w-14"
                      />
                    </td>
                    <td className="px-4 py-2 border border-blue-600 whitespace-nowrap">
                      {formattedDate(kyc?.createdAt) || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      {kyc?.verificationDate || "N/A"}
                    </td>
                    {/* <td className="px-4 py-2 border border-blue-600">
                    {loadingStates[kyc?.userInfo?._id] ? (
                      <ClipLoader size={18} color="#000000" />
                    ) : (
                      <span
                        className={`px-2 py-1 text-white size-20 rounded-2xl ${
                          agent?.status?.toLowerCase() === "approve"
                            ? "bg-green-500"
                            : agent?.status?.toLowerCase() === "pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        <>
                          {agent?.status?.toLowerCase() === "approve"
                            ? "Approved"
                            : agent?.status?.toLowerCase() === "pending"
                            ? "Pending"
                            : "Rejected"}
                        </>
                      </span>
                    )}
                  </td> */}
                    <td className="px-4 py-2 border border-blue-600">
                      {kyc?.sample || "N/A"}
                    </td>
                    {/* <td className="px-4 py-2 border border-blue-600">
                    <select
                      name="status"
                      className="px-3 py-1 border border-gray-300 rounded-sm bg-white text-black outline-none hover:border-blue-500 transition-all ease-in-out"
                      onChange={(e) =>
                        handleStatusUpdate(
                          agent?._id,
                          e.target.value,
                          agent?.email
                        )
                      }
                    >
                      <option value="" className="text-gray-400">
                        Select status
                      </option>
                      <option value="approve" className="text-green-500">
                        Approve
                      </option>
                      <option value="reject" className="text-red-500">
                        Reject
                      </option>
                    </select>
                  </td> */}
                    <td className="px-4 py-2 border border-blue-600">
                      {kyc?.sample2 || "N/A"}
                    </td>
                  </tr>
                ))}
                {paginatedKycs?.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      No agents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        <TablePagination
          currentPage={currentPage}
          totalItems={filteredKycs?.length || 0}
          itemsPerPage={rowsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Kyc;
