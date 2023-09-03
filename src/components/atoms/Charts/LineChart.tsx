import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = (props: any) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//

  const opt: any = {
    series: props.chartSeries,
    options: {
      tooltip: {
        theme,
      },
      noData: {
        text: "No Data",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#A99AFF",
          fontSize: "14px",
          fontFamily: "Quicksand",
        },
      },
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
          style: {
            colors: theme === "dark" && ["white"],
            fontFamily: "Quicksand",
          },
        },
      },
      legend: {
        fontFamily: "Quicksand",
        color: "#2C2C2C",
        offsetY: 0,
        labels: {
          colors: ["#509051", "#83C181", "#BAB9CC"],
          useSeriesColors: false,
        },
        marginTop: "10px",
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
          style: {
            colors: theme === "dark" && Array(props.xData.length).fill("white"),
            fontFamily: "Quicksand",
            fontSize: "5pt",
          },
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
        height={170}
      />
    </div>
  );
};

export default LineChart;
