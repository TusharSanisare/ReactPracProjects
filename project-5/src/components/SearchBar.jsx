import { IoMdAddCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className=" flex items-center justify-center gap-2 w-96 p-2 m-auto">
      <div className="flex  justify-center items-center border rounded-md border-white text-center">
        <IoSearch className="text-white text-xl m-2 " />
        <input
          className="bg-transparent outline-none text-white"
          type="text"
          placeholder="Search Contact"
        />
      </div>
      <IoMdAddCircle className="text-white text-4xl" />
    </div>
  );
};

export default SearchBar;
