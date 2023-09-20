import React, { MouseEventHandler } from "react";
import { useRouter } from "next/router";
//-----> Components <-----------------------------------------//
import Menu from "rc-menu";
//-----> Redux <----------------------------------------------//
import { useDispatch } from "react-redux";
import { removeUser } from "@/src/store/slices/user";
import Image from "next/image";
import { dateFormatter } from "@/src/utils/dateFormatter";
import { useTheme } from "next-themes";
//-----> Assets <---------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const LoginMenu = ({ them }: { them: string }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  const handleUserLogout = () => {
    dispatch(removeUser());
    router.push("/");
  };
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  type IconType = {
    text: string;
    url: string;
    action: MouseEventHandler<HTMLImageElement>;
  };
  const icons: IconType[] = [
    {
      text: "User",
      url: "/assets/img/user.svg",
      action: () => {},
    },
    {
      text: "Settings",
      url: "/assets/img/Layer 2.svg",
      action: () => {},
    },
    {
      text: "Organisation",
      url: "/assets/img/briefcase.svg",
      action: () => {},
    },
    {
      text: "Payment",
      url: "/assets/img/wallet (1).svg",
      action: () => {},
    },
    {
      text: `${theme === "light" ? "Dark" : "Light"} mode`,
      url: "/assets/img/brightness.svg",
      action: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
    },
    {
      text: "Logout",
      url: "/assets/img/power.svg",
      action: handleUserLogout,
    },
  ];
  const date = dateFormatter();
  //----------------------------------------------------------------------------------//

  return (
    <Menu onSelect={() => {}}>
      <div className="h-[279px] text-mineshaft text-[10px] dark:text-white px-[8px] pt-[8px] pb-[23px] w-[285px] rounded-2xl bg-white dark:bg-[#3E3E3E] flex flex-col justify-between">
        <div className="w-full bg-[#F9F9F9] pt-[23px] pb-[40px] gap-y-[28px] px-[30px] rounded-2xl h-[188px] dark:bg-darkMineShaft grid grid-cols-3">
          {icons.map((icon: IconType, index: number) => (
            <div
              key={`user-menu-icon-${icon.text}`}
              className="flex w-[68px] flex-col justify-center items-center gap-y-[10px]"
            >
              <Image
                src={icon.url}
                alt={icon.text}
                width={24}
                height={0}
                className="h-auto cursor-pointer"
                onClick={icon.action}
              />
              <p onClick={icon.action} className="cursor-pointer">
                {icon.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-[#959595] dark:text-white opacity-70 self-end flex flex-col gap-y-[3px] text-right pr-[22px]">
          <div>Last Synced</div>
          <div>{date}</div>
        </div>
      </div>
    </Menu>
  );
};

export default LoginMenu;
