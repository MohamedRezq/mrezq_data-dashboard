import React from "react";
import { TiTick } from "react-icons/ti";

type AccordionTickItemProps = {
  text: string;
};

const AccordionTickItem = (props: AccordionTickItemProps) => {
  return (
    <div className="flex gap-x-1">
      <TiTick className="text-[#509051]" />
      <div className="text-grayish2 text-[9px] font-medium">{props.text}</div>
    </div>
  );
};

export default AccordionTickItem;
