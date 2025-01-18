import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddPageDetailsMutation } from "../../redux/features/allApis/pagesApi/pagesApi";

const ManagePages = () => {
  const { handleSubmit, control } = useForm();
  const [addPageDetails] = useAddPageDetailsMutation();

  const onSubmit = async (data) => {
    const pageDetails = {
      route: data?.route?.value,
      details: data?.details,
    };
    const result = await addPageDetails(pageDetails);
    if (result.error) {
      console.log(result.error);
    } else {
      console.log(result?.data);
    }
  };

  const routeOptions = [
    { value: "about-us", label: "About Us" },
    { value: "contact-us", label: "Contact Us" },
    { value: "terms-conditions", label: "Terms and Conditions" },
    { value: "rules-regulations", label: "Rules and Regulations" },
    { value: "responsible-gaming", label: "Responsible Gaming" },
    { value: "privacy-policy", label: "Privacy Policy" },
  ];

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className=" p-6 bg-gray-50 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
        Manage Page
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 w-80">
          <label
            htmlFor="route"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Select Route
          </label>
          <Controller
            name="route"
            control={control}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={routeOptions}
                placeholder="Select a route"
                className="text-gray-800"
              />
            )}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="details"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Details
          </label>
          <Controller
            name="details"
            control={control}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                modules={quillModules}
                // formats={quillFormats}
                className="bg-white rounded-md border border-gray-300 p-2"
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManagePages;
