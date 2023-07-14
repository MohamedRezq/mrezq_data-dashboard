import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//-----> Components <-----------------------------------------//
import { HiBell } from "react-icons/hi";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/src/store/slices/user";
//-----> Assets <---------------------------------------------//
import calendarIcon from "@/public/assets/img/icons/calendar.svg";
import dropDownIcon from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { RootState } from "@/src/store";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

// Define a type for our props
interface DashboardHeaderProps {
  date: string;
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUserLogout = () => {
    dispatch(removeUser());
    router.push("/");
  };
  const LoginMenu = (
    <Menu className="px-4" onSelect={() => {}}>
      <MenuItem className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer text-xs font-semibold">
        Profile
      </MenuItem>
      <MenuItem
        onClick={handleUserLogout}
        className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer text-xs font-semibold"
      >
        Sign out
      </MenuItem>
    </Menu>
  );

  const NotificationMenu = (
    <Menu className="px-4" onSelect={() => {}}>
      {["Notification 1", "Notification 2"].map((item, i) => (
        <MenuItem
          key={`${item}-${i}`}
          className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer text-xs font-semibold"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <div className="flex flex-col-reverse gap-y-3 items-center md:flex-row justify-between text-mineshaft">
      <div className="text-[30px] font-medium opacity-70 self-start md:self-auto">
        Good Morning, {user.info.firstName}!
      </div>
      <div className="flex gap-x-4 items-center self-end lg:self-auto">
        <div className="flex items-center gap-x-2 text-sm bg-bonjour rounded-xl px-4 py-2 pr-6">
          <Image src={calendarIcon} alt="calendar" />
          <div className="opacity-70">{props.date}</div>
        </div>
        <Dropdown
          trigger={["click"]}
          overlay={NotificationMenu}
          animation="slide-up"
          onVisibleChange={() => {}}
        >
          <div className="relative cursor-pointer hover:bg-mineshaft rounded-full hover:bg-opacity-10">
            <HiBell className="text-cuttysark w-7 h-7" />
            <div className="h-4 w-4 bg-thunderbird font-semibold rounded-full flex items-center justify-center text-xxs absolute top-[2px] border border-white -right-1 text-white p-2">
              12
            </div>
          </div>
        </Dropdown>

        <div className="flex gap-x-1 items-center">
          <div className="rounded-full h-12 w-12 border border-cuttysark p-1">
            <img src="/assets/img/user.png" alt="user" />
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={LoginMenu}
            animation="slide-up"
            onVisibleChange={() => {}}
          >
            <Image
              src={dropDownIcon}
              alt="Menu"
              className="w-3 cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
