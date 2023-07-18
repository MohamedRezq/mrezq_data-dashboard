import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
//-----> Components <-----------------------------------------//

//-----> Assets <---------------------------------------------//

//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

const OktaLoginPage = () => {
  //----------------------------------------------------------------------------------//
  const [oktaDomain, setOktaDomain] = useState("");
  const [oktaClientId, setOktaClientId] = useState("");
  const [oktaClientSecret, setOktaClientSecret] = useState("");
  const [nextActive, setNextActive] = useState(false);
  //----------------------------------------------------------------------------------//
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  useEffect(() => {
    if (oktaDomain === "" || oktaClientId === "" || oktaClientSecret === "")
      setNextActive(false);
    else setNextActive(true);
  }, [oktaDomain, oktaClientId, oktaClientSecret]);

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
            Navigate to the "
            <span className="font-bold underline">Applications</span>" menu.
          </li>
          <li className="mb-4">
            Click on the "
            <span className="font-bold underline">Add Application</span>" button
            and select "
            <span className="font-bold underline">Create New App</span>
            ".
          </li>
          <li className="mb-4">
            Choose "<span className="font-bold underline">Single-Page App</span>
            " as the application type.
          </li>
          <li className="mb-4">
            Give your app name:{" "}
            <span className=" bg-stone-400 w-fit text-white px-2 font-mono rounded-md py-1">
              AlphaSaas
            </span>
          </li>
          <li className="mb-4">
            Under "
            <span className="font-bold underline">Grant type allowed</span>",
            select "
            <span className="font-bold underline">Authorization Code</span>" and
            "<span className="font-bold underline">Refresh Token</span>".
          </li>
          <li className="mb-4">
            In the "
            <span className="font-bold underline">Login redirect URIs</span>"
            field, enter{" "}
            <div className=" bg-stone-400 w-fit mx-3 mt-1 text-white px-2 font-mono rounded-md py-1">
              http://localhost:3000/welcome/customize-access
            </div>
          </li>
          <li className="mb-4">
            Click "<span className="font-bold underline">Save</span>" to create
            the new application.
          </li>
          <li className="mb-4">
            Under "
            <span className="font-bold underline">Client Credentials</span>"
            section, Copy and Paste the values below:
            <input
              type="text"
              name="okta_client_id"
              id="okta_client_id"
              placeholder="Client ID"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setOktaClientId(e.target.value)}
            />
            <input
              type="text"
              name="okta_client_secret"
              id="okta_client_secret"
              placeholder="Client Secret"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setOktaClientSecret(e.target.value)}
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
                localStorage.setItem("oktaDomain", oktaDomain);
                localStorage.setItem("oktaClientId", oktaClientId);
                localStorage.setItem("oktaClientSecret", oktaClientSecret);
                router.push(
                  `https://${oktaDomain}.okta.com/oauth2/v1/authorize?client_id=${oktaClientId}&response_type=code&scope=${process.env.NEXT_PUBLIC_OKTA_SCOPE}&redirect_uri=${process.env.NEXT_PUBLIC_JIRA_REDIRECT_URL}&state=${process.env.NEXT_PUBLIC_OKTA_STATE}`
                );
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
