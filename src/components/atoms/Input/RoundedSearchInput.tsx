import React from "react";
//-----> Redux <----------------------------------------------//
import { useDispatch } from "react-redux";
import { searchByText } from "@/src/store/slices/saas";
//-----> Components <---------------------------------------------//
import { BiSearch } from "react-icons/bi";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const RoundedSearchInput = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center relative">
      <BiSearch className="text-[#848484] text-sm w-4 h-4 absolute left-3" />
      <input
        id="search"
        type="text"
        placeholder="Find Your Saas"
        className=" w-60 bg-white dark:placeholder:opacity-75 pl-12 py-2 rounded-2xl outline-none text-sm bg-transparent border-b border-b-[#848484] border-opacity-30 placeholder:text-emperor placeholder:opacity-40 text-opacity-90 text-emperor"
        onChange={(e) => {
          dispatch(searchByText(e.target.value));
        }}
      />
    </div>
  );
};

export default RoundedSearchInput;
