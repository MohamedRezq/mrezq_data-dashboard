import React from "react";

const CheckBox = (props: any) => {
  return (
    <label className="checkbox-container text-dovegray text-sm">
      {props.label}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
