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
    <div className="flex mr-5 flex-col px-6 py-10 justify-between rounded-2xl bg-hippiegreen text-white h-full">
      <div>
        <div className="mb-16 font-quicksand text-3xl font-bold text-center">
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
            <div className="text-sm opacity-50 font-light mx-12 pl-1">Version 0.01</div>
      </div>
    </div>
  );
};

export default Sidebar;
