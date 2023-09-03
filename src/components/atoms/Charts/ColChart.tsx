import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColChart = (props: any) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//

  const data: any = {
    // series: props.chartSeries,

    options: {
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
      legend: {
        fontFamily: "Quicksand",
        color: "#2C2C2C",
        offsetY: 0,
        labels: {
          colors: ["#A99AFF", "#FF4E00"],
          useSeriesColors: false,
        },
        margin: 0,
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      chart: {
        type: "bar",
        height: 200,
        width: "100%",
      },
      colors: ["#A99AFF", "#FF4E00"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10px",
          endingShape: "rounded",
          borderRadius: 3,
          colors: {
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: props.xData,
        labels: {
          show: true,
          rotate: 0,
          style: {
            colors: theme === "dark" && Array(props.xData.length).fill("white"),
            fontSize: "8px",
            fontWeight: 600,
          },
        },
      },
      tooltip: {
        theme,
      },
      yaxis: {
        labels: {
          formatter: (value: any) => {
            return `$ ${Math.round(value || 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          },
          style: {
            colors: theme === "dark" && ["white"],
            fontFamily: "Quicksand",
          },
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div id="chart" className="w-full mr-5 dark:text-white">
      <ReactApexChart
        options={data.options}
        series={props.chartSeries}
        type="bar"
        height={170}
        width="100%"
      />
    </div>
  );
};

export default ColChart;
