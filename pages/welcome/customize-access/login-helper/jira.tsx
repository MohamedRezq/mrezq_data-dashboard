import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { App_Config } from "@/config";
import { jiraAuth } from "@/src/actions";
import Link from "next/link";
//-----> Components <-----------------------------------------//

//-----> Assets <---------------------------------------------//

//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

const JiraLoginPage = () => {
  //----------------------------------------------------------------------------------//
  const [jiraDomain, setJiraDomain] = useState("");
  const [jiraApiToken, setJiraApiToken] = useState("");
  const [email, setEmail] = useState("");
  const [nextActive, setNextActive] = useState(false);
  //----------------------------------------------------------------------------------//
  const router = useRouter();
  //----------------------------------------------------------------------------------//
  useEffect(() => {
    if (jiraDomain === "" || jiraApiToken === "") setNextActive(false);
    else setNextActive(true);
  }, [jiraDomain, jiraApiToken]);

  return (
    <div className="bg-silverchalice font-[helvetica] h-full bg-opacity-5 px-7 py-10">
      <div className="container bg-white rounded-3xl text-[9pt] mx-auto px-4 py-8">
        <h3 className="text-xl font-bold mb-4">
          JIRA Authentication Guideline Sheet
        </h3>
        <hr className=" border-black mb-5" />
        <ol className="list-decimal pl-2 px-5 list-inside">
          <li className="mb-4">
            Enter below your JIRA domain:
            <div className=" bg-stone-400 my-1 w-fit ml-4 text-white px-2 font-mono rounded-md py-1">
              https://
              <span className="font-bold underline">your-jira-domain</span>
              .atlassian.net
            </div>
            <input
              type="text"
              name="jira_domain"
              id="jira_domain"
              placeholder="your-jira-domain"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setJiraDomain(e.target.value)}
            />
          </li>
          <li className="mb-4">
            Enter below your JIRA account:
            <input
              type="email"
              name="jira_email"
              id="jira_email"
              placeholder="example: username@gmail.com"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="mb-4">
            Navigate to the{" "}
            <Link href="https://id.atlassian.com/manage-profile/security">
              Security tab on admin dashboard
            </Link>
            .
          </li>
          <li className="mb-4">
            Undet the API tokens section, click on the &quot;
            <span className="font-bold underline">
              Create and manage API tokens
            </span>
            &quot; button to generate a new API token.
          </li>
          <li className="mb-4">
            Click on the &quot;
            <span className="font-bold underline">Create API token</span>&quot;
            button. Enter label:{" "}
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
            Once the token is created, you will see the generated token value.
            Take note of the token value as it will not be shown again for
            security reasons.
          </li>
          <li className="mb-4">
            Copy the generated token and securely store it in a safe place. Note
            that this token grants access to your Jira organization&apos;s APIs,
            so treat it like a password and do not share it with unauthorized
            individuals.
            <input
              type="text"
              name="jira_api_token"
              id="jira_api_token"
              placeholder="Api Token"
              className="w-full border rounded my-2 ml-4 py-2 px-4"
              onChange={(e) => setJiraApiToken(e.target.value)}
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
                jiraAuth(jiraApiToken, jiraDomain, email);
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

export default JiraLoginPage;
