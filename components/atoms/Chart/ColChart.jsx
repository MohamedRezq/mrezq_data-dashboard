import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColChart = (props) => {
  const data = {
    series: props.chartSeries,
    
    options: {
      chart: {
        type: "bar",
        height: 200,
        width: "100%",
      },
      colors: ["#A99AFF", "#FF4E00"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
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
            colors: [],
            fontSize: "8px",
            fontFamily: "Quicksand",
            color: "#2C2C2C",
            fontWeight: 600
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (value) => { return `$ ${value}` },
        }
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div id="chart" className="w-full mr-5">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default ColChart;
