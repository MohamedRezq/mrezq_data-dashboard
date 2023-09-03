import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = (props: any) => {
  const data: any = {
    series: props.chartSeries,
    options: {
      chart: {
        type: "donut",
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      labels: props.xData,
      colors: ["#40AC54", "#34DD54", "#82F297", "#84BF8F"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 2600,
          options: {
            chart: {
              width: 150,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart" className="w-full mr-1 mt-5">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
        height={150}
      />
    </div>
  );
};

export default PieChart;
