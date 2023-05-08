import DashboardHeader from "@/components/organisms/DashboardHeader/DashboardHeader";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import monthIcon from "../../public/assets/img/icons/month.svg";
import dropDown from "../../public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import StatsCard from "@/components/molecules/StatsCard/StatsCard";
import ChartCard from "@/components/molecules/ChartCard/ChartCard";
import statsData from "../../public/assets/json/stats.json";
import monthsData from "../../public/assets/json/months.json";
import chartsData from "../../public/assets/json/charts.json";
import { StatsCardProps } from "@/types/StatsCardProps.interface";
import { ChartCardProps } from "@/types/ChartCardProps.interface";
//import { AiOutlineMenu } from "react-icons/ai";
//import { slide as MobileMenu } from "react-burger-menu";

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
          className="text-base hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  const [selectedMonth, setSelectedMonth] = useState("Month");
  return (
    <main className="grid grid-cols-4 w-full m-auto min-h-screen p-3 h-full bg-white">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="col-span-4 lg:col-span-3 flex flex-col p-5 gap-y-5 max-h-[95vh]">
        <DashboardHeader date={props.date} />
        <div className="flex w-40 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-2xl px-5 py-2 text-mineshaft pr-6">
          <Image src={monthIcon} alt="calendar" />
          <div className="w-20 text-center mx-2">{selectedMonth}</div>
          <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
            <Image src={dropDown} alt="Menu" className="w-3 cursor-pointer" />
          </Dropdown>
        </div>
        <div className="h-full w-full flex flex-col gap-y-4 pr-4 py-3 lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-emerald lg:scrollbar-track-alto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                className={`${(i % 2 === 0) ? "col-span-2" : "col-span-1"} mb-10 w-full`}
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
        </div>
      </div>
    </main>
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
