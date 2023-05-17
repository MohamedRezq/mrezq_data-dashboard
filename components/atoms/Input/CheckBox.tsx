import React from "react";

const CheckBox = (props: any) => {
  return (
    <label className="checkbox-container text-grayish2 text-[9px]">
      {props.label}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
