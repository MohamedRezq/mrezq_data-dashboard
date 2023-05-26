import LineChart from "@/components/atoms/Chart/LineChart";
import PieChart from "@/components/atoms/Chart/PieChart";
import ColChart from "@/components/atoms/Chart/ColChart";

import React, { ReactNode } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ChartCardProps } from "@/types/ChartCardProps.interface";
import Menu, { Item as MenuItem } from "rc-menu";
import Dropdown from "rc-dropdown";
import { MdOutlineModeEdit } from "react-icons/md";
import Image from "next/image";

const ChartCard = (props: ChartCardProps) => {
  const chartTypetoApexChart = new Map([
    [
      "line",
      <LineChart
        key="line-1"
        chartSeries={props.chartSeries}
        xData={props.xData}
      />,
    ],
    [
      "pie",
      <PieChart
        key="pie-1"
        chartSeries={props.chartSeries}
        xData={props.xData}
      />,
    ],
    [
      "bar",
      <ColChart
        key="bar-1"
        chartSeries={props.chartSeries}
        xData={props.xData}
      />,
    ],
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
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Pro Mode") || ""}
          className="ml-4"
          alt="Pro Mode"
        />{" "}
        <>Pro Mode</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Edit") || ""}
          className="ml-4"
          alt="Pro Mode"
        />{" "}
        <>Edit</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft cursor-pointer">
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
      className="rounded-2xl md:h-48 text-[#2B2B2B] font-semibold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8 flex items-center text-xs rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        {props.title}
        <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div className="h-full px-7 bg-wildsand py-1 flex flex-col gap-y-3 whitespace-nowrap md:flex-row justify-between items-center rounded-br-2xl rounded-bl-2xl">
        <div className="flex flex-col gap-y-1 text-xs mr-6">
          <div>{props.subTitle}</div>
          <div className="text-[20px] font-extrabold text-[#2C2C2C] opacity-90 mt-1 mb-5">
            ${props.value}
          </div>
          {props.subValues.map((item, i) => (
            <div
              key={`${item.subValue}-${i}`}
              className="flex items-center gap-x-1 ml-1 text-[10px] font-medium"
            >
              <div className="font-bold">{item.subValue}</div>
              <div className="text-grayish font-medium">{item.subTitle}</div>
            </div>
          ))}
        </div>
        {chartTypetoApexChart.get(props.chartType)}
      </div>
    </div>
  );
};

export default ChartCard;
