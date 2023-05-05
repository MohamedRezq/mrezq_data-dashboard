import CheckBox from "@/components/atoms/Input/CheckBox";
import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

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

export default function SaasAccordion(props: SaasAccordionProps) {
  return (
    <div className="px-0 sm:px-5 py-2 rounded-3xl bg-alto">
      <Accordion
        className="w-full rounded-sm sm:w-96 bg-alto"
        allowZeroExpanded={true}
      >
        <AccordionItem className="w-full rounded-sm sm:w-96 bg-alto">
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="flex items-center text-xl font-medium">
                <div
                  className={`w-7 rounded-md h-7 p-1 flex justify-center items-center bg-hippiegreen`}
                >
                  <img src={props.logo} alt="Logo" className="" />
                </div>
                <div className="text-emperor text-md ml-3">{props.title}</div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <hr className="border-silverchalice mb-5 h-px" />
            <p className="text-sm text-dovegray">{props.text}</p>
            <p className="text-md text-emperor font-medium my-2">Access</p>
            <CheckBox label="Invoice Access" />
            <CheckBox label="Some Access" />
            <CheckBox label="Random Access" />
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
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
