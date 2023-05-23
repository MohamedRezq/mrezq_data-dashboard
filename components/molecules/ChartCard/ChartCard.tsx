import LineChart from "@/components/atoms/Chart/LineChart";
import PieChart from "@/components/atoms/Chart/PieChart";
import ColChart from "@/components/atoms/Chart/ColChart";

import React, { ReactNode } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ChartCardProps } from "@/types/ChartCardProps.interface";

const ChartCard = (props: ChartCardProps) => {
  const chartTypetoApexChart = new Map([
    ["line", <LineChart key="line-1" chartSeries={props.chartSeries} xData={props.xData} />],
    ["pie", <PieChart key="pie-1" chartSeries={props.chartSeries} xData={props.xData} />],
    ["bar", <ColChart key="bar-1" chartSeries={props.chartSeries} xData={props.xData} />],
  ]);
  return (
    <div className="rounded-2xl md:h-48 text-[#2B2B2B] font-semibold w-full">
      <div className=" bg-gallery h-8 flex items-center text-xs rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        {props.title}
        <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
      </div>
      <div className="h-full px-7 bg-wildsand py-1 flex flex-col gap-y-3 whitespace-nowrap md:flex-row justify-between items-center rounded-br-2xl rounded-bl-2xl">
        <div className="flex flex-col gap-y-1 text-xs mr-6">
          <div>{props.subTitle}</div>
          <div className="text-[20px] font-bold opacity-80 mt-1 mb-5">${props.value}</div>
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
