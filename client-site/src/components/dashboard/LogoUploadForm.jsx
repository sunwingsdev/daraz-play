import { IoAdd } from "react-icons/io5";
import { Button } from "../shared/ui/button";
import SpinLoader from "../shared/loader/SpinLoader";
import { useState } from "react";

const LogoUploadForm = ({ closeModal }) => {
  //   const [uploadImage] = useUploadImageMutation();
  //   const [addHomeControl] = useAddHomeControlMutation();
  const [loading, setLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  //   const { addToast } = useToasts();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
      setLogoFile(file);
    }
  };

  const handleRemove = () => {
    setLogoPreview(null);
    setLogoFile(null);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (logoFile) {
  //       const formData = new FormData();
  //       formData.append("image", logoFile);
  //       try {
  //         setLoading(true);
  //         const { data } = await uploadImage(formData);
  //         if (data.filePath) {
  //           const logoInfo = {
  //             page: "home",
  //             section: "navbar",
  //             category: "logo",
  //             image: data?.filePath,
  //           };
  //           const result = await addHomeControl(logoInfo);
  //           if (result.data.insertedId) {
  //             addToast("Logo uploaded successfully", {
  //               appearance: "success",
  //               autoDismiss: true,
  //             });
  //             setLogoPreview(null);
  //             setLogoFile(null);
  //             setLoading(false);
  //             closeModal();
  //           }
  //         }
  //         // eslint-disable-next-line no-unused-vars
  //       } catch (error) {
  //         setLoading(false);
  //         addToast("Failed to upload logo", {
  //           appearance: "error",
  //           autoDismiss: true,
  //         });
  //       }
  //     } else {
  //       addToast("Failed to upload image", {
  //         appearance: "error",
  //         autoDismiss: true,
  //       });
  //     }
  //   };
  return (
    <div className="bg-white">
      <form
        //   onSubmit={handleSubmit}
        className="space-y-2"
      >
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center">
          {!logoPreview ? (
            <label className="w-full h-full flex flex-col items-center text-center cursor-pointer relative">
              <div className="text-gray-400 text-4xl mb-4">📤</div>
              <p className="text-gray-600">Select a logo to upload</p>
              <p className="text-gray-500 text-sm">or drag and drop it here</p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={logoPreview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="text-red-500 text-sm hover:underline"
              >
                Remove Logo
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Button
            disabled={loading || !logoFile}
            type="submit"
            className="bg-[#222222] hover:bg-[#080808] flex items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed text-white disabled:text-slate-300"
          >
            {loading ? (
              <SpinLoader />
            ) : (
              <>
                <IoAdd /> Upload
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogoUploadForm;
