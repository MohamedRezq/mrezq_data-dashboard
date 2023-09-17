import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { App_Config } from "@/config";
import { oktaAuth } from "@/src/actions";
//-----> Components <-----------------------------------------//

//-----> Assets <---------------------------------------------//

//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

const OktaLoginPage = () => {
  //----------------------------------------------------------------------------------//
  const [oktaDomain, setOktaDomain] = useState("");
  const [oktaApiToken, setOktaApiToken] = useState("");
  const [nextActive, setNextActive] = useState(false);
  //----------------------------------------------------------------------------------//
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  useEffect(() => {
    if (oktaDomain === "" || oktaApiToken === "") setNextActive(false);
    else setNextActive(true);
  }, [oktaDomain, oktaApiToken]);

  return (
    <div className="bg-silverchalice font-[helvetica] h-full bg-opacity-5 px-7 py-10">
      <div className="container bg-white rounded-3xl text-[9pt] mx-auto px-4 py-8">
        <h3 className="text-xl font-bold mb-4">
          OKTA Authentication Guideline Sheet
        </h3>
        <hr className=" border-black mb-5" />
        <ol className="list-decimal pl-2 px-5 list-inside">
          <li className="mb-4">
            Enter below your OKTA domain:
            <div className=" bg-stone-400 my-1 w-fit ml-4 text-white px-2 font-mono rounded-md py-1">
              https://
              <span className="font-bold underline">your-okta-domain</span>
              .okta.com
            </div>
            <input
              type="text"
              name="okta_domain"
              id="okta_domain"
              placeholder="your-okta-domain"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setOktaDomain(e.target.value)}
            />
          </li>
          <li className="mb-4">Log in to your Okta admin dashboard.</li>
          <li className="mb-4">
            Navigate to the &quot;
            <span className="font-bold underline">Developer Console</span>&quot;
            in the top-right corner of the dashboard.
          </li>
          <li className="mb-4">
            Click on the &quot;
            <span className="font-bold underline">API</span>&quot; tab located
            in the top menu.
          </li>
          <li className="mb-4">
            On the API page, you will see a list of API options. Look for the
            &quot;
            <span className="font-bold underline">Tokens</span>&quot; as the tab
            and click on it.
          </li>
          <li className="mb-4">
            In the Tokens section, click on the &quot;
            <span className="font-bold underline">Create Token</span>&quot;
            button to generate a new API token.
          </li>
          <li className="mb-4">
            A dialog box will appear asking you to provide a name for the token.
            Enter:{" "}
            <span className=" bg-stone-400 w-fit text-white px-2 font-mono rounded-md py-1">
              AlphaSaas
            </span>
          </li>
          <li className="mb-4">
            After entering the token name, click on the &quot;
            <span className="font-bold underline">Create</span>
            &quot; button to generate the token.
          </li>
          <li className="mb-4">
            Once the token is created, you will see a success message along with
            the generated token value. Take note of the token value as it will
            not be shown again for security reasons.
          </li>
          <li className="mb-4">
            Copy the generated token and securely store it in a safe place. Note
            that this token grants access to your Okta organization's APIs, so
            treat it like a password and do not share it with unauthorized
            individuals.
            <input
              type="text"
              name="okta_api_token"
              id="okta_api_token"
              placeholder="Api Token"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setOktaApiToken(e.target.value)}
            />
          </li>
        </ol>
        <div className="flex justify-center">
          <button
            className={`${
              nextActive
                ? "bg-emerald hover:bg-hippiegreen cursor-pointer"
                : "bg-alto cursor-progress"
            } rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
            onClick={(e) => {
              e.preventDefault();
              if (nextActive) {
                oktaAuth(oktaApiToken, oktaDomain);
                router.push("/welcome/customize-access?code=success");
              }
            }}
          >
            Authenticate Now with AlphaSaas
          </button>
        </div>
      </div>
    </div>
  );
};

export default OktaLoginPage;
