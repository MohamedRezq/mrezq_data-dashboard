import CheckBox from "@/components/atoms/Input/CheckBox";
import Link from "next/link";
import React, { useState } from "react";
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

import app_config from "@/app_config";
import { SaasCardProps } from "@/types/SaasCardProps.interface";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateConnectedSaas } from "@/redux/features/saas/saasSlice";

export default function SaasAccordion(props: any) {
  const [termsAgreement, setTermsAgreement] = useState(false);

  const router = useRouter();
  //const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    await axios
      .get(`${app_config.api_base_url_local}/api/quickbooks/authenticate`)
      .then((res) => {
        router.push(res.data?.authUri);
      });
  };

  return (
    <div className="px-0 w-full md:w-[460px] sm:px-5 mx-2 py-2 rounded-2xl bg-wildsand">
      <Accordion
        className="w-full rounded-sm bg-wildsand"
      >
        <AccordionItem dangerouslySetExpanded={(props.preExpand)?true:undefined} className="w-full rounded-sm bg-wildsand">
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
