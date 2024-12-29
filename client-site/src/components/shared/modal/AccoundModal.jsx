import { IoCloseOutline } from "react-icons/io5";

const AccoundModal = ({ id, title, children, buttonText }) => {
  return (
    <dialog id={id} className="modal bg-[#171818] rounded-2xl">
      <div className="pb-8 modal-box relative">
        <h3 className="py-3 font-bold text-lg text-center text-white bg-[#1a1b22]">
          {title}
        </h3>
        <img
          className="py-8 w-24 sm:w-28 md:w-52 m-auto"
          src="https://img.m156b.com/mb/h5/assets/images/dark/logo.png?v=1727771384153"
          alt=""
        />
        {children}
        <div className="px-4">
          <button className="p-2 w-full text-lg text-[#aaa9a9] bg-[#5a5959] hover:bg-yellow-300 duration-300 hover:text-black rounded-md">
            {buttonText}
          </button>
        </div>
        <p className="mt-2 px-4 text-xs text-center text-[#aaa9a9]">
          একটি একাউন্ট আছে কি না?
          <span className="text-yellow-300"> সাইন আপ</span>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop absolute top-3 right-3">
        <button className="text-[#5a5959]">
          <IoCloseOutline size={26} />
        </button>
      </form>
    </dialog>
  );
};

export default AccoundModal;
