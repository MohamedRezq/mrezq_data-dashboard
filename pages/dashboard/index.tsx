import { GetServerSideProps } from "next";
import { useState } from "react";
//---------------------Components---------------------------------------------//
import StatsCard from "@/components/molecules/StatsCard/StatsCard";
import ChartCard from "@/components/molecules/ChartCard/ChartCard";
import monthsData from "../../public/assets/json/months.json";
import chartsData from "../../public/assets/json/charts.json";
import { StatsCardProps } from "@/types/StatsCardProps.interface";
import { ChartCardProps } from "@/types/ChartCardProps.interface";
import DashboardTemplate from "../../components/templates/DashboardTemplate";
import { quickbooksSyncData } from "@/actions/quickbooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface DashboardHomeProps {
  date: string;
  dashboardData: any[];
  months: string[];
  charts: ChartCardProps[];
}

const Home = (props: DashboardHomeProps) => {
  const currentDashboardPeriod = useSelector(
    (state: RootState) => state.dashboardPeriod.currentPeriod
  );
  // 0 --> Last Month
  // 1 --> Last 3 Months
  // 2 --> Last 6 Months
  // 3 --> Last Year
  // 4 --> Last 5 Years
  return (
    <DashboardTemplate date={props.date} months={props.months}>
      <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {props?.dashboardData[currentDashboardPeriod].statsCards.map(
            (item: any, i: number) => (
              <StatsCard
                key={`${item.title}-${item.value}-${i}`}
                title={item.title}
                value={
                  i === 2 ? `$${Math.round(item.value / 1000)}k` : item.value
                }
                valueType={item.valueType}
                subValues={item.subValues}
              />
            )
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3">
          {props?.dashboardData[currentDashboardPeriod].chartsData.map(
            (item, i) => (
              <div
                key={`${item.title}-${item.value}-${i}`}
                className={`${
                  i % 2 === 0 ? "col-span-2" : "col-span-1"
                } mb-10 w-full`}
              >
                <ChartCard
                  title={item.title}
                  subTitle={item.subTitle}
                  value={item.value}
                  subValues={item.subValues}
                  chartType={item.chartType}
                  chartSeries={item.chartSeries}
                  xData={item.xData}
                />
              </div>
            )
          )}
        </div>
      </>
    </DashboardTemplate>
  );
};

export const getServerSideProps: GetServerSideProps<{
  date: string;
}> = async (context) => {
  const date = new Date();
  const response = await quickbooksSyncData();
  return {
    props: {
      date: `${date.getDate()}${" "}${date.toLocaleString("en-US", {
        month: "short",
      })}${" "}${date.getFullYear()}, ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`,
      dashboardData: response.status === 200 ? response.data : [],
      months: monthsData,
      charts: chartsData,
    },
  };
};

export default Home;
