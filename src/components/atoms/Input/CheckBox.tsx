import React, { ReactNode } from "react";

type CheckBoxProps = {
  label: ReactNode;
  setCheckBox: Function;
};

const CheckBox = (props: CheckBoxProps) => {
  return (
    <label className="checkbox-container text-grayish2 text-[9px]">
      {props.label}
      <input
        type="checkbox"
        onClick={(e: any) => props.setCheckBox(e.target?.checked)}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
