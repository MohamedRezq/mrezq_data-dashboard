import React from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ColChart = (props) => {
  const data = {
    series: props.chartSeries,
    options: {
      chart: {
        type: 'bar',
        height: 200,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: props.xData,
      },
      fill: {
        opacity: 1,
      },
    },
  }
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={200}
      />
    </div>
  )
}

export default ColChart

/*



{
    "title": "License Summary",
    "subTitle": "Total Wasted Value",
    "value": 2478,
    "subValues": [
      {
        "subValue": "110",
        "subTitle": "Total Licenses"
      },
      {
        "subValue": "80",
        "subTitle": "Used Licenses"
      },
      {
        "subValue": "30",
        "subTitle": "Unused Licenses"
      },
      {
        "subValue": "$1200",
        "subTitle": "G Suite"
      }
    ],
    "chartType": "bar",
    "chartSeries": [30, 25, 25, 10],
    "xData": []
  }

  
*/