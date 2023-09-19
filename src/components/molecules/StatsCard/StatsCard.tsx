import React from "react";
import Image from "next/image";
//-----> Components <-----------------------------------------//
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { BsThreeDots } from "react-icons/bs";
import { ChartMenu } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type StatsCardProps = {
  title: string;
  value: number;
  valueType: string;
  subValues: {
    subValue: number;
    subValueState: string;
    subTitle: string;
  }[];
};

const StatsCard = (props: StatsCardProps) => {
  // const valueTypesToStyles = new Map([
  //   ["stats", ""],
  //   ["value", "text-emperor"],
  // ]);
  const subValueStatesToStyles = new Map([
    ["positive", "text-chateaugreen"],
    ["negative", "text-sunsetorange"],
    ["normal", "text-grayish"],
  ]);

  return (
    <div
      style={{ boxShadow: "0px 3px 5px #00000029" }}
      className="rounded-2xl h-[112px] w-[285px] flex bg-wildsand p-1 text-emperor dark:bg-darkMineShaft dark:text-white"
    >
      <div className="w-1/2 flex flex-col items-start justify-center my-auto h-20 gap-y-1 pl-4">
        <div className="text-[10px] font-bold">{props.title}</div>
        <div className={`text-3xl font-bold dark:text-white`}>
          {props.value}
        </div>
      </div>
      <div className="bg-white dark:bg-midMineShaft font-bold relative flex flex-col gap-y-1 pl-3 items-start justify-center w-1/2 rounded-tr-2xl rounded-br-2xl text-[11px]">
        {props.subValues.map((item, i) => (
          <div
            key={`${item.subTitle}-${item.subValue}-${i}`}
            className="flex items-center gap-x-2"
          >
            <div
              className={` w-5 ${subValueStatesToStyles.get(
                item.subValueState
              )} font-bold text-[11px]`}
            >
              {item.subTitle == "Per user spend"
                ? `$${Math.round(item.subValue)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                : Math.round(item.subValue)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div>{item.subTitle}</div>
          </div>
        ))}
        <Dropdown
          trigger={["click"]}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomLeft"
          overlayClassName="pr-10"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
    </div>
  );
};

export default StatsCard;
