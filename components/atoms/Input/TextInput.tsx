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
        htmlFor={`${props.id}`}
      >
        {props.label}
      </label>
      <input
        id={`${props.id}`}
        type={`${props.type}`}
        className="w-full px-8 py-3 rounded-3xl focus:outline-2 focus:outline-hippiegreen bg-alto text-emperor"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default BasicInput;
