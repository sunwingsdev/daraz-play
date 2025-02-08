import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { useToasts } from "react-toast-notifications";
import { useAddDepositMutation } from "../../../redux/features/allApis/depositsApi/depositsApi";
import { useGetPromotionsQuery } from "../../../redux/features/allApis/promotionApi/promotionApi";
import { Check } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import DepositLastPage from "./DepositLastPage";
import { uploadImage } from "../../../hooks/files";
import { useGetRandomNumberQuery } from "../../../redux/features/allApis/paymentNumberApi/paymentNumberApi";
import { useSelector } from "react-redux";

const mobilePaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/assets/template/images/bkash.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "bkash",
    bgColor: "#e2136e",
    depositChannels: ["expay", "autopay", "send money"],
    instructions: [
      "Go to your bKash Mobile Menu by dialing: *247# or Open bKash App.",
      "Enter the Receiver Account Number: 01975577900",
      "Choose: Send Money",
      "Now enter your bKash Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from bKash",
      "Put the Transaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 15000, 20000, 25000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/nagad.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "nagad",
    depositChannels: ["expay", "autopay", "send money"],
    bgColor: "#ec1d25",
    number: "01975577900",
    instructions: [
      "Go to your NAGAD Mobile Menu by dialing: *167# or Open NAGAD App.",
      "Enter the Receiver Account Number: 01975577900",
      "Choose: Send Money",
      "Now enter your NAGAD Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from NAGAD",
      "Put the Transaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
        required: true,
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/rocket.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "rocket",
    depositChannels: ["expay", "send money"],
    bgColor: "#8a288f",
    number: "01975577900",
    instructions: [
      "Go to your Rocket Mobile Menu by dialing: *322# or Open Rocket App.",
      "Enter the Receiver Account Number: 01975577900",
      "Choose: Send Money",
      "Now enter your Rocket Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from Rocket",
      "Put the Transaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
        required: true,
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/upay.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "upay",
    bgColor: "#8a288f",
    number: "01975577900",
    instructions: [
      "Go to your Upay Mobile Menu by dialing: *322# or Open Upay App.",
      "Enter the Receiver Account Number: 01975577900",
      "Choose: Send Money",
      "Now enter your Upay Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from Upay",
      "Put the Transaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
        required: true,
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/tap.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "tap",
    bgColor: "#8a288f",
    number: "01975577900",
    instructions: [
      "Go to your Tap Mobile Menu by dialing: *322# or Open Tap App.",
      "Enter the Receiver Account Number: 01975577900",
      "Choose: Send Money",
      "Now enter your Tap Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from Tap",
      "Put the Transaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
        required: true,
      },
    ],
  },
];

const bankPaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png",
    gateway: "BANK_TRANSFER",
    paymentMethod: "ibbl",
    bgColor: "#02733c",
    number: "013000000",
    instructions: [
      "Go to your bKash Mobile Menu by dialing: *247# or Open bKash App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your NAGAD Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from NAGAD",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "accountHolderName",
        type: "text",
        label: "Enter Account Holder Name",
        required: true,
      },
      {
        property: "screenshot",
        type: "file",
        label: "Attach a screenshot",
        required: true,
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png",
    gateway: "BANK_TRANSFER",
    paymentMethod: "dbbl",
    bgColor: "#02733c",
    number: "013000000",
    instructions: [
      "Go to your DBBL App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your DBBL Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from DBBL",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "accountHolderName",
        type: "text",
        label: "Enter Account Holder Name",
        required: true,
      },
      {
        property: "screenshot",
        type: "file",
        label: "Attach a screenshot",
        required: true,
      },
    ],
  },
  {
    image: "https://sslcommerz.com/wp-content/uploads/2024/05/dhaka-bank.jpg",
    gateway: "BANK_TRANSFER",
    paymentMethod: "dhakabank",
    bgColor: "#02733c",
    number: "013000000",
    instructions: [
      "Go to your DHAKA BANK App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your DHAKA BANK Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from DHAKA BANK",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "accountHolderName",
        type: "text",
        label: "Enter Account Holder Name",
        required: true,
      },
      {
        property: "screenshot",
        type: "file",
        label: "Attach a screenshot",
        required: true,
      },
    ],
  },
];
const buttons = ["Expay", "Autopay", "সেন্ড মানি"];

