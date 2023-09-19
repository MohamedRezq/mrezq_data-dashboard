import React from "react";

type ActiveBtnProps = {
  text: string;
};

const ActiveBtn = (props: ActiveBtnProps) => {
  return (
    <button
      className={`bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-bold`}
    >
      {props.text}
    </button>
  );
};

export default ActiveBtn;
