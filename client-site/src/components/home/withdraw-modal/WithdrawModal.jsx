import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsArrowLeftSquare } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";
import { useAddWithdrawMutation } from "../../../redux/features/allApis/withdrawsApi/withdrawsApi";
// import { useAddWithdrawMutation } from "../../../redux/features/allApis/withdrawApi/withdrawApi";
// import { uploadImage } from "../../../hooks/files";

// TODO:
// 1. amount will be equal or less than the balance
// 2. inputs will be dynamic based on the payment method

const mobilePaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/assets/template/images/bkash.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "bKash",
    bgColor: "#e2136e",
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/nagad.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "Nagad",
    bgColor: "#ec1d25",
  },
];

const bankPaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png",
    gateway: "BANK_TRANSFER",
    paymentMethod: "IBBL",
    bgColor: "#02733c",
    inputs: [
      {
        property: "accountNumber",
        type: "text",
        label: "Enter Receiver Account Number",
        required: true,
      },
    ],
  },
];

const WithdrawModal = ({ closeWithdrawModal }) => {
  const { user } = useSelector((state) => state.auth);
  const [addWithdraw, { isLoading }] = useAddWithdrawMutation();
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const { addToast } = useToasts();

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    setStep(2);
  };

  const handleSubmitWithdraw = async (e) => {
    e.preventDefault();
    if (!withdrawAmount) {
      addToast("Please enter the amount", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const withdrawInfo = {
      amount: withdrawAmount,
      paymentMethod: paymentMethod.paymentMethod,
      gateway: paymentMethod.gateway,
      accountNumber: e.target?.accountNumber?.value,
      userId: user?._id,
    };
    console.log(withdrawInfo);
    try {
      const { data } = await addWithdraw(withdrawInfo);
      if (data.insertedId) {
        addToast("Withdraw request sent successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        closeWithdrawModal();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to send withdraw request", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#222222] rounded-lg shadow-md flex flex-col overflow-y-auto max-h-svh relative">
        {/* Close Button */}
        <button
          onClick={closeWithdrawModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#fff] text-lg hover:text-red-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Step 1: Select Payment Method */}
        {step === 1 && (
          <div className="p-6">
            <div className="flex justify-center items-center space-x-3">
              <p className="text-2xl font-bold text-white">Deposit</p>
            </div>
            <div className="flex mt-2 justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
              <IoHomeOutline onClick={() => setStep(1)} size={30} />
              <div className="flex gap-3">
                <MdGTranslate size={30} />
                <IoMdClose onClick={closeWithdrawModal} size={30} />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTabBottom("MOBILE_BANKING")}
                  className={`flex-1 py-2 font-semibold text-center rounded-l-md ${
                    activeTabBottom === "MOBILE_BANKING"
                      ? "text-black bg-[#facc15] scale-105"
                      : "bg-gray-400 text-gray-200"
                  }`}
                >
                  MOBILE BANKING
                </button>
                <button
                  onClick={() => setActiveTabBottom("BANK_TRANSFER")}
                  className={`flex-1 py-2 font-semibold text-center rounded-r-md ${
                    activeTabBottom === "BANK_TRANSFER"
                      ? "text-black bg-[#facc15] scale-105"
                      : "bg-gray-400 text-gray-200"
                  }`}
                >
                  BANK TRANSFER
                </button>
              </div>
              <div className="mt-4">
                {activeTabBottom === "MOBILE_BANKING" ? (
                  <div className="grid grid-cols-3 gap-2">
                    {mobilePaymentMethods?.map((item) => (
                      <button
                        key={item.paymentMethod}
                        onClick={() => selectPaymentMethod(item)}
                      >
                        <div className="p-2 bg-gray-200 rounded-md text-center group">
                          <img
                            className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.paymentMethod}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {bankPaymentMethods?.map((item) => (
                      <button
                        key={item.paymentMethod}
                        onClick={() => selectPaymentMethod(item)}
                      >
                        <div className="p-2 bg-gray-200 rounded-md text-center group">
                          <img
                            className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.paymentMethod}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Enter Deposit Amount */}
        {step === 2 && (
          <div className="space-y-2">
            <h2 className="p-2 w-full text-center text-lg font-semibold text-white border-b-2 border-gray-500">
              Deposit
            </h2>

            <div className="pb-4 px-4 space-y-4">
              <div className="flex items-center gap-3">
                <BsArrowLeftSquare
                  onClick={() => setStep(1)}
                  size={26}
                  className="text-white"
                />
                <p className="text-white text-base font-semibold">
                  Choose other payment
                </p>
              </div>
              <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
                <IoHomeOutline onClick={() => setStep(1)} size={30} />
                <div className="flex gap-3">
                  <MdGTranslate size={30} />
                  <IoMdClose onClick={closeWithdrawModal} size={30} />
                </div>
              </div>
              <div
                style={{ backgroundColor: `${paymentMethod?.bgColor}` }}
                className="p-3 bg-red-600 border-2 border-white"
              >
                <div className="flex justify-around items-center gap-2">
                  <div className="bg-white rounded-xl">
                    <img className="w-32" src={paymentMethod.image} alt="" />
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-bold">
                      {withdrawAmount} BDT
                    </h4>
                  </div>
                </div>
              </div>

              <div className="my-4 text-white">
                <form onSubmit={handleSubmitWithdraw}>
                  <div className="px-3 py-2 inline-flex items-center gap-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg">
                    <p>
                      Receiver Number: {"+880"} {user?.phone}
                    </p>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="" className="text-base font-semibold">
                      Enter Amount
                    </label>
                    <input
                      className="w-full my-2 px-5 py-2 font-bold bg-[#152234] border border-gray-500 rounded-lg focus:outline-none placeholder-white text-white"
                      type="text"
                      placeholder="Enter Amount"
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                    />
                  </div>

                  <div>
                    {paymentMethod.inputs &&
                      paymentMethod?.inputs?.map((input, idx) => (
                        <div key={idx}>
                          <label
                            htmlFor={input.property}
                            className="text-white font-bold"
                          >
                            {input.label}
                          </label>
                          <input
                            type={input.type}
                            name={input.property}
                            id={input.property}
                            className="w-full py-2 px-4 text-white bg-[#152234] rounded-lg mt-2 border-2 border-gray-500 focus:outline-none"
                          />
                        </div>
                      ))}
                  </div>
                  <div className="w-full pt-3">
                    <button
                      type="submit"
                      className="py-1 px-4 w-full text-xl font-semibold text-black bg-[#facc15] hover:bg-yellow-700 border border-white rounded-lg duration-300"
                    >
                      {isLoading ? "Processing..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;