const DepositModal = ({ closeDepositModal }) => {
  const { user } = useSelector((state) => state.auth);

  const { data: promotions } = useGetPromotionsQuery();
  const [addDeposit, { isLoading }] = useAddDepositMutation();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");
  const [paymentMethod, setPaymentMethod] = useState(
    mobilePaymentMethods[0] || bankPaymentMethods[0]
  );
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    amount: 0,
    paymentMethod: "",
    depositChannel: "",
    senderAccountNumber: "",
    transactionId: "",
    screenshot: "",
    bonusId: "",
    userId: user?._id,
  });
  const { addToast } = useToasts();

  useEffect(() => {
    if (activeTabBottom === "MOBILE_BANKING") {
      setPaymentMethod(mobilePaymentMethods[0]);
    } else {
      setPaymentMethod(bankPaymentMethods[0]);
    }
    setFormData({ ...formData, paymentMethod: paymentMethod.paymentMethod });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activeTabBottom,
    mobilePaymentMethods,
    bankPaymentMethods,
    setPaymentMethod,
  ]);

  const { data: randomNumber, refetch } = useGetRandomNumberQuery(
    formData.paymentMethod.toLowerCase(),
    { skip: !formData.paymentMethod }
  );

  const bonusPromotions = promotions?.filter(
    (promotion) => promotion.bonus === "bonus"
  );

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const { filePath } = await uploadImage(file);
      console.log(filePath);
      setFormData({ ...formData, screenshot: filePath });
    }
    const result = await addDeposit(formData);
    if (result.data.insertedId) {
      addToast("Deposited successfully. Wait for the response.", {
        appearance: "success",
        autoDismiss: true,
      });
      closeDepositModal();
      refetch();
    }
    if (result.error) {
      addToast(result.error.data.error, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // button Deposit Channel
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (amount) => {
    setFormData({
      ...formData,
      amount: parseFloat(formData.amount) + parseFloat(amount),
    });
  };

  const handleGoToNext = () => {
    formData.amount && formData.depositChannel
      ? setIsFirstStep(false)
      : formData.depositChannel
      ? addToast("Please select an amount", {
          appearance: "error",
          autoDismiss: true,
        })
      : addToast("Please select an deposit channel", {
          appearance: "error",
          autoDismiss: true,
        });
  };
  return (
    <>
      <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
        <div className="w-full max-w-md bg-SidebarBg rounded-lg shadow-md flex flex-col overflow-y-auto max-h-svh relative">
          {/* Close Button */}
          <button
            onClick={closeDepositModal}
            className="absolute top-2 md:top-4 right-2 md:right-4 text-[#fff] text-lg hover:text-red-600 duration-300"
          >
            <FaTimes />
          </button>
          {isFirstStep ? (
            <div className="">
              <div className="flex justify-center items-center space-x-3 mt-4 px-4">
                <p className="text-2xl font-bold text-white">Deposit</p>
              </div>

              <div className="">
                {/* Deposit & Withdrawal button */}
                <div className="flex py-3 px-6">
                  <button
                    onClick={() => setActiveTabBottom("MOBILE_BANKING")}
                    className={`flex-1 py-1.5 font-semibold text-center rounded-l-md ${
                      activeTabBottom === "MOBILE_BANKING"
                        ? "text-black bg-yellow-400 loginButtonBgColor scale-105"
                        : "bg-[#0d4f2c] text-gray-200"
                    }`}
                  >
                    MOBILE BANKING
                  </button>
                  <button
                    onClick={() => setActiveTabBottom("BANK_TRANSFER")}
                    className={`flex-1 py-1.5 font-semibold text-center rounded-r-md ${
                      activeTabBottom === "BANK_TRANSFER"
                        ? "text-black bg-yellow-400 loginButtonBgColor scale-105"
                        : "bg-[#0d4f2c] text-gray-200"
                    }`}
                  >
                    BANK TRANSFER
                  </button>
                </div>

                <div className="bg-[#0d4f2c] text-white text-sm flex items-center justify-between gap-2 py-2 px-5">
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://img.d4040p.com/dp/h5/assets/images/icon-set/icon-selectpromotion.svg?v=1737700451320"
                      alt=""
                    />
                    <p>Select Promotion</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <select
                      id="bonusOption"
                      value={formData.bonusId}
                      onChange={(e) =>
                        setFormData({ ...formData, bonusId: e.target.value })
                      }
                      className="w-full px-2 bg-[#0d4f2c] focus:outline-none focus:border-transparent"
                    >
                      {" "}
                      <option selected disabled value={""}>
                        Select an option
                      </option>
                      {bonusPromotions?.map((item) => (
                        <option key={item?._id} value={item?._id}>
                          {item?.bonusTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="py-3 px-2 bg-footerBg max-h-[410px] 2xl:max-h-[560px] overflow-y-auto scrollbar-hide">
                  {/* Bank accoun name */}
                  <div className="p-3 bg-white rounded-md">
                    <h2 className="mb-2 text-base font-semibold text-footerTextColor border-l-4 border-footerTextColor pl-1">
                      Payment Method
                    </h2>
                    {activeTabBottom === "MOBILE_BANKING" ? (
                      <div className="">
                        <div className="grid grid-cols-3 gap-2">
                          {mobilePaymentMethods?.map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                selectPaymentMethod(item);
                                setFormData({
                                  ...formData,
                                  paymentMethod: item.paymentMethod,
                                });
                              }}
                            >
                              <div className="p-2 relative bg-gray-200 rounded-md text-center group">
                                <img
                                  className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                                  src={item.image}
                                  alt={item.paymentMethod}
                                />
                                {item.paymentMethod ===
                                  paymentMethod.paymentMethod && (
                                  <span className="absolute top-[-5px] right-[-5px] bg-footerTextColor text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    <Check size={10} />
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        {/* Deposit Channel */}
                        <div className="mt-2 p-3 bg-white rounded-md">
                          <h2 className="mb-2 text-base font-semibold text-footerTextColor border-l-4 border-footerTextColor pl-1">
                            Deposit Channel
                          </h2>
                          <div className="flex gap-3">
                            {paymentMethod?.depositChannels?.map(
                              (label, index) => (
                                <button
                                  key={index}
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      depositChannel: label,
                                    })
                                  }
                                  className={`relative py-1.5 px-4 text-sm border rounded-sm uppercase transition-all duration-300 ${
                                    formData.depositChannel === label
                                      ? "border-footerTextColor text-footerTextColor"
                                      : "border-gray-400 text-gray-600"
                                  }`}
                                >
                                  {label}
                                  {formData.depositChannel === label && (
                                    <span className="absolute top-[-5px] right-[-5px] bg-footerTextColor text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                      <Check size={10} />
                                    </span>
                                  )}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* Amount */}
                        <div className="mt-2 p-3 bg-white rounded-md">
                          <h2 className="mb-2 text-base font-semibold text-footerTextColor border-l-4 border-footerTextColor pl-1">
                            Amount
                          </h2>
                          <div>
                            {/* Grid Buttons */}
                            <div className="grid grid-cols-4 gap-3 mb-3">
                              {paymentMethod?.amounts.map((amount, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleClick(amount)}
                                  className="flex items-center gap-2 py-1.5 px-3 text-sm border border-gray-400 rounded-sm transition-all duration-300 hover:border-black hover:text-black"
                                >
                                  + {amount}
                                </button>
                              ))}
                            </div>

                            {/* Selected Total Amount */}
                            <div className="flex justify-between items-center gap-2 bg-slate-200 border py-1.5 px-3 rounded-md">
                              <h3 className="text-base font-semibold">
                                <FaBangladeshiTakaSign />
                              </h3>
                              <p className="text-sm font-semibold">
                                {formData.amount > 0 ? formData.amount : "0.00"}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-2 p-2 bg-yellow-100 rounded-sm">
                            <BsFillPatchExclamationFill size={34} />
                            <div className="">
                              <p className="text-xs">
                                ১/ব্যক্তিগত তথ্য-এর অধীনে ক্যাশ আউট করার আগে
                                সর্বোচ্চ ৩টি মোবাইল নম্বর যোগ করুন এবং ভেরিফাই
                                করুন।
                              </p>
                              <p className="text-xs">
                                ২/আপনার ডিপোজিট প্রক্রিয়ার দ্রুত সফল করতে সঠিক
                                ক্যাশ আউট নাম্বার , এমাউন্ট এবং ট্রানজেকশন আইডি
                                সহ সাবমিট দিন।
                              </p>
                              <p className="text-xs">
                                ৩/যেকোনো ডিপোজিট করার আগে সবসময় আমাদের ডিপোজিট
                                পেইজে নাম্বার চেক করুন ।
                              </p>
                              <p className="text-xs">
                                ৪/ডিপোজিট পেন্ডিং অবস্থায় আপনি ২টি ডিপোজিট এর
                                জন্য ট্রাই করতে পারবেন। আপনি কোনো সমস্যার
                                সম্মুখীন হলে লাইভচ্যাট সহায়তা নিতে পারেন।
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <div className="grid grid-cols-2 gap-2">
                          {bankPaymentMethods?.map((item) => (
                            <button
                              key={item}
                              onClick={() => selectPaymentMethod(item)}
                            >
                              <div className="p-2 relative bg-gray-200 rounded-md text-center group">
                                <img
                                  className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                                  src={item.image}
                                  alt={item.paymentMethod}
                                />
                                {item.paymentMethod ===
                                  paymentMethod.paymentMethod && (
                                  <span className="absolute top-[-5px] right-[-5px] bg-footerTextColor text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    <Check size={10} />
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                        {/* Deposit Channel */}
                        <div className="mt-2 p-3 bg-white rounded-md">
                          <h2 className="mb-2 text-base font-semibold text-footerTextColor border-l-4 border-footerTextColor pl-1">
                            Deposit Channel
                          </h2>
                          <div className="flex gap-3">
                            {buttons.map((label, index) => (
                              <button
                                key={index}
                                onClick={() => setActiveButton(index)}
                                className={`relative py-1.5 px-4 text-sm border rounded-sm uppercase transition-all duration-300 ${
                                  activeButton === index
                                    ? "border-footerTextColor text-footerTextColor"
                                    : "border-gray-400 text-gray-600"
                                }`}
                              >
                                {label}
                                {activeButton === index && (
                                  <span className="absolute bottom-[-5px] right-[-5px] bg-footerTextColor text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    <Check size={10} />
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Amount */}
                        <div className="mt-2 p-3 bg-white rounded-md">
                          <h2 className="mb-2 text-base font-semibold text-footerTextColor border-l-4 border-footerTextColor pl-1">
                            Amount
                          </h2>
                          <div>
                            {/* Grid Buttons */}
                            <div className="grid grid-cols-4 gap-3 mb-3">
                              {paymentMethod?.amounts.map((amount, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleClick(amount)}
                                  className="flex items-center gap-2 py-1.5 px-3 text-sm border border-gray-400 rounded-sm transition-all duration-300 hover:border-black hover:text-black"
                                >
                                  + {amount}
                                </button>
                              ))}
                            </div>

                            {/* Selected Total Amount */}
                            <div className="flex justify-between items-center gap-2 bg-slate-200 border py-1.5 px-3 rounded-md">
                              <h3 className="text-base font-semibold">
                                <FaBangladeshiTakaSign />
                              </h3>
                              <p className="text-sm font-semibold">
                                {formData.amount > 0 ? formData.amount : "0.00"}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-2 p-2 bg-yellow-100 rounded-sm">
                            <BsFillPatchExclamationFill size={34} />
                            <div className="">
                              <p className="text-xs">
                                ১/ব্যক্তিগত তথ্য-এর অধীনে ক্যাশ আউট করার আগে
                                সর্বোচ্চ ৩টি মোবাইল নম্বর যোগ করুন এবং ভেরিফাই
                                করুন।
                              </p>
                              <p className="text-xs">
                                ২/আপনার ডিপোজিট প্রক্রিয়ার দ্রুত সফল করতে সঠিক
                                ক্যাশ আউট নাম্বার , এমাউন্ট এবং ট্রানজেকশন আইডি
                                সহ সাবমিট দিন।
                              </p>
                              <p className="text-xs">
                                ৩/যেকোনো ডিপোজিট করার আগে সবসময় আমাদের ডিপোজিট
                                পেইজে নাম্বার চেক করুন ।
                              </p>
                              <p className="text-xs">
                                ৪/ডিপোজিট পেন্ডিং অবস্থায় আপনি ২টি ডিপোজিট এর
                                জন্য ট্রাই করতে পারবেন। আপনি কোনো সমস্যার
                                সম্মুখীন হলে লাইভচ্যাট সহায়তা নিতে পারেন।
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleGoToNext}
                    className="w-full mt-2 p-1.5 text-base text-white bg-SideBarTopBg rounded-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <DepositLastPage
              closeModal={closeDepositModal}
              paymentMethod={paymentMethod}
              setFormData={setFormData}
              formData={formData}
              setFile={setFile}
              file={file}
              handlePaymentSubmit={handlePaymentSubmit}
              isLoading={isLoading}
              randomNumber={randomNumber}
              refetch={refetch}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DepositModal;
