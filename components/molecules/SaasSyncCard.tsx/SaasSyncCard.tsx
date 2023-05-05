import PageSpinner from "@/components/atoms/Loader/PageSpinner";
import { SaasSyncCardProps } from "@/types/SaasSyncCardProps.interface";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SaasSyncCard = (props: SaasSyncCardProps) => {
  return (
    <div className="px-10 py-3 rounded-xl bg-alto flex items-center justify-between text-lg font-medium w-full mx-10 sm:mx-0 sm:w-96">
      <div className="flex items-center">
        <div
          className={`w-7 rounded-md h-7 p-1 flex justify-center items-center bg-hippiegreen`}
        >
          <img src={props.logo} alt="Logo" className="" />
        </div>
        <div className="text-emperor text-md ml-3">{props.title}</div>
      </div>
      <div className="flex items-center gap-x-3">
        <PageSpinner />
        <AiOutlineClose className="text-emperor text-opacity-80 hover:text-opacity-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default SaasSyncCard;
