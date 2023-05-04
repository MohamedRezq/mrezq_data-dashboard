import React from "react";
import { BiSearch } from "react-icons/bi";

interface SearchInputProps {
  onChange: (searchText: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div className="flex items-center relative">
      <BiSearch className="text-emperor text-xl absolute left-3" />
      <input
        id="search"
        type="text"
        placeholder="Find Your Saas"
        className="min-w-lg pl-12 py-2 outline-none text-lg bg-transparent border-b-2 border-b-emperor focus:border-b-hippiegreen text-emperor"
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
