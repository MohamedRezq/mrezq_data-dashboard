import Image from "next/image";
import React from "react";
import Link from "next/link";
//-----> Components <-----------------------------------------//
import { Bullets } from "@/src/components/atoms";
import { OnboardingTemplate } from "@/src/components/templates";
import { SaasAccordion } from "@/src/components/molecules";
import { ActiveBtn } from "@/src/components/atoms/Button";
//-----> Redux <----------------------------------------------//
import type { RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
//-----> Assets <---------------------------------------------//
import logo from "@/public/assets/img/AlphaS wordmark.svg";
//-----> Actions <---------------------------------------------//
import {
  jiraAuth,
  oktaAuth,
  quickbooksAuth,
  zohobooksAuth,
  zohopeopleAuth,
} from "@/src/actions";
import { setPageLoading } from "@/src/store/slices/loading";
//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  app_id?: string;
};

//--------------------------------------------------------------//
const CustomizeAccessPage = () => {
  //--------------------------------------------------------------//
  const dispatch = useDispatch();
  //--------------------------------------------------------------//
  const selectedSaas = useSelector(
    (state: RootState) => state.saas.selectedList
  );
  //--------------------------------------------------------------//
  React.useEffect(() => {
    dispatch(setPageLoading(false));
    const applicationId = localStorage.getItem("applicationId");
    // condition to check if this window is opened by auth process
    if (window.location.href.includes("code")) {
      dispatch(setPageLoading(true));
      switch (applicationId) {
        case "1": {
          quickbooksAuth(window.location.href);
          break;
        }
        case "2": {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get("code");
          zohobooksAuth(code);
          break;
        }
        case "3": {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get("code");
          zohopeopleAuth(code);
          break;
        }
        case "4": {
          // const urlParams = new URLSearchParams(window.location.search);
          // const code = urlParams.get("code");
          // zohopeopleAuth(code);
          break;
        }
        case "5": {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get("code");
          jiraAuth(code);
          break;
        }
        case "6": {
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get("code");
          oktaAuth(code);
          break;
        }
        default:
          break;
      }
    }
  }, []);

  return (
    <OnboardingTemplate>
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
    </OnboardingTemplate>
  );
};

export default CustomizeAccessPage;
