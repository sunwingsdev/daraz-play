import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGetCategoriesQuery } from "../../redux/features/allApis/categoriesApi/categoriesApi";
import { useAddPromotionMutation } from "../../redux/features/allApis/promotionApi/promotionApi";
import { uploadImage } from "../../hooks/files";
import { useToasts } from "react-toast-notifications";
import { Button } from "../shared/ui/button";

const AddPromotionSection = () => {
  const { handleSubmit, control, register, reset } = useForm();
  const [addPromotion, { isLoading: addPromoLoading }] =
    useAddPromotionMutation();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [file, setFile] = useState(null);
  const { addToast } = useToasts();

  const promotionCategories = categories?.filter(
    (category) => category.categoryType === "promotion"
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = async (data) => {
    if (file) {
      const { filePath } = await uploadImage(file);
      const formattedData = {
        ...data,
        image: filePath,
        categories: data.categories.map((category) => category.value),
      };
      try {
        const { data } = await addPromotion(formattedData);
        if (data.insertedId) {
          addToast("Promotion added successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          reset();
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        addToast("Failed to add promotion", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      addToast("Failed to upload image", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="w-full lg:w-2/3 rounded-lg px-3 py-1.5">
      <h2 className="text-base lg:text-lg font-bold px-2 py-3 mb-4 text-center text-white bg-[#222222] rounded-md">
        Add Promotion Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            {...register("title", { required: "Title is required" })}
            className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            placeholder="Enter subtitle"
            {...register("subtitle", { required: "Subtitle is required" })}
            className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Categories
          </label>
          <Controller
            name="categories"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                options={
                  isLoading
                    ? [{ label: "Loading categories...", value: "loading" }]
                    : promotionCategories
                }
                isMulti
                placeholder="Select categories"
                className="text-gray-800"
                classNamePrefix="react-select"
                isDisabled={isLoading}
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Image Upload
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Details
          </label>
          <Controller
            name="details"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Add description"
                className="bg-white border border-gray-300 rounded"
                modules={{
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
                }}
              />
            )}
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-6 rounded whitespace-nowrap"
          >
            {addPromoLoading ? "..." : "Publish Now"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPromotionSection;
