import Image from "next/image";
import React from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import SaasAccordion from "@/components/molecules/Accordion/SaasAccordion";
import Link from "next/link";
import WelcomeTemplate from "@/components/templates/WelcomeTemplate";
import { SaasCardProps } from "@/types/SaasCardProps.interface";
import { quickbooksAuth } from "@/actions/quickbooks";
import { zohopeopleAuth } from "@/actions/zohopeople";
import { zohobooksAuth } from "@/actions/zohobooks";
import ActiveBtn from "@/components/atoms/Button/ActiveBtn";
//--------------------------------------------------------------//
const CustomizeAccessPage = () => {
  //--------------------------------------------------------------//
  const selectedSaas = useSelector(
    (state: RootState) => state.saas.selectedList
  );
  //--------------------------------------------------------------//
  React.useEffect(() => {
    const applicationId = localStorage.getItem("applicationId");
    // condition to check if this window is opened by auth process
    if (window.location.href.includes("code")) {
      if (applicationId === "3") {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        zohopeopleAuth(code);
      } else if (applicationId === "2") {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        zohobooksAuth(code);
      } else if (applicationId === "1") {
        quickbooksAuth(window.location.href);
      }
    }
  }, []);

  return (
    <WelcomeTemplate>
      <div className="w-[90%] md:h-1/2 mt-16 overflow-y-auto px-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            {selectedSaas.map((item: SaasCardProps, i: number) => (
              <SaasAccordion
                key={`${item.title}-${i}`}
                logo={item.logo}
                title={item.title}
                text={item.text}
                app_id={item.app_id}
                connected={item.connected}
                preExpand={i === 0 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-y-2 mt-16 items-center w-full px-10 sm:w-[410px] lg:w-[615px] justify-between">
        <Link href="/welcome/select-saas">
          <ActiveBtn text="Back" />
        </Link>
        <div className="text-emperor text-[10px]">Customize your access</div>
        <Link href="/welcome/data-sync">
          <ActiveBtn text="Next" />
        </Link>
      </div>
      <div className="w-full"></div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={2} />
      </div>
    </WelcomeTemplate>
  );
};

export default CustomizeAccessPage;
