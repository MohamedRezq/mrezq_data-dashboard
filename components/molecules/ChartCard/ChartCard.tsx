import LineChart from "@/components/atoms/Chart/LineChart";
import PieChart from "@/components/atoms/Chart/PieChart";
import ColChart from "@/components/atoms/Chart/ColChart";

import React, { ReactNode } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ChartCardProps } from "@/types/ChartCardProps.interface";

const ChartCard = (props: ChartCardProps) => {
  const chartTypetoApexChart = new Map([
    ["line", <LineChart chartSeries={props.chartSeries} xData={props.xData} />],
    ["pie", <PieChart chartSeries={props.chartSeries} xData={props.xData} />],
    ["bar", <ColChart chartSeries={props.chartSeries} xData={props.xData} />],
  ]);
  return (
    <div className="rounded-2xl md:h-48 text-mineshaft w-full">
      <div className=" bg-gallery h-8 flex items-center text-xs rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        {props.title}
        <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
      </div>
      <div className="h-full px-7 bg-wildsand py-1 flex flex-col gap-y-3 md:flex-row justify-between items-center rounded-br-2xl rounded-bl-2xl">
        <div className="flex flex-col gap-y-1 text-xs mr-6">
          <div>{props.subTitle}</div>
          <div className="text-3xl opacity-80 mb-5">${props.value}</div>
          {props.subValues.map((item, i) => (
            <div
              key={`${item.subValue}-${i}`}
              className="flex items-center gap-x-1 ml-1"
            >
              <div className="">{item.subValue}</div>
              <div className="text-grayish">{item.subTitle}</div>
            </div>
          ))}
        </div>
        {chartTypetoApexChart.get(props.chartType)}
      </div>
    </div>
  );
};

export default ChartCard;
