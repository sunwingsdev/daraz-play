import { IoCloseOutline } from "react-icons/io5";

const AccoundModal = ({ id, title, children, buttonText }) => {
  return (
    <dialog id={id} className="modal bg-black rounded-2xl scrollbar-hide">
      <div className="pb-8 modal-box relative">
        <h3 className="py-3 font-bold text-lg text-center text-white bg-[#333]">
          {title}
        </h3>
        <img
          className="py-7 w-32 md:w-44 m-auto"
          src="https://img.d4040p.com/dp/h5/assets/images/member-logo.png?v=1735034317574"
          alt=""
        />
        {children}
        <div className="px-6">
          <button className="p-1.5 w-full text-lg text-[#aaa9a9] hover:text-white bg-[#363636] hover:bg-red-600 duration-300 rounded-md">
            {buttonText}
          </button>
        </div>
        <p className="mt-2 px-4 text-xs text-center text-[#aaa9a9]">
          Do not have an account?
          <span className="text-red-600 font-semibold"> Login</span>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop absolute top-3 right-3">
        <button className="text-[#8f8e8e]">
          <IoCloseOutline size={26} />
        </button>
      </form>
    </dialog>
  );
};

export default AccoundModal;