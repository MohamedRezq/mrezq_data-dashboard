import DashboardHeader from "@/components/organisms/DashboardHeader/DashboardHeader";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import monthIcon from "../../public/assets/img/icons/month.svg";
import dropDown from "../../public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Dropdown from "rc-dropdown";
import { AiOutlineDown } from "react-icons/ai";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
interface DashboardHomeProps {
  date: string;
}

const menu = (
  <Menu className="px-4" onSelect={() => {}}>
    {[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].map((item, i) => (
      <MenuItem
        key={`${item}-${i}`}
        className="text-base hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer"
      >
        {item}
      </MenuItem>
    ))}
  </Menu>
);

const Home = (props: DashboardHomeProps) => {
  return (
    <main className="grid grid-cols-4 w-full m-auto min-h-screen p-3 h-full bg-white">
      <Sidebar />
      <div className="col-span-3 flex flex-col p-5">
        <DashboardHeader date={props.date} />
        <div className="flex w-36 my-5 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-2xl px-4 py-2 text-mineshaft pr-6">
          <Image src={monthIcon} alt="calendar" />
          <div className="w-20 text-center">Month</div>
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
            onVisibleChange={() => {}}
          >
            <Image src={dropDown} alt="Menu" className="w-3 cursor-pointer" />
          </Dropdown>
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
    },
  };
};

export default Home;
