import { GetServerSideProps } from "next";
import React, { useState } from "react";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import StatsCard from "@/components/molecules/StatsCard/StatsCard";
import ChartCard from "@/components/molecules/ChartCard/ChartCard";
import statsData from "../../public/assets/json/stats.json";
import monthsData from "../../public/assets/json/months.json";
import chartsData from "../../public/assets/json/charts.json";
import { StatsCardProps } from "@/types/StatsCardProps.interface";
import { ChartCardProps } from "@/types/ChartCardProps.interface";
import DashboardTemplate from "../../components/templates/DashboardTemplate";

interface DashboardHomeProps {
  date: string;
  statsData: StatsCardProps[];
  months: string[];
  charts: ChartCardProps[];
}

const Home = (props: DashboardHomeProps) => {
  const menu = (
    <Menu
      className="px-6"
      onSelect={(e) => {
        setSelectedMonth(e.key);
      }}
    >
      {props.months.map((item, i) => (
        <MenuItem
          key={`${item}`}
          className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  const [selectedMonth, setSelectedMonth] = useState("Month");
  return (
    <DashboardTemplate date={props.date} months={props.months}>
      <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {props.statsData.map((item, i) => (
            <StatsCard
              key={`${item.title}-${item.value}-${i}`}
              title={item.title}
              value={item.value}
              valueType={item.valueType}
              subValues={item.subValues}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3">
          {props.charts.map((item, i) => (
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
          ))}
        </div>
      </>
    </DashboardTemplate>
  );
};

export const getServerSideProps: GetServerSideProps<{
  date: string;
}> = async (context) => {
  const date = new Date();
  return {
    props: {
      date: `${date.getDate()}${" "}${date.toLocaleString("en-US", {
        month: "short",
      })}${" "}${date.getFullYear()}, ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`,
      statsData,
      months: monthsData,
      charts: chartsData,
    },
  };
};

export default Home;
