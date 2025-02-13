const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <h3 className="text-left font-medium text-2xl text-black">
                  Sign In
                </h3>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black border-black font-medium ">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label-text text-black border-black">
                  <span className="label-text text-black border-black font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black border-black font-medium">
                    Select Language
                  </span>
                </label>
                <select className="select select-bordered " required>
                  <option value="english">English</option>
                  <option value="bangla">বাংলা</option>
                </select>
              </div>

              <div className="form-control mt-6">
                {/* Sign In Button */}
                <div className="flex justify-center">
                  <button className="w-24 h-8 items-center rounded-md hover:bg-gray-700 bg-gray-600 border-none">
                    Sign In
                  </button>
                </div>

                {/* Sign Up Button and Forgot Password */}
                <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4">
                  <button
                    className="w-28 h-8 border-[#488286] text-[#488286] rounded-md hover:text-white hover:bg-[#488286]"
                    style={{ border: "2px solid #488286" }}
                  >
                    Sign Up
                  </button>

                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt text-black link link-hover"
                    >
                      | Forgot password?
                    </a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
