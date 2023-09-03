import React from "react";

type BarChartProps = {
  xData: any[];
  chartSeries: any[];
  barHeight: number;
};

const BarChart = (props: BarChartProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      {props.chartSeries.map((value, i) => (
        <div
          key={`${i}-bar-chart-${value}`}
          className="flex items-center gap-x-3"
        >
          <div
            className={`bg-alto w-2/3 flex items-start h-${props.barHeight} rounded-2xl`}
          >
            <div
              className={`bg-[#2ACB48] h-${props.barHeight} rounded-2xl`}
              style={{ width: `${value}%` }}
            ></div>
          </div>
          <div className=" text-xxs">{props.xData[i]}</div>
        </div>
      ))}
      <div className=" flex gap-x-8"></div>
    </div>
  );
};

export default BarChart;
