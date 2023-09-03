import React, { useEffect, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
//-----> Actions <----------------------------------------------//

//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import { ChartMenu, Tooltip } from "@/src/components/atoms";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import Link from "next/link";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//
type AppInfoType = {
  logo: string;
  title: string;
  url?: string;
};
type UserInfoType = {
  avatar: string;
  name: string;
};
type DepartmentCardProps = {
  department?: string;
};
//----------------------------------------------------------------------------------//

const DepartmentCard = (props: DepartmentCardProps) => {
  //-------------------------------------------------------------------------//
  const [cardData, setCardData] = useState(
    useSelector((state: RootState) => state.dashboard.department.departmentCard)
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-info`,
        {
          organizationId: localStorage.getItem("organizationId"),
          fromDate: new Date(
            new Date().getFullYear() - 1,
            new Date().getMonth(),
            new Date().getDate()
          ).toISOString(),
          toDate: new Date().toISOString(),
          department: props?.department,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("rx data:", res?.data);
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) setCardData(apiData);
    });
  }, []);

  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 text-mineshaft dark:text-white rounded-2xl h-fit mb-5 font-semibold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <Link
        href={`/dashboard/department/detail?department=${encodeURIComponent(
          cardData?.title === "All Employees" ? "All" : cardData?.title
        )}`}
        passHref
        className=" bg-gallery h-8 dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1"
      >
        {cardData.title}
        <Dropdown trigger={["click"]} overlay={ChartMenu} animation="slide-up">
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </Link>
      <div
        className={`h-fit  px-7 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="flex text-mineshaft dark:text-white flex-col gap-y-1 text-[10px]">
          <div>Total Spend</div>
          <div className="flex gap-x-4 items-center">
            <div className="text-[20px] font-extrabold text-[#2C2C2C] opacity-90 dark:text-white  mt-1 mb-1">
              $
              {Math.round(cardData?.totalSpend || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className="flex items-center mt-1 justify-center flex-col text-hippiegreen text-[6px]">
              <div className="text-[8px]">
                {cardData?.increasePercent > 0 ? (
                  <BiSolidUpArrow />
                ) : (
                  <BiSolidDownArrow />
                )}
              </div>
              <div>{cardData?.increasePercent || 0} %</div>
            </div>
          </div>
          <div className="mt-2">{cardData?.apps?.length || 0} apps</div>
          <div className=" flex gap-2 flex-wrap">
            {cardData?.apps?.map((app: AppInfoType, i: number) => (
              <Tooltip
                key={`dept-card-info-${app?.title}-${i}`}
                element={
                  <Link
                    href={app?.url || "/"}
                    target="_blank"
                    className={`w-7 h-7 rounded-md flex justify-center items-center`}
                  >
                    <img
                      src={app.logo}
                      alt={app.title}
                      className="rounded-sm w-inherit h-inherit"
                    />
                  </Link>
                }
                text={app.title}
              />
            ))}
          </div>
          <div className="mt-3">{cardData?.users?.length || 0} users</div>
          {cardData?.users?.length > 25 ? (
            <div className="flex items-center -space-x-3">
              {cardData?.users
                ?.slice(0, 3)
                .map((user: UserInfoType, i: number) => (
                  <Tooltip
                    additionalClassNames={`z-${
                      (i + 1) * 10
                    }  bg-opacity-100 opacity-100`}
                    key={`dept-card-info-${user?.name}-${i}`}
                    element={
                      <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="rounded-full h-7 w-7 border-2 border-white"
                      />
                    }
                    text={user.name}
                  />
                ))}
              <div className="text-[8px] bg-opacity-100 opacity-100 z-50 rounded-full border border-white h-6 w-6 flex items-center justify-center bg-hippiegreen text-white">
                25+
              </div>
            </div>
          ) : (
            <div className=" flex gap-1 flex-wrap">
              {cardData?.users?.map((user: UserInfoType, i: number) => (
                <Tooltip
                  key={`dept-card-info-${user?.name}-${i}`}
                  element={
                    <div className="flex gap-x-1 items-center">
                      <div className="rounded-full h-7 w-7 border border-cuttysark p-1">
                        <img src={user?.avatar} alt={user?.name} />
                      </div>
                    </div>
                  }
                  text={user.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
