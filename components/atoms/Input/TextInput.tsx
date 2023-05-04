import React from "react";
import validateInput from "../../../helpers/validate";

interface BasicInputProps {
  id: string;
  type: string;
  label: string;
}

const BasicInput = (props: BasicInputProps) => {
  return (
    <div>
      <label className="pl-12 pb-2 text-xs text-silverchalice" htmlFor={`${props.id}`}>
        {props.label}
      </label>
      <input
        id={`${props.id}`}
        type={`${props.type}`}
        className="w-full px-6 py-3 rounded-3xl focus:outline-2 focus:outline-hippiegreen bg-alto text-emperor"
        onChange={(e) => {
          validateInput({ type: props.type, input: e.target.value });
        }}
      />
    </div>
  );
};

export default BasicInput;
