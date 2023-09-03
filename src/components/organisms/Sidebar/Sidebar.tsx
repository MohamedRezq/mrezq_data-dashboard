import React from "react";
import Drawer from "react-modern-drawer";
//-----> Components <-----------------------------------------//
import { IoSettingsSharp } from "react-icons/io5";
import { SidebarItem } from "../../molecules";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/src/store/slices/sidebar";
import { RootState } from "@/src/store";
import { setDisplayMiniSidebar } from "@/src/store/slices/dashboard";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const Sidebar = () => {
  //----------------------------------------------------------------------------------//
  const tabs = [
    {
      icon: "/assets/img/icons/house-chimney-blank.svg",
      title: "Home",
      link: "/dashboard",
    },
    {
      icon: "/assets/img/icons/application.svg",
      title: "Applications",
      link: "/dashboard/integrations",
    },
    {
      icon: "/assets/img/icons/category.svg",
      title: "Department",
      link: "/dashboard/department",
    },
    {
      icon: "/assets/img/icons/sync.svg",
      title: "Integration",
      link: "/dashboard/integrations",
    },
    {
      icon: "/assets/img/icons/lightbulb-dollar.svg",
      title: "Opportunities",
      link: "/dashboard",
    },
    {
      icon: "/assets/img/icons/renewable.svg",
      title: "Renewal hub",
      link: "/dashboard",
    },
  ];
  const displayMiniSidebar = useSelector(
    (state: RootState) => state.dashboard.displayMiniSidebar
  );
  //----------------------------------------------------------------------------------//
  const { activeTab } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//
  return (
    <div
      className={`w-full ${
        displayMiniSidebar && "none"
      } lg:w-[240px] h-full dark:bg-darkMineShaft lg:h-[95vh] lg:flex mr-5 flex-col px-5 py-10 justify-between lg:rounded-2xl bg-hippiegreen text-white`}
    >
      <div>
        <div
          onClick={() => {
            dispatch(setDisplayMiniSidebar(true));
            console.log("now displayMini:", displayMiniSidebar);
          }}
          className="mb-16 cursor-pointer font-quicksandLogo text-[30px] font-bold text-center"
        >
          alpha
        </div>

        {tabs.map((tab, i) => (
          <div
            key={`${tab.title}-${i}`}
            onClick={() => dispatch(setActiveTab(tab.title))}
          >
            <SidebarItem
              title={tab.title}
              active={tab.title == activeTab ? true : false}
              icon={tab.icon}
              link={tab.link}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <SidebarItem
          title="Settings"
          active={false}
          icon={<IoSettingsSharp />}
          link="/dashboard"
        />
        <div className="text-[10px] opacity-50 font-light mx-12 pl-1">
          Version 0.01
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
