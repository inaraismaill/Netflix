import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Question = ({ title, text, id, selectedId, open }) => {
  return (
    <div
      className="text-white font-medium my-5 md:text-[24px] text-[18px]"
      onClick={() => open(id)}
    >
      <div   className="bg-[#2d2d2d] hover:bg-[#363636] cursor-pointer p-[24px] flex items-center justify-between w-full text-white">
        {title}
        <button className="text-[20px] md:text-[30px]">
          {selectedId==id?  <IoMdClose/>:<FaPlus />}  
        </button>
      </div>
      <div
        className={`p-[24px] mt-1 bg-[#2d2d2d] ${
          selectedId !== id ? `hidden` : `block`
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Question;
