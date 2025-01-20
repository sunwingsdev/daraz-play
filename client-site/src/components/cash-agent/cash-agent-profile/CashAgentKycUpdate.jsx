import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { uploadImage } from "../../../hooks/files";
import { Button } from "../../shared/ui/button";
import { GrStatusGood, GrStatusWarning } from "react-icons/gr";
import {
  useAddKycMutation,
  useGetKycByIdQuery,
} from "../../../redux/features/allApis/kycApi/kycApi";

const CashAgentKycUpdate = ({ id }) => {
  const { handleSubmit, reset } = useForm();
  const [images, setImages] = useState({ frontImage: null, backImage: null });
  const [frontImagePreview, setFrontImagePreview] = useState(null);
  const [backImagePreview, setBackImagePreview] = useState(null);
  const [addKyc, { isLoading: addKycLoading }] = useAddKycMutation();
  const { data: singleKyc } = useGetKycByIdQuery(id);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setImages((prevState) => ({ ...prevState, [type]: file }));

    // Set image preview
    const previewUrl = file ? URL.createObjectURL(file) : null;
    if (type === "frontImage") setFrontImagePreview(previewUrl);
    if (type === "backImage") setBackImagePreview(previewUrl);
  };

  const { addToast } = useToasts();

  const onSubmit = async () => {
    if (images.frontImage && images.backImage) {
      const frontImagePath = await uploadImage(images.frontImage);
      const backImagePath = await uploadImage(images.backImage);

      const formattedData = {
        userId: id,
        frontImage: frontImagePath.filePath,
        backImage: backImagePath.filePath,
      };

      try {
        const response = await addKyc(formattedData); // Your mutation call
        if (response) {
          addToast("KYC uploaded successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        }
        reset();
      } catch (error) {
        console.log(error);
        addToast("Failed to upload KYC", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      addToast("Please upload both front and back images", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="w-full rounded-lg px-3 py-1.5">
      <h2 className="text-lg font-semibold text-center mb-4 capitalize">
        Submit your NID for KYC verification.
      </h2>

      {singleKyc ? (
        singleKyc.status === "pending" ? (
          <div className="mt-4 p-3 bg-yellow-200 flex flex-col items-center text-center md:text-left gap-4 rounded-md text-yellow-800">
            <GrStatusWarning className="text-5xl" />
            <h1>Your NID has been successfully uploaded!</h1>
            <p>
              KYC Status:{" "}
              <strong>
                {(singleKyc?.status === "pending" && "Pending") || "N/A"}
              </strong>
            </p>
            <p>
              Your KYC is currently under review. Please be patient while we
              process your documents. You will be notified once your KYC is
              approved.
            </p>
            <p>If you have any questions, feel free to reach out to support.</p>
          </div>
        ) : singleKyc.status === "approve" ? (
          <div className="mt-4 p-3 bg-green-200 flex flex-col items-center gap-4 text-center md:text-left rounded-md text-green-800">
            <GrStatusGood className="text-5xl" />
            <h1>Your KYC has been approved!</h1>
            <p>
              KYC Status:{" "}
              <strong>
                {(singleKyc?.status === "approve" && "Approved") || "N/A"}
              </strong>
            </p>
            <p>
              Congratulations! Your KYC has been successfully verified. You can
              now access all the services. Thank you for your patience!
            </p>
          </div>
        ) : null
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Front Image Upload Field */}
          <div>
            {/* Preview for Front Image */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center mt-2">
              {frontImagePreview ? (
                <img
                  src={frontImagePreview}
                  alt="NID Front"
                  className="w-full md:h-72 object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-500">No image uploaded</span>
              )}
            </div>
            <label
              htmlFor="frontImage"
              className="block text-sm font-medium text-gray-700 my-2"
            >
              Front Side
            </label>
            <input
              type="file"
              id="frontImage"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "frontImage")}
              className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Back Image Upload Field */}
          <div>
            {/* Preview for Back Image */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center mt-2">
              {backImagePreview ? (
                <img
                  src={backImagePreview}
                  alt="NID Back"
                  className="w-full md:h-72 object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-500">No image uploaded</span>
              )}
            </div>
            <label
              htmlFor="backImage"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Back Side
            </label>
            <input
              type="file"
              id="backImage"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "backImage")}
              className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-white py-2 px-6 rounded whitespace-nowrap"
            >
              {addKycLoading ? "Uploading..." : "Upload KYC"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CashAgentKycUpdate;
