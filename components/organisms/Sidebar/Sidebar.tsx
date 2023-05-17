import SidebarItem from "@/components/molecules/SidebarItem/SidebarItem";
import React from "react";
import {IoSettingsSharp} from 'react-icons/io5';

const Sidebar = () => {
  const tabs = [
    {
      icon: '/assets/img/icons/house-chimney-blank.svg',
      title: "Home",
      active: true,
    },
    {
      icon: '/assets/img/icons/application.svg',
      title: "Applications",
      active: false,
    },
    {
      icon: '/assets/img/icons/lightbulb-dollar.svg',
      title: "Opportunities",
      active: false,
    },
    {
      icon: '/assets/img/icons/renewable.svg',
      title: "Renewal hub",
      active: false,
    },
  ];
  return (
    <div className="hidden lg:flex mr-5 w-full flex-col px-5 py-10 justify-between rounded-2xl bg-hippiegreen text-white h-full">
      <div>
        <div className="mb-16 font-quicksandLogo text-[30px] font-bold text-center">
          alpha
        </div>
        <div>
          {tabs.map((tab, i) => (
            <SidebarItem
              key={`${tab.title}-${i}`}
              title={tab.title}
              active={tab.active}
              icon={tab.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
      <SidebarItem
              title="Settings"
              active={false}
              icon={<IoSettingsSharp />}
            />
            <div className="text-[10px] opacity-50 font-light mx-12 pl-1">Version 0.01</div>
      </div>
    </div>
  );
};

export default Sidebar;
