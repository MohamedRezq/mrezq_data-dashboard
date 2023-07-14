import React, { useState } from "react";
import Link from "next/link";
import jwt from "jsonwebtoken";
//-----> Components <-----------------------------------------//
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AccordionTickItem, CheckBox } from "../../atoms";
//-----> Redux <----------------------------------------------//
import { removeUser, setUser } from "@/src/store/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Config <---------------------------------------------//
import { Integrations } from "@/config";
import { getLoggedUser } from "@/src/actions";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

export default function SaasAccordion(props: any) {
  const [termsAgreement, setTermsAgreement] = useState(false);
  //----------------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  //----------------------------------------------------------------------------------//
  const [connected, setConnected] = useState(false);
  //----------------------------------------------------------------------------------//
  const apps_id_url = new Map([
    ["1", Integrations.Quickbooks.AUTH_URL],
    ["2", Integrations.Zohobooks.AUTH_URL],
    ["3", Integrations.Zohopeople.AUTH_URL],
    // ["4", Integrations.Freshbook.AUTH_URL],
    ["5", Integrations.Jira.AUTH_URL],
    ["6", Integrations.Okta.AUTH_URL],
  ]);
  //----------------------------------------------------------------------------------//
  const getLoggedUserData = async (e: Event) => {
    const response = await getLoggedUser(user.token);
    if (response?.status === 200) {
      const token = response.data.token;
      const decoded: any = jwt.decode(token);
      if (decoded) {
        dispatch(setUser({ info: decoded, token: user.token }));
        const integratedApp = decoded.applications.filter(
          (app: any) => app.application_id == props.app_id
        );
        if (integratedApp.length > 0) setConnected(true);
      } else dispatch(removeUser());
    } else {
      dispatch(removeUser());
    }
    e.currentTarget?.removeEventListener("focus", getLoggedUserData);
  };
  //----------------------------------------------------------------------------------//
  const handleConnect = (app_id: string) => {
    localStorage.setItem("applicationId", String(app_id));
    const win = window;
    win.addEventListener("focus", getLoggedUserData);
    win.open(
      apps_id_url.get(app_id),
      "_blank",
      "location=yes,height=520,width=520,scrollbars=yes,status=yes"
    );
  };
  //----------------------------------------------------------------------------------//
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
            {["Invoice Access", "Some Access", "Random Access"].map(
              (item: string) => (
                <AccordionTickItem
                  key={`accordion-tick-item-${item}`}
                  text={item}
                />
              )
            )}
            <hr className="border-silverchalice my-5 h-px" />
            {connected ? (
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

                <button
                  className={`${
                    termsAgreement
                      ? "bg-[#5EBF60] hover:bg-hippiegreen"
                      : "bg-[#B2B2B2]"
                  }  rounded-xl py-3 pr-3 pl-[14px] mt-4 text-white text-[10px] font-bold`}
                  disabled={!termsAgreement}
                  onClick={() => handleConnect(props.app_id)}
                >
                  Connect
                </button>
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
