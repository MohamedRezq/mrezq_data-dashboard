import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BubbleChart = (props: any) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  const opt: any = {
    series: [
      {
        name: "Bubble1",
        data: [[new Date().getTime(), 43, 28]],
      },
      {
        name: "Bubble2",
        data: [[new Date().getTime(), 60, 28]],
      },
      {
        name: "Bubble3",
        data: [[new Date().getTime(), 45, 15]],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      grid: {
        show: true,
      },
      legend: {
        show: false,
      },
      yaxis: {
        enabled: false,
        show: false,
      },
      xaxis: {
        enabled: false,
        show: false,
      },
      title: {
        enabled: false,
        show: false,
      },
    },
  };
  return (
    <div id="chart" className="w-full mr-1">
      <ReactApexChart
        options={opt.options}
        series={opt.series}
        type="bubble"
        height={170}
      />
    </div>
  );
};

export default BubbleChart;
