import { useState } from "react";
import { useGetRandomNumberQuery } from "../../../redux/features/allApis/paymentNumberApi/paymentNumberApi";
import walletNumber from "../../../assets/walletNumber.png";

const DepositLastPage = ({ closeModal, paymentMethod, amount }) => {
  const { data: randomNumber } = useGetRandomNumberQuery(
    paymentMethod.paymentMethod.toLowerCase()
  );

  const [selectedOption, setSelectedOption] = useState();
  // Options data
  const options = [
    { id: 1, label: "স্পোর্টস 100% প্রথম ডিপোজিট বোনাস - 100.00%" },
    { id: 2, label: "100% স্লট প্রথম ডিপোজিট বোনাস - 100.00%" },
    { id: 3, label: "ক্র্যাশ গেম 50% প্রথম ডিপোজিট বোনাস - 50.00%" },
    { id: 4, label: "50% লাইভ ক্যাসিনো প্রথম আমানত বোনাস - 50.00%" },
    {
      id: 5,
      label: "সক্রিয় জুয়া খেলার ঘর থেকে সাপ্তাহিক ২০% আমানত বোনাস - 20.00%",
    },
    { id: 6, label: "সাপ্তাহিক স্লট ২০% আমানত বোনাস - 20.00%" },
    { id: 7, label: "আনলিমিটেড 5% রিলোড বোনাস (স্লট) - 5.00%" },
    { id: 8, label: "আনলিমিটেড 5% রিলোড বোনাস (ক্র্যাশ) - 3.00%" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div className="bg-white px-4 py-6 md:p-6 rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[60%] xl:w-[54%] relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          {randomNumber ? (
            <>
              <div className="flex gap-2 items-center pb-4 text-xl font-bold border-b-2 border-gray-300">
                <img className="w-24" src={paymentMethod.image} alt="" />
                <p>{paymentMethod.paymentMethod} Payment</p>
              </div>

              <div className="xl:flex justify-between items-center gap-2 py-2 text-2xl xl:text-base text-gray-500 border-b-2 border-gray-300">
                <p>Transaction ID: D735617982</p>
                <p>Transaction Create Time: 2025/01/29 13:38:04 (GMT+6)</p>
              </div>

              <div className="text-base text-gray-500 text-center m-auto w-full lg:w-[80%]">
                <p className="mt-4">
                  Please ensure amount to deposit is the same as transferred
                  amount. We will not be liable for missing funds due to
                  incorrect information.
                </p>

                <p>
                  Please use phone number registered on our site for cash out,
                  deposits with 3rd party phone numbers are restricted.
                </p>

                <p className="font-semibold border-b-2 border-gray-300">
                  Please cash out to the account below within 06 :
                </p>
                <p className="font-semibold">
                  minutes after submitting the deposit form
                </p>
              </div>

              <div className="w-full xl:w-[86%] m-auto mt-5 flex justify-evenly items-center flex-col xl:flex-row gap-3 p-4 pb-6 bg-gray-200 rounded-xl">
                <img className="w-60 h-60" src={walletNumber} alt="" />
                <div className="w-full xl:w-[50%]">
                  <p className="text-4xl text-center text-red-500">
                    {randomNumber?.paymentNumber}
                  </p>
                  <p className="text-lg text-center">
                    Amount :{" "}
                    <span className="text-red-500 font-bold">{amount}</span>
                  </p>
                  <label htmlFor="" className="text-red-500 mt-3">
                    Phone Number / Cash Out No.
                  </label>

                  <div className="flex flex-col xl:flex-row gap-2 mb-2">
                    <div className="w-full xl:w-1/2">
                      <select
                        id="options"
                        value={selectedOption}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                      >
                        <option selected value="">
                          Please select
                        </option>
                        {options.map((option) => (
                          <option key={option.id} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full xl:w-1/2">
                      <input
                        type="text"
                        className="w-full py-1.5 px-3 outline-none rounded-sm uppercase"
                        placeholder="Please input data"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="" className="text-black mb-2">
                      Upload receipt{" "}
                      <button className="px-1 border border-red-500 text-red-500 rounded-md">
                        Reset Receipt
                      </button>
                    </label>
                    <input
                      type="file"
                      className="py-1 px-2 bg-white rounded-sm"
                    />
                  </div>

                  <p className="pt-10 pb-4 text-2xl font-semibold text-center">
                    Drop file here
                  </p>

                  <div className="w-full sm:w-60 m-auto">
                    <button
                      onClick={closeModal}
                      className="mt-6 w-full p-2 text-base font-semibold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white px-6 py-8 md:p-8 rounded-xl  relative h-[60vh] flex flex-col items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 15.75h4.5m-2.25-10.5v10.5M5.25 21h13.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z"
                />
              </svg>
              <p className="text-gray-600 text-lg font-medium">
                No payment number in this method
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepositLastPage;
