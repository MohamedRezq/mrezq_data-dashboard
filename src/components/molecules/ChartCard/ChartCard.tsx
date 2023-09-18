import React, { ReactNode } from "react";
import Image from "next/image";
//-----> Components <-----------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
import Menu, { Item as MenuItem } from "rc-menu";
import { BarChart, ColChart, LineChart, PieChart } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type ChartCardProps = {
  title: string;
  dir?: string;
  subTitle: string;
  value: number;
  subValues: {
    subValue: number;
    subTitle: string;
  }[];
  chartType: string;
  chartSeries: any[];
  xData: any[];
};

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
      <BarChart
        key="bar-1"
        chartSeries={props.chartSeries}
        xData={props.xData}
        barHeight={2}
      />,
    ],
  ]);

  const menuItems = new Map([
    ["Info", "/assets/img/icons/edit.svg"],
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
          src={menuItems.get("Info") || ""}
          className="ml-4"
          alt="Info"
        />{" "}
        <>Info</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Edit") || ""}
          className="ml-4"
          alt="Info"
        />{" "}
        <>Edit</>
      </MenuItem>
      <MenuItem className="text-[10px] pl-4 gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Remove") || ""}
          className="ml-4"
          alt="Info"
        />{" "}
        <>Remove</>
      </MenuItem>
    </Menu>
  );

  return (
    <div
      className="rounded-2xl h-fit lg:h-[240px] text-[#2B2B2B] font-semibold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        {props.title}
        <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`h-full px-7 bg-wildsand py-1 flex flex-col gap-y-3 whitespace-nowrap md:flex${props.dir} py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="flex flex-col gap-y-1 text-[10px]">
          <div>{props.subTitle}</div>
          <div className="text-[16px] font-extrabold text-[#2C2C2C] dark:text-white opacity-90 mt-1 mb-5">
            $
            {Math.round(props.value)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          {props.subValues.map((item, i) => (
            <div
              key={`${item.subValue}-${i}`}
              className="flex items-center gap-x-4 ml-1 text-[10px] font-medium"
            >
              <div className="font-bold w-7">
                ${" "}
                {Math.round(item.subValue)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div className="text-grayish font-medium dark:text-white">
                {item?.subTitle?.length > 15
                  ? `${item.subTitle.slice(0, 15)}...`
                  : item.subTitle}
              </div>
            </div>
          ))}
        </div>
        {chartTypetoApexChart.get(props.chartType)}
      </div>
    </div>
  );
};

export default ChartCard;
