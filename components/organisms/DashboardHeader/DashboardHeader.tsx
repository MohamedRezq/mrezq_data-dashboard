import React from "react";
import calendarIcon from "../../../public/assets/img/icons/calendar.svg";
import dropDownIcon from "../../../public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Image from "next/image";
import { HiBell } from "react-icons/hi";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";

// Define a type for our props
interface DashboardHeaderProps {
  date: string;
}

const menu = (
  <Menu className="px-4" onSelect={() => {}}>
    {["Profile", "Sign out"].map((item, i) => (
      <MenuItem key={`${item}-${i}`} className="text-base hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer">{item}</MenuItem>
    ))}
  </Menu>
);

const DashboardHeader = (props: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col-reverse gap-y-3 items-center lg:flex-row justify-between">
      <div className="text-3xl opacity-75 text-mineshaft self-start lg:self-auto">
        Good {`Morning`}, {`User`}!
      </div>
      <div className="flex gap-x-4 items-center self-end lg:self-auto">
        <div className="flex items-center gap-x-2 text-sm bg-bonjour rounded-2xl px-4 py-2 text-mineshaft pr-6">
          <Image src={calendarIcon} alt="calendar" />
          <div>{props.date}</div>
        </div>
        <div className="relative">
          <HiBell className="text-cuttysark w-7 h-7" />
          <div className="h-4 w-4 bg-thunderbird font-semibold rounded-full flex items-center justify-center text-xxs absolute top-[2px] border border-white -right-1 text-white p-2">
            12
          </div>
        </div>
        <div className="flex gap-x-1 items-center">
          <div className=" rounded-full h-12 w-12 border border-cuttysark p-1">
            <img src="/assets/img/user.png" alt="user" />
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            animation="slide-up"
            onVisibleChange={() => {}}
          >
            <Image src={dropDownIcon} alt="Menu" className="w-3 cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
