import { FaTrash } from "react-icons/fa";
import logo from "../../assets/logo.png";

const LogoSelection = () => {
  //   const { data: homeControls, refetch } = useGetHomeControlsQuery();
  //   const [updateSelection] = useUpdateSelectionMutation();
  //   const { addToast } = useToasts();

  //fake data
  const homeControls = [
    {
      _id: "1",
      category: "logo",
      image: logo,
      isSelected: true,
    },
    {
      _id: "2",
      category: "logo",
      image: logo,
      isSelected: false,
    },
    {
      _id: "3",
      category: "logo",
      image: logo,
      isSelected: true,
    },
    {
      _id: "4",
      category: "logo",
      image: logo,
      isSelected: false,
    },
    {
      _id: "5",
      category: "background",
      image: logo,
      isSelected: false,
    },
  ];

  const logoHomeControls = homeControls?.filter(
    (control) => control.category === "logo"
  );

  //   const handleCheckboxChange = async (id) => {
  //     try {
  //       const result = await updateSelection(id);
  //       if (result.data) {
  //         addToast(result.data.message, {
  //           appearance: "success",
  //           autoDismiss: true,
  //         });
  //       }
  //       refetch();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
      {logoHomeControls?.map((control) => (
        <div
          className="relative border border-[#14805e] p-2 rounded-md"
          key={control._id}
        >
          <img
            className="w-full h-full rounded-md"
            // src={`${import.meta.env.VITE_BASE_API_URL}${control.image}`}
            src={control.image}
            alt=""
          />
          <input
            checked={control?.isSelected === true}
            className="absolute top-0 left-0 size-6"
            type="checkbox"
            name=""
            // onChange={() => handleCheckboxChange(control._id)}
            id={control?._id}
          />
          <div className="absolute -top-4 -right-4 p-2 group rounded-full hover:bg-red-600 duration-200">
            <FaTrash className="text-2xl text-red-500 group-hover:text-white duration-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoSelection;
