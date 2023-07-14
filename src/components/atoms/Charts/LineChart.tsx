import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = (props: any) => {
  const opt: any = {
    series: props.chartSeries,
    options: {
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          formatter: (value: any) => {
            return `$ ${value}`;
          },
          fontFamily: "Quicksand",
        },
        fontFamily: "Quicksand",
      },
      legend: {
        fontFamily: "Quicksand",
        color: "#2C2C2C",
        labels: {
          colors: ["#509051", "#83C181", "#BAB9CC"],
          useSeriesColors: false,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      colors: ["#578182", "#509051", "#A8ACE2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "straight",
        lineCap: "butt",
        colors: undefined,
        width: 1,
        dashArray: 0,
      },
      xaxis: {
        categories: props.xData,
        type: "category",
        labels: {
          show: true,
        },
        fontFamily: "Quicksand",
      },
    },
  };
  return (
    <div id="chart" className="w-full mr-1">
      <ReactApexChart
        options={opt.options}
        series={opt.series}
        type="line"
        height={200}
      />
    </div>
  );
};

export default LineChart;
