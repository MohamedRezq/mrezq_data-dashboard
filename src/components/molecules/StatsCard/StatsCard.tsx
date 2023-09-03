import React from "react";
import Image from "next/image";
//-----> Components <-----------------------------------------//
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { BsThreeDots } from "react-icons/bs";
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
  const valueTypesToStyles = new Map([
    ["stats", ""],
    ["value", "text-emperor"],
  ]);
  const subValueStatesToStyles = new Map([
    ["positive", "text-chateaugreen"],
    ["negative", "text-sunsetorange"],
    ["normal", "text-grayish"],
  ]);

  const menuItems = new Map([
    ["Pro Mode", "/assets/img/icons/edit.svg"],
    ["Edit", "/assets/img/icons/edit.svg"],
    ["Remove", "/assets/img/icons/delete.svg"],
  ]);
  const menu = (
    <Menu
      className="px-6"
      onSelect={(e) => {
        //setSelectedMonth(e.key);
      }}
    >
      <hr className="absolute mt-[1px] top-0 left-5 w-5 border rounded-lg border-[#707070] border-opacity-50" />
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Pro Mode") || ""}
          className="ml-4"
          alt="Pro Mode"
        />{" "}
        <>Pro Mode</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Edit") || ""}
          className="ml-4"
          alt="Pro Mode"
        />{" "}
        <>Edit</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Remove") || ""}
          className="ml-4"
          alt="Pro Mode"
        />{" "}
        <>Remove</>
      </MenuItem>
    </Menu>
  );

  return (
    <div
      style={{ boxShadow: "0px 3px 5px #00000029" }}
      className="rounded-2xl w-[285px] lg:w-full h-full flex bg-wildsand p-1 text-mineshaft dark:bg-darkMineShaft dark:text-white"
    >
      <div className="w-1/2 flex flex-col items-start justify-center my-auto h-20 gap-y-1 pl-4">
        <div className="text-[10px] font-bold">{props.title}</div>
        <div
          className={`text-3xl ${valueTypesToStyles.get(
            props.valueType
          )} font-bold opacity-80 dark:text-white`}
        >
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
          placement="bottomRight"
          trigger={["click"]}
          overlay={menu}
          animation="slide-up"
        >
          <BsThreeDots className="absolute right-3 top-2 text-dovegray cursor-pointer text-sm" />
        </Dropdown>
      </div>
    </div>
  );
};

export default StatsCard;
