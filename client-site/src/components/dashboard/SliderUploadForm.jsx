import { useState } from "react";

const SliderUploadForm = ({ closeModal }) => {
  //   const [uploadImage] = useUploadImageMutation();
  //   const [addHomeControl] = useAddHomeControlMutation();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  //   const { addToast } = useToasts();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleRemove = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      try {
        setLoading(true);
        const { data } = await uploadImage(formData);
        if (data.filePath) {
          const logoInfo = {
            page: "home",
            section: "banner",
            category: "slider",
            image: data?.filePath,
          };
          const result = await addHomeControl(logoInfo);
          if (result.data.insertedId) {
            addToast("Slider uploaded successfully", {
              appearance: "success",
              autoDismiss: true,
            });
            setImagePreview(null);
            setImageFile(null);
            setLoading(false);
            closeModal();
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setLoading(false);
        addToast("Failed to upload logo", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      setLoading(false);
      addToast("Failed to upload image", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return <div></div>;
};

export default SliderUploadForm;
