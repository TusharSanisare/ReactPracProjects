import { MdOutlineAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ handleOnAddBtn, handleOnInput }) => {
  return (
    <div className="my-2 flex items-center justify-center gap-1 w-[350px] py-2 m-auto ">
      <div className="flex  justify-evenly items-centre border rounded-md w-[300px] border-white text-center">
        <IoSearch className=" text-white text-xl m-2 " />
        <input
          onChange={handleOnInput}
          className="bg-transparent outline-none text-white w-[250px]"
          type="text"
          placeholder="Search Contact"
        />
      </div>
      <MdOutlineAdd
        onClick={handleOnAddBtn}
        className="text-white border border-white-sm rounded-md text-4xl p-1 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
