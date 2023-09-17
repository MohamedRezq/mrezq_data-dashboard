import React from "react";
import Drawer from "react-modern-drawer";
//-----> Components <-----------------------------------------//
import { IoSettingsSharp } from "react-icons/io5";
import { TbAlpha } from "react-icons/tb";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/src/store/slices/sidebar";
import { RootState } from "@/src/store";
import Link from "next/link";
import { setDisplayMiniSidebar } from "@/src/store/slices/dashboard";
import { Tooltip } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const MiniSideBar = () => {
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
      link: "/dashboard/opportunities",
    },
    {
      icon: "/assets/img/icons/renewable.svg",
      title: "Renewal hub",
      link: "/dashboard",
    },
  ];
  //----------------------------------------------------------------------------------//
  const { activeTab } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//
  return (
    <div className="w-[57px] flex h-[450px] mr-[28px] ml-[34px] lg:mt-[90px] flex-col py-10 justify-between rounded-[48px] bg-hippiegreen dark:bg-darkMineShaft text-white">
      <div className="w-full">
        <div
          onClick={() => {
            dispatch(setDisplayMiniSidebar(false));
          }}
          className={`px-4 my-1 py-2 flex justify-center mb-5 cursor-pointer text-white rounded-xl flex items-center gap-x-5 hover:bg-opacity-80`}
        >
          <TbAlpha />
        </div>

        {tabs.map((tab, i) => (
          <div
            key={`${tab.title}-${i}`}
            onClick={() => dispatch(setActiveTab(tab.title))}
          >
            <Link
              href={tab.link}
              className={`flex justify-center my-1 py-2 cursor-pointer ${
                tab.title == activeTab ? "text-hippiegreen" : "text-white"
              } rounded-xl flex items-center gap-x-5 hover:bg-opacity-80`}
            >
              <Tooltip
                element={
                  typeof tab.icon == "string" ? (
                    <img src={tab.icon} alt={tab.title} className="w-4 h-4" />
                  ) : (
                    tab.icon
                  )
                }
                text={tab.title}
              />
            </Link>
          </div>
        ))}
        <div>
          <Link
            onClick={() => dispatch(setActiveTab("Settings"))}
            href={"/dashboard/settings"}
            className={`px-4 flex justify-center mt-3 my-1 py-2 cursor-pointer text-white rounded-xl items-center gap-x-5 hover:bg-opacity-80`}
          >
            <Tooltip element={<IoSettingsSharp />} text={"Settings"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniSideBar;
