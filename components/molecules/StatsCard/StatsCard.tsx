import { StatsCardProps } from "@/types/StatsCardProps.interface";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const StatsCard = (props: StatsCardProps) => {
  const valueTypesToStyles = new Map([
    ["stats", ""],
    ["value", "text-emperor"],
  ]);
  const subValueStatesToStyles = new Map([
    ["positive", "text-seagreen"],
    ["negative", "text-sunsetorange"],
    ["normal", "text-grayish"],
  ]);
  return (
    <div className="rounded-2xl flex bg-wildsand p-1">
      <div className="w-1/2 flex flex-col items-start justify-center h-20 gap-y-1 pl-4">
        <div className=" text-xxs">{props.title}</div>
        <div className={`text-3xl ${valueTypesToStyles.get(props.valueType)}`}>
          {props.value}
        </div>
      </div>
      <div className="bg-white relative flex flex-col gap-y-1 pl-4 items-start justify-center w-1/2 rounded-tr-2xl rounded-br-2xl text-xxs">
        {props.subValues.map((item, i) => (
          <div
            key={`${item.subTitle}-${item.subValue}-${i}`}
            className="flex items-center gap-x-1"
          >
            <div className={`${subValueStatesToStyles.get(item.subValueState)} font-medium text-xxs`}>
              {item.subValue}
            </div>
            <div>{item.subTitle}</div>
          </div>
        ))}
        <BsThreeDots className="absolute right-3 top-2 text-dovegray cursor-pointer text-sm" />
      </div>
    </div>
  );
};

export default StatsCard;
