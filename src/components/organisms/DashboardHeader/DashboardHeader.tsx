import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Drawer from "react-modern-drawer";
//-----> Components <-----------------------------------------//
import { HiBell } from "react-icons/hi";
import Dropdown from "rc-dropdown";
import { LoginMenu, NotificationMenu } from "../../atoms";
import { RxHamburgerMenu } from "react-icons/rx";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
//-----> Assets <---------------------------------------------//
import calendarIcon from "@/public/assets/img/icons/calendar.svg";
import dropDownIcon from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { RootState } from "@/src/store";
import { toggleMobileDrawer } from "@/src/store/slices/sidebar";
import { Sidebar } from "../Sidebar";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//
type DashboardHeaderProps = {
  date: string;
  headerTitle: string;
};
//----------------------------------------------------------------------------------//

const DashboardHeader = (props: DashboardHeaderProps) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  const { isMobileDrawerOpen } = useSelector(
    (state: RootState) => state.sidebar
  );
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//

  return (
    <div className="w-full flex flex-col-reverse gap-y-3 items-center md:flex-row justify-between text-mineshaft dark:text-white">
      <div className="text-[30px] font-medium opacity-70 self-start md:self-auto mt-3">
        {props.headerTitle}
      </div>
      <div className="flex gap-x-4 items-center self-end lg:self-auto">
        {theme === "light" ? (
          <svg
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
        <div className="flex text-mineshaft items-center gap-x-2 text-xs sm:text-sm bg-bonjour rounded-xl px-4 py-2 pr-6">
          <Image src={calendarIcon} alt="calendar" width={16} />
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
            <div className="h-4 w-4 bg-thunderbird font-bold rounded-full flex items-center justify-center text-xxs absolute top-[2px] border border-white -right-1 text-white p-2">
              12
            </div>
          </div>
        </Dropdown>

        <div className="flex gap-x-1 items-center">
          <div className="rounded-full h-12 w-12 border border-cuttysark p-1">
            <Image
              src="/assets/img/user.png"
              alt="user"
              width={40}
              height="0"
              className="h-auto"
            />
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
              width={12}
              className="w-3 cursor-pointer"
            />
          </Dropdown>
        </div>
        <button
          className="lg:hidden text-hippiegreen dark:text-white text-2xl font-bold mx-2"
          onClick={() => {
            dispatch(toggleMobileDrawer(!isMobileDrawerOpen));
          }}
        >
          <RxHamburgerMenu />
        </button>
        <Drawer
          open={isMobileDrawerOpen}
          onClose={() => {
            dispatch(toggleMobileDrawer(!isMobileDrawerOpen));
          }}
          direction="left"
          className="bla bla bla"
        >
          <Sidebar />
        </Drawer>
      </div>
    </div>
  );
};

export default DashboardHeader;
