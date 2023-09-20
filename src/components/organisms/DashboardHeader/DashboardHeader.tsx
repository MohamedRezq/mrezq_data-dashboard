import React, { useEffect } from "react";
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
  useEffect(() => {}, [theme]);

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
            overlay={<LoginMenu them={theme || ""} />}
            openClassName="mt-[20px]"
            overlayClassName="pt-0 pl-0 pr-0 pb-0 user-menu"
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
