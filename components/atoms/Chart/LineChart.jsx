import React from 'react'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const LineChart = (props) => {
  const opt = {
    series: props.chartSeries,
    options: {
      chart: {
        height: 200,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
      },

      xaxis: {
        categories: props.xData,
        type: 'category',
        labels: {
          show: true,
        },
      },
    },
  }
  return (
    <div id="chart" className="w-full mr-1">
      <ReactApexChart
        options={opt.options}
        series={opt.series}
        type="line"
        height={200}
      />
    </div>
  )
}

export default LineChart
