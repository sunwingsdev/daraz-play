import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import OppsModal from "../shared/modal/OppsModal";
import { Button } from "../shared/ui/button";
import FavoriteUploadForm from "./FavoriteUploadForm";

const FavoriteUploadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="bg-[#222222] flex flex-row items-start justify-between w-full p-4 mb-2">
          <p className="text-2xl text-white font-bold">Upload Favorite Image</p>
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded whitespace-nowrap"
            onClick={() => setIsModalOpen(true)}
          >
            <IoAdd /> Add
          </Button>
        </div>
      </div>
      <OppsModal
        title={"Uplaod Favorite Image"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <FavoriteUploadForm closeModal={() => setIsModalOpen(false)} />
      </OppsModal>
    </>
  );
};

export default FavoriteUploadSection;
