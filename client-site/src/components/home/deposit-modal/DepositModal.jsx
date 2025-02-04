import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsArrowLeftSquare, BsFillPatchExclamationFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { IoCopySharp, IoHomeOutline } from "react-icons/io5";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";
import { useAddDepositMutation } from "../../../redux/features/allApis/depositsApi/depositsApi";
import { uploadImage } from "../../../hooks/files";
import { useGetPromotionsQuery } from "../../../redux/features/allApis/promotionApi/promotionApi";
import { Check } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const mobilePaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/assets/template/images/bkash.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "bKash",
    bgColor: "#e2136e",
    number: "01975577900",
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
    paymentMethod: "Nagad",
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
    paymentMethod: "Rocket",
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
    paymentMethod: "Upay",
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
    paymentMethod: "Tap",
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
    paymentMethod: "IBBL",
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
    paymentMethod: "DBBL",
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
    paymentMethod: "DHAKA BANK",
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

const DepositModal = ({ closeDepositModal }) => {
  const { user } = useSelector((state) => state.auth);
  const { data: promotions } = useGetPromotionsQuery();
  const [addDeposit] = useAddDepositMutation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [files, setFiles] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const { addToast } = useToasts();

  const bonusPromotions = promotions?.filter(
    (promotion) => promotion.bonus === "bonus"
  );

  // Step navigation handlers
  const goNextStep = () => setStep((prevStep) => prevStep + 1);
  const goPreviousStep = () => setStep((prevStep) => prevStep - 1);

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    goNextStep();
  };

  const handleFileChange = (e, property) => {
    if (e.target.files) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [property]: e.target.files[0],
      }));
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const images = [files];
    let paymentInputs = [];

    try {
      if (files) {
        const uploadPromises = images.flatMap((item) =>
          Object.keys(item).map((key) =>
            uploadImage(item[key]).then((result) => ({
              [key]: result.filePath,
            }))
          )
        );
        const uploadedImages = await Promise.all(uploadPromises);
        paymentInputs = [...paymentInputs, ...uploadedImages];
      }
      formData.forEach((value, key) => {
        if (!(value instanceof File)) {
          const paymentInput = {
            [key]: value,
          };
          paymentInputs.push(paymentInput);
        }
      });
      const depositInfo = {
        amount: depositAmount,
        userId: user?._id,
        method: paymentMethod?.paymentMethod,
        gateway: paymentMethod?.gateway,
        promotionId: selectedOption,
        paymentInputs: paymentInputs,
      };
      if (depositAmount) {
        setLoading(true);
        const { data } = await addDeposit(depositInfo);
        if (data.insertedId) {
          addToast("Deposited successfully. Wait for the response.", {
            appearance: "success",
            autoDismiss: true,
          });
          closeDepositModal();
          setLoading(false);
        }
      } else {
        addToast("Add amount to deposit", {
          appearance: "error",
          autoDismiss: true,
        });
        setStep(2);
      }
    } catch (error) {
      console.error("Error during deposit submission:", error);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (paymentMethod?.number) {
      navigator.clipboard
        .writeText(paymentMethod.number)
        .then(() => {
          addToast("Copied to the clipboard", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedOption(selectedId); // Store the _id in the state
  };

  console.log("Selected Option: ", selectedOption);

  // button Deposit Channel
  const [activeButton, setActiveButton] = useState(null);
  const buttons = ["Expay", "Autopay", "সেন্ড মানি"];

  // Amount
  const amounts = [2000, 5000, 10000, 15000, 20000, 25000, 500, 200];
  const [totalAmount, setTotalAmount] = useState(0); // মোট যোগফল ট্র্যাক করবে

  const handleClick = (amount) => {
    setTotalAmount((prevTotal) => prevTotal + amount); // টোটাল অ্যামাউন্টে যোগ হবে
  };
  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-SidebarBg rounded-lg shadow-md flex flex-col overflow-y-auto max-h-svh relative">
        {/* Close Button */}
        <button
          onClick={closeDepositModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#fff] text-lg hover:text-red-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Step 1: Select Payment Method */}
        {step === 1 && (
          <div className="">
            <div className="flex justify-center items-center space-x-3 mt-4 px-4">
              <p className="text-2xl font-bold text-white">Deposit</p>
            </div>
            {/* <div className="flex mt-2 justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-red-600">
              <IoHomeOutline
                className="cursor-pointer"
                onClick={() => setStep(1)}
                size={22}
              />
              <div className="flex gap-3">
                <MdGTranslate size={22} />
                <IoMdClose
                  className="cursor-pointer"
                  onClick={closeDepositModal}
                  size={22}
                />
              </div>
            </div> */}
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
                    value={selectedOption}
                    onChange={handleChange}
                    className="w-full  bg-[#0d4f2c] focus:outline-none focus:border-transparent"
                  >
                    {" "}
                    <option selected disabled value={""}>
                      ৩% আনলিমিটেড ডিপোজিট
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
                    <div className="grid grid-cols-3 gap-2">
                      {mobilePaymentMethods?.map((item) => (
                        <button
                          key={item}
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
                          key={item}
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
                      {amounts.map((amount, index) => (
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
                        {totalAmount > 0 ? totalAmount : "0.00"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2 p-2 bg-yellow-100 rounded-sm">
                    <BsFillPatchExclamationFill size={34} />
                    <div className="">
                      <p className="text-xs">
                        ১/ব্যক্তিগত তথ্য"-এর অধীনে ক্যাশ আউট করার আগে সর্বোচ্চ
                        ৩টি মোবাইল নম্বর যোগ করুন এবং ভেরিফাই করুন।
                      </p>
                      <p className="text-xs">
                        ২/আপনার ডিপোজিট প্রক্রিয়ার দ্রুত সফল করতে সঠিক ক্যাশ
                        আউট নাম্বার , এমাউন্ট এবং ট্রানজেকশন আইডি সহ সাবমিট দিন।
                      </p>
                      <p className="text-xs">
                        ৩/যেকোনো ডিপোজিট করার আগে সবসময় আমাদের ডিপোজিট পেইজে
                        নাম্বার চেক করুন ।
                      </p>
                      <p className="text-xs">
                        ৪/ডিপোজিট পেন্ডিং অবস্থায় আপনি ২টি ডিপোজিট এর জন্য ট্রাই
                        করতে পারবেন। আপনি কোনো সমস্যার সম্মুখীন হলে লাইভচ্যাট
                        সহায়তা নিতে পারেন।
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-2 p-1.5 text-base text-white bg-SideBarTopBg rounded-sm">
                  Submit
                </button>
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
                  onClick={goPreviousStep}
                  size={26}
                  className="text-white cursor-pointer"
                />
                <p className="text-white text-base font-semibold">
                  Choose other payment
                </p>
              </div>
              <div className="my-4 text-white">
                <form action="">
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethod.amounts?.map((amount) => (
                      <p
                        onClick={() => setDepositAmount(amount)}
                        key={amount}
                        className="py-2 px-4 text-center cursor-pointer text-sm md:text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500"
                      >
                        {amount} BDT
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="" className="text-base font-semibold">
                      Enter Amount
                    </label>
                    <p className="w-full my-2 px-5 py-2 font-bold bg-[#152234] border border-gray-500 rounded-lg focus:outline-none placeholder-white text-white">
                      {depositAmount ? depositAmount : 0} BDT
                    </p>
                  </div>
                  <p className="text-base font-medium">
                    Max. deposit :{" "}
                    <span className="text-cyan-400">
                      {paymentMethod.amounts[paymentMethod.amounts.length - 1]}{" "}
                      BDT
                    </span>
                  </p>
                  <div className="w-full m-auto pt-3">
                    <button
                      onClick={goNextStep}
                      className="py-1 px-4 w-full text-xl font-semibold text-white menubarBgAct border border-white rounded-lg duration-300"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Enter Payment Details */}
        {step === 3 && (
          <div className="space-y-2 p-4 overflow-y-auto scrollbar-hide">
            <div className="flex items-center gap-3">
              <BsArrowLeftSquare
                onClick={goPreviousStep}
                size={26}
                className="text-white cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-red-600">
              <IoHomeOutline
                className="cursor-pointer"
                onClick={() => setStep(1)}
                size={24}
              />
              <div className="flex gap-3">
                <MdGTranslate size={24} />
                <IoMdClose
                  className="cursor-pointer"
                  onClick={closeDepositModal}
                  size={24}
                />
              </div>
            </div>
            <div
              style={{ backgroundColor: `${paymentMethod?.bgColor}` }}
              className={`p-3 bg-red-600  border-2 border-white`}
            >
              <div className="flex justify-around items-end gap-2">
                <div className="bg-white rounded-xl">
                  <img className="w-32" src={paymentMethod.image} alt="" />
                </div>
                <div className="">
                  <p className="text-base text-center font-semibold text-white">
                    টাকার পরিমান{" "}
                  </p>
                  <div className="bg-white w-full mt-1 py-1 px-3 whitespace-nowrap text-xl text-center rounded-lg font-bold">
                    {depositAmount} BDT
                  </div>
                </div>
              </div>
              <form onSubmit={handlePaymentSubmit} ref={formRef}>
                <div>
                  {paymentMethod?.inputs?.map(
                    ({ label, type, property, required }, index) => (
                      <div key={index}>
                        <p className="text-white text-sm font-semibold">
                          {label}
                        </p>
                        {type === "file" ? (
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              name={property}
                              onChange={(e) => handleFileChange(e, property)}
                              className="w-full my-1 px-5 py-1 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                              required={required}
                            />
                            {files[label] && (
                              <p className="mt-2 text-sm text-gray-500">
                                Selected file: {files[label].name}
                              </p>
                            )}
                          </div>
                        ) : (
                          <input
                            name={property}
                            type={type}
                            className="w-full my-1 px-5 py-1 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                            placeholder={label}
                            required={required}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="">
                  <div
                    onClick={handleCopy}
                    className="text-white inline-flex group items-center gap-3 py-1.5 text-lg cursor-pointer pe-4"
                  >
                    {paymentMethod?.number}{" "}
                    <IoCopySharp className="text-gray-300 group-hover:text-green-400" />
                  </div>
                  {paymentMethod?.instructions?.map((item) => (
                    <p
                      key={item}
                      className="text-xs font-semibold text-white py-2 border-b border-gray-600"
                    >
                      ▪{item}
                    </p>
                  ))}
                </div>
                <div className="w-40 m-auto pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-2 px-4 w-full text-xl font-semibold text-white loginButtonBgColor disabled:bg-slate-400 disabled:text-black disabled:cursor-not-allowed border border-white rounded-lg duration-300"
                  >
                    {loading ? "Processing..." : "Deposit Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
