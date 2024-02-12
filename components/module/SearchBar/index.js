import React from "react";
import { FaChevronUp, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex">
      <div className="relative">
        <input
          onChange=""
          type="text"
          placeholder="Search..."
          className="block text-xs  sm:w-[66vw] rounded-md px-4 h-full text-gray-900  placeholder:text-gray-400  focus:outline-none sm:text-sm sm:leading-6"
        />

        <button
          onClick=""
          className="hover:bg-gray-50 absolute right-4 top-2.5"
        >
          <FaSearch className="w-[1.5vw] h-[1.5vw] text-gray-400 " />
        </button>
      </div>

      <div className="flex items-center -pl-4 text-xs sm:text-base">
        <div className="h-11 w-[1px] ml-7 mr-2 bg-gray-300"></div>

        <button className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50  h-6 sm:h-11 w-[12vw] sm:w-[8vw] gap-2 text-gray-500">
          <FaChevronUp className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
          Sort
        </button>

        <button
          onClick=""
          className="rounded font-semibold flex justify-center items-center h-6 sm:h-11 w-[12vw] sm:w-[8vw] ml-2 text-white bg-[#5E50A1] hover:bg-[#5E50A1]/90 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
