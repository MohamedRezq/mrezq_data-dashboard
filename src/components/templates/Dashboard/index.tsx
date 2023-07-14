import React, { ReactElement } from "react";
//-----> Components <-----------------------------------------//
import { DashboardHeader, Sidebar } from "../../organisms";
import AuthProvider from "@/src/utils/AuthProvider";
//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

type DashboardTemplateProps = {
  children: ReactElement<any, any>;
  date: string;
  periods: string[];
};

const DashboardTemplate = (props: DashboardTemplateProps) => {
  return (
    <AuthProvider>
      <main className="w-full flex m-auto p-3 h-[100vh] bg-[#F8F8F8] font-medium">
        <div className="hidden xl:block w-64 h-full">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[925px] mx-auto">
          <DashboardHeader date={props.date} />
          <div className="h-full w-full flex flex-col md:pr-10 mx-auto gap-y-4 py-3 lg:overflow-y-auto">
            {props.children !== undefined ? props.children : <></>}
          </div>
        </div>
      </main>
    </AuthProvider>
  );
};

export default DashboardTemplate;
