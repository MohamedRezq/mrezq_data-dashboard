import React from "react";
import { BasicInputProps } from "@/types";
import { setUserInput } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const BasicInput = (props: any) => {
  const dispatch = useDispatch();
  return (
    <div>
      <label
        className="pl-12 pb-2 text-xs text-silverchalice"
        style={{font: "normal normal medium 10px/13px Quicksand"}}
        htmlFor={`${props.id}`}
      >
        {props.label}
      </label>
      <input
        id={`${props.id}`}
        type={`${props.type}`}
        style={{font: "normal normal bold 14px/18px Quicksand"}}
        className="w-full px-8 py-3 rounded-2xl focus:outline focus:outline-hippiegreen bg-wildsand text-emperor"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default BasicInput;
