import React from "react";
import Drawer from "react-modern-drawer";
//-----> Components <-----------------------------------------//
import { IoSettingsSharp } from "react-icons/io5";
import { SidebarItem } from "../../molecules";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/src/store/slices/sidebar";
import { RootState } from "@/src/store";
import { useRouter } from "next/router";
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
      link: "/dashboard/applications",
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
      link: "/dashboard/opportunities",
    },
    {
      icon: "/assets/img/icons/renewable.svg",
      title: "Renewal hub",
      link: "/dashboard/renewal",
    },
  ];
  //----------------------------------------------------------------------------------//
  const { activeTab } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  return (
    <div
      className={`w-[250px] min-w-[250px] dark:bg-darkMineShaft h-full xl:h-[96vh] flex flex-col px-5 py-10 justify-between lg:rounded-2xl bg-hippiegreen text-white`}
    >
      <div>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="mb-16 cursor-pointer text-[30px] font-bold text-center"
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
      <div className="flex flex-col justify-center items-center">
        {/* <SidebarItem
          title="Settings"
          active={false}
          icon={<IoSettingsSharp />}
          link="/dashboard"
        /> */}
        <div className="text-[10px] opacity-50 font-light">Version 0.01</div>
      </div>
    </div>
  );
};

export default Sidebar;
