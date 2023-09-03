import React, { ReactNode } from "react";

type TooltipProps = {
  element: ReactNode;
  text: string;
  additionalClassNames?: string;
};
const Tooltip = (props: TooltipProps) => {
  return (
    <div className={`${props.additionalClassNames}`}>
      <div className="group relative w-max">
        {props.element}
        <span className="pointer-events-none dark:bg-bonjour font-bold dark:text-darkMineShaft bg-mineshaft bg-opacity-80 dark:bg-opacity-90 px-2 rounded-md py-1 text-white text-[8px] absolute -top-6 left-2 w-max opacity-0 transition-opacity group-hover:opacity-100">
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
