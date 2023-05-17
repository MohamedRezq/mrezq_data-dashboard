import CheckBox from "@/components/atoms/Input/CheckBox";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { BsFillInfoCircleFill } from "react-icons/bs";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { SaasAccordionProps } from "@/types/SaasAccordionProps.interface";
import { SaasCardProps } from "@/types/SaasCardProps.interface";

export default function SaasAccordion(props: SaasCardProps) {
  return (
    <div className="px-0 w-full md:w-[460px] sm:px-5 mx-2 py-2 rounded-2xl bg-wildsand">
      <Accordion
        className="w-full rounded-sm bg-wildsand"
        allowZeroExpanded={true}
      >
        <AccordionItem className="w-full rounded-sm bg-wildsand">
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
            <p className="text-[11px] text-emperor flex items-center gap-x-[5px] ml-1 font-bold my-2"><BsFillInfoCircleFill className=" text-[#B2B2B2] w-2 h-2" /> Access</p>
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
            />
            <Link href="">
              <button
                className={`bg-[#5EBF60] hover:bg-hippiegreen rounded-xl py-3 pr-3 pl-[14px] mt-4 text-white text-[10px] font-bold`}
              >
                Sync Now
              </button>
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
