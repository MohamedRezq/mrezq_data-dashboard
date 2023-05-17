import React from "react";
import { BasicInputProps } from "@/types";
import { setUserInput } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const BasicInput = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-4 w-72">
      <label
        className="pl-7 pb-2 text-[10px] text-dustygray font-medium"
        htmlFor={`${props.id}`}
      >
        {props.label}
      </label>
      <input
        id={`${props.id}`}
        type={`${props.type}`}
        style={{font: "normal normal bold 14px/18px Quicksand"}}
        className="w-full px-5 py-3 text-sm rounded-2xl focus:outline focus:outline-seagreen font-bold bg-wildsand text-emperor text-opacity-95"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default BasicInput;
