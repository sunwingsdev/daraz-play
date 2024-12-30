import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image from "../../assets/admin/adminImage.webp";

const AdminLogin = () => {
  // const { signIn, logOut } = useContext(AuthContext);
  // const [getSingleUser] = useLazyGetUserByEmailQuery();
  const navigate = useNavigate();
  // const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    //   try {
    //     setIsLoading(true);
    //     await signIn(formData?.email, formData?.password);
    //     const { data: singleUser } = await getSingleUser(formData?.email);
    //     if (singleUser?.role === "admin") {
    //       addToast("Login successful!", {
    //         appearance: "success",
    //         autoDismiss: true,
    //       });
    //       navigate("/dashboard");
    //       setIsLoading(false);
    //       setFormData({
    //         email: "",
    //         password: "",
    //       });
    //     } else {
    //       logOut();
    //       addToast("Login failed. Please check your credentials.", {
    //         appearance: "error",
    //         autoDismiss: true,
    //       });
    //       setIsLoading(false);
    //     }
    //   } catch (err) {
    //     addToast("Login failed. Please check your credentials.", {
    //       appearance: "error",
    //       autoDismiss: true,
    //     });
    //     console.error("Sign-in error:", err.message);
    //     setIsLoading(false);
    //   }
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-black">
      {/* Left Side Image */}
      <div className="relative w-full md:w-1/2 ">
        <img
          src={image}
          alt="Login Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right Side Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 lg:px-20 py-3 -mt-12 md:mt-0 z-10 ">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img src={``} alt="" />
            <h2 className="text-white text-lg font-semibold mt-2">
              Welcome To Admin Login
            </h2>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="">
              <label className="block text-white mb-1" htmlFor="username">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaCircleUser />
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="">
              <label className="block text-white mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaKey />
                </span>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
              >
                {isLoading ? "..." : <>&#x279E; Log In</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
