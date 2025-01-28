import { ClipLoader } from "react-spinners";
import TablePagination from "../../components/dashboard/TablePagination";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";
import {
  useGetAllKycsQuery,
  useUpdateKycStatusMutation,
} from "../../redux/features/allApis/kycApi/kycApi";

const PaymentMethodRequests = () => {
  const { data: allKycs, isLoading, error } = useGetAllKycsQuery();
  const [updateKycStatus, { isLoading: isKycLoading }] =
    useUpdateKycStatusMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const { addToast } = useToasts();

  const filteredKycs = allKycs?.filter((kyc) =>
    kyc?.userInfo?.username?.toLowerCase()?.includes(searchQuery?.toLowerCase())
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

  const handleKycStatus = async (kycId, newStatus) => {
    if (!newStatus) return;

    try {
      const response = await updateKycStatus({ id: kycId, status: newStatus });

      if (response?.data?.message) {
        addToast(response.data.message, {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast("Failed to update status", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (error) {
      console.log(error);
      addToast("An error occurred while updating the status.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Payment Requests</h1>
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="w-full hidden md:flex flex-row items-center">
            <input
              type="text"
              placeholder="Search by Agent UserName..."
              className="py-2 px-1 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
        </div>
        <form className="w-full flex flex-row items-center md:hidden">
          <input
            type="text"
            placeholder="Search by Agent UserName..."
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
                    Agent UserName
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Request Date
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Amount
                  </th>

                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Due Date
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Method
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Status
                  </th>
                  <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    Update Status
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
                    <td className="px-4 py-2 border border-blue-600 text-blue-500 hover:text-blue-600 whitespace-nowrap">
                      <Link
                        to={`/dashboard/agentprofile/${kyc?.userInfo?._id}`}
                      >
                        {kyc?.userInfo?.username}
                      </Link>
                    </td>
                    <td className="px-4 py-2 border border-blue-600 whitespace-nowrap">
                      {formattedDate(kyc?.createdAt) || "N/A"}
                    </td>

                    <td className="px-4 py-2 border border-blue-600 whitespace-nowrap">
                      500 BDT
                    </td>

                    <td className="px-4 py-2 border border-blue-600 whitespace-nowrap">
                      {formattedDate(kyc?.createdAt) || "N/A"}
                    </td>

                    <td className="px-4 py-2 border border-blue-600 whitespace-nowrap">
                      Bkash
                    </td>

                    <td className="px-4 py-2 border border-blue-600">
                      {isKycLoading ? (
                        <ClipLoader size={18} color="#000000" />
                      ) : (
                        <span
                          className={`px-2 py-1 text-white size-20 rounded-2xl ${
                            kyc?.status?.toLowerCase() === "approve"
                              ? "bg-green-500"
                              : kyc?.status?.toLowerCase() === "reject"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {kyc?.status?.toLowerCase() === "approve"
                            ? "Approved"
                            : kyc?.status?.toLowerCase() === "pending"
                            ? "Pending"
                            : "Rejected"}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2 border border-blue-600">
                      <select
                        name="status"
                        className="px-3 py-1 border border-gray-300 rounded-sm bg-white text-black outline-none hover:border-blue-500 transition-all ease-in-out"
                        onChange={(e) =>
                          handleKycStatus(kyc._id, e.target.value)
                        }
                      >
                        <option value="" className="text-gray-400">
                          Select Status
                        </option>
                        <option value="approve" className="text-green-500">
                          Approve
                        </option>
                        <option value="reject" className="text-red-500">
                          Reject
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
                {paginatedKycs?.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center py-4 text-gray-500">
                      No payment request data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      <TablePagination
        totalItems={filteredKycs?.length || 0}
        itemsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PaymentMethodRequests;
