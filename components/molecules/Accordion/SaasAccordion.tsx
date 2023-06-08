import CheckBox from "@/components/atoms/Input/CheckBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { BsFillInfoCircleFill } from "react-icons/bs";
import "react-accessible-accordion/dist/fancy-example.css";
import { AiOutlineCheck } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { SaasCardProps } from "@/types/SaasCardProps.interface";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateConnectedSaas } from "@/redux/features/saas/saasSlice";
import { request } from "https";
import { quickbooksAuth } from "@/actions/quickbooks";
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
export default function SaasAccordion(props: any) {
  const [termsAgreement, setTermsAgreement] = useState(false);
  //----------------------------------------------------------------------------------//
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  //const [connected, setConnected] = useState(false);
  //----------------------------------------------------------------------------------//
  const getLoggedUserData = (e: Event) => {
    console.log("TODO:Getting logged user data");
    e.currentTarget?.removeEventListener("focus", getLoggedUserData);
  };
  //----------------------------------------------------------------------------------//
  const handleConnect = () => {
    const win = window;
    win.addEventListener("focus", getLoggedUserData); 
    win.open(
      `https://appcenter.intuit.com/connect/oauth2?client_id=ABG5n8VdIoWzIFGRA7Iivyp6zqTnuHU4Zl1pDwgMBokaiTbEkC&response_type=code&scope=com.intuit.quickbooks.accounting&redirect_uri=http://localhost:3000/welcome/customize-access&state=security_token%3D138r5719ru3e1%26url%3Dhttp://localhost:3000/welcome/customize-access`,
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };
  //----------------------------------------------------------------------------------//
  useEffect(() => {
    // condition to check if this window is opened by auth process
    if (window.location.href.includes("code")) {
      quickbooksAuth(window.location.href);
    }
  }, []);
  //----------------------------------------------------------------------------------//
  return (
    <div className="px-0 w-full md:w-[460px] sm:px-5 mx-2 py-2 rounded-2xl bg-wildsand">
      <Accordion className="w-full rounded-sm bg-wildsand">
        <AccordionItem
          dangerouslySetExpanded={props.preExpand ? true : undefined}
          className="w-full rounded-sm bg-wildsand"
        >
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="flex items-center text-xl font-medium">
                <div
                  className={` w-6 h-6 rounded-md p-1 flex justify-center items-center bg-hippiegreen`}
                >
                  <img src={props.logo} alt="Logo" className="" />
                </div>
                <div className="text-emperor text-sm font-bold ml-3">
                  {props.title}
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <hr className="border-silverchalice mb-5 h-px" />
            <p className="text-[10px] text-grayish2">{props.text}</p>
            <p className="text-[11px] text-emperor flex items-center gap-x-[5px] ml-1 font-bold my-2">
              <BsFillInfoCircleFill className=" text-[#B2B2B2] w-2 h-2" />{" "}
              Access
            </p>
            <div className="flex gap-x-1">
              <TiTick className="text-[#509051]" />
              <div className="text-grayish2 text-[9px] font-medium">
                Invoice Access
              </div>
            </div>
            <div className="flex gap-x-1">
              <TiTick className="text-[#509051]" />
              <div className="text-grayish2 text-[9px] font-medium">
                Some Access
              </div>
            </div>
            <div className="flex gap-x-1">
              <TiTick className="text-[#509051]" />
              <div className="text-grayish2 text-[9px] font-medium">
                Random Access
              </div>
            </div>
            <hr className="border-silverchalice my-5 h-px" />
            {props.connected ? (
              <div className=" bg-hippiegreen text-white text-xs px-3 py-1 w-fit rounded-xl flex items-center">
                Connected
              </div>
            ) : (
              <>
                <CheckBox
                  label={
                    <span className="flex">
                      I agree to the{" "}
                      <Link
                        href=""
                        className="underline mx-1 items-center flex text-hippiegreen"
                      >
                        Terms and Conditions
                        <HiOutlineExternalLink className="text-silverchalice mx-1" />
                      </Link>
                    </span>
                  }
                  setCheckBox={setTermsAgreement}
                />
                <Link href="">
                  {props.connected ? (
                    <></>
                  ) : (
                    <button
                      className={`${
                        termsAgreement
                          ? "bg-[#5EBF60] hover:bg-hippiegreen"
                          : "bg-[#B2B2B2]"
                      }  rounded-xl py-3 pr-3 pl-[14px] mt-4 text-white text-[10px] font-bold`}
                      disabled={!termsAgreement}
                      onClick={handleConnect}
                    >
                      Connect
                    </button>
                  )}
                </Link>
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
