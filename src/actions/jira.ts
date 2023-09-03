import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//--------------------------------------------------------------//
export const jiraAuth = async (
  apiKey: string | null,
  jiraDomain: string | null,
  email: string | null
) => {
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/jira/exchange-code`,
      {
        organizationId: localStorage.getItem("organizationId"),
        applicationId: 5, // 1-->quickbooks , 2-->zohobooks, 3-->zohopeople, 4-->freshbooks, 5-->jira, 6--> jira
        api_key: apiKey,
        domain: jiraDomain,
        email,
        //apiKey: "00xzM9LkM_xw2fmneMN1WxTMDjlAvezttk8FGMyzwX", //Hardcoded now, should be removed
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.close();

    return;
  } catch (error: any | null) {
    if (error?.response?.status !== 500)
      console.log(error.response.data.message);
    return error.response.data.message;
  }
};
//--------------------------------------------------------------//
export const jiraSyncData = async () => {
  try {
    // await httpServices.post(
    //   `${App_Config.API_BASE_URL}/api/jira/validate-tokens`,
    //   {
    //     organizationId: localStorage.getItem("organizationId"),
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/jira/sync-data`,
      {
        organizationId: localStorage.getItem("organizationId"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error: any | null) {
    return error.response;
  }
};
//--------------------------------------------------------------//
export const jiraGetData = async () => {
  try {
    // await httpServices.post(
    //   `${App_Config.API_BASE_URL}/api/jira/validate-tokens`,
    //   {
    //     organizationId: localStorage.getItem("organizationId"),
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/jira/get-data`,
      {
        organizationId: localStorage.getItem("organizationId"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error: any | null) {
    return error.response;
  }
};
