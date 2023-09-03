import React, { ReactElement } from "react";
import { useTheme } from "next-themes";
//-----> Components <-----------------------------------------//
import { DashboardHeader, MiniSideBar, Sidebar } from "../../organisms";
import AuthProvider from "@/src/utils/AuthProvider";
//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

type DashboardTemplateProps = {
  children: ReactElement<any, any>;
  date: string;
  headerTitle: string;
};

const DashboardTemplate = (props: DashboardTemplateProps) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  const displayMiniSidebar = useSelector(
    (state: RootState) => state.dashboard.displayMiniSidebar
  );
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <AuthProvider>
      <main className="w-full dark:bg-[#141414] dark:text-white flex m-auto px-10 lg:px-4 py-3 bg-[#F8F8F8] font-medium">
        <div
          className={`hidden ${!displayMiniSidebar && "lg:block"} w-64 h-full`}
        >
          <Sidebar />
        </div>
        <div
          className={`hidden ${
            displayMiniSidebar && "lg:flex xl:items-center"
          } w-fit h-full`}
        >
          <MiniSideBar />
        </div>
        <div
          className={`flex flex-col ${!displayMiniSidebar && "max-w-4xl"} ${
            displayMiniSidebar && "mr-5"
          } gap-y-5 w-full ${
            !displayMiniSidebar && "mx-auto"
          } h-fit lg:h-[96vh]`}
        >
          <DashboardHeader headerTitle={props.headerTitle} date={props.date} />
          <div className="w-full flex flex-col md:pr-10 mx-auto gap-y-4 py-3 lg:overflow-y-auto">
            {props.children !== undefined ? props.children : <></>}
          </div>
        </div>
      </main>
    </AuthProvider>
  );
};

export default DashboardTemplate;
