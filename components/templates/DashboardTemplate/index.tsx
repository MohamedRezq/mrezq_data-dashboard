import DashboardHeader from "@/components/organisms/DashboardHeader/DashboardHeader";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import Image from "next/image";
import React, { PropsWithChildren, ReactElement, useState } from "react";
import monthIcon from "../../../public/assets/img/icons/month.svg";
import dropDown from "../../../public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";

type DashboardTemplateProps = {
  children: ReactElement<any, any>;
  date: string;
  months: string[];
};

const DashboardTemplate = (props: DashboardTemplateProps) => {
  const menu = (
    <Menu
      className=" p-5"
      onSelect={(e) => {
        setSelectedMonth(e.key);
      }}
    >
      {props.months.map((item, i) => (
        <MenuItem
          key={`${item}`}
          className=" text-xs font-semibold hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  const [selectedMonth, setSelectedMonth] = useState("Month");
  return (
    <main className="w-full flex m-auto p-3 h-[100vh] bg-[#F8F8F8] font-medium">
      <div className="hidden xl:block w-64 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-y-5 w-full md:w-[925px] mx-auto">
        <DashboardHeader date={props.date} />
        <div className="flex w-40 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft pr-6">
          <Image src={monthIcon} alt="calendar" />
          <div className="text-center font-medium text-sm w-36">{selectedMonth}</div>
          <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
            <Image src={dropDown} alt="Menu" className="w-[10px] h-[6px] cursor-pointer" />
          </Dropdown>
        </div>
        <div className="h-full w-full flex flex-col md:pr-10 mx-auto gap-y-4 py-3 lg:overflow-y-auto">
          {props.children !== undefined ? props.children : <></>}
        </div>
      </div>
    </main>
  );
};

export default DashboardTemplate;
