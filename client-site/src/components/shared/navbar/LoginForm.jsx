import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {" "}
      <form className="py-4 px-6">
        <div className="space-y-1 mb-2">
          <label className="text-white text-sm" htmlFor="name">
            Username
          </label>
          <input
            type="name"
            placeholder="4-15 char, allow number"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
            required
          />
        </div>
        <div className="space-y-1 relative">
          <label className="text-white text-sm" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="6-20 Characters and Numbers"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
            required
          />
          <button
            type="button"
            className="absolute top-8 right-3 text-white"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
        </div>

        <div className="text-right text-sm font-semibold text-red-600">
          <div className="inline-block cursor-pointer">Forgot password?</div>
        </div>
        <button className="p-1.5 w-full text-lg text-[#aaa9a9] hover:text-white bg-[#363636] hover:bg-red-600 duration-300 rounded-md">
          {"Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
