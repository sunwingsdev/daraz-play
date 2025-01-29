import { useForm } from "react-hook-form";
import {
  useGetAgentByIdQuery,
  useUpdateAgentMutation,
} from "../../../redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";
import AddPaymentMethodandNumberforAgent from "./AddPaymentMethodandNumberforAgent";

const CashAgentProfileUserInfo = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const { data: singleAgent } = useGetAgentByIdQuery(id);
  const [updateAgent, { isLoading }] = useUpdateAgentMutation();

  const onSubmit = async (data) => {
    const { password, confirmPassword, ...updatedAgent } = data;

    // Validate password and confirm password
    if (password !== confirmPassword) {
      addToast("Passwords do not match!", {
        appearance: "warning",
        autoDismiss: true,
      });
      return;
    }

    try {
      // Call mutation
      await updateAgent({
        id,
        data: { ...updatedAgent, ...(password && { password }) }, // Conditionally include password
      }).unwrap();
      addToast("Agent information updated successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast(
        error?.data?.message || "Failed to update agent. Please try again.",
        {
          appearance: "error",
          autoDismiss: true,
        }
      );
    }
  };
  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                defaultValue={singleAgent?.fullName}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                defaultValue={singleAgent?.email}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <div className="flex items-center ps-1 pe-7">
                <img
                  src="https://flagcdn.com/w40/bd.png"
                  alt="Bangladesh Flag"
                  className="w-6 h-4"
                />
                <span className="ml-2">+880</span>
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full outline-none"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "Invalid phone number",
                  },
                })}
                defaultValue={singleAgent?.phone}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 cursor-not-allowed"
                defaultValue={singleAgent?.username}
                readOnly
                title="Username not allowed to update"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#6b7699f1] text-white py-3 rounded-md hover:bg-green-600 transition-all"
        >
          {isLoading ? "Updating..." : "Update Info"}
        </button>
      </form>
      <AddPaymentMethodandNumberforAgent id={id} />
    </>
  );
};

export default CashAgentProfileUserInfo;
