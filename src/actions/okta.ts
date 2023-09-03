import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//--------------------------------------------------------------//
export const oktaAuth = async (
  apiKey: string | null,
  oktaDomain: string | null
) => {
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/okta/exchange-code`,
      {
        organizationId: localStorage.getItem("organizationId"),
        applicationId: 6, // 1-->quickbooks , 2-->zohobooks, 3-->zohopeople, 4-->freshbooks, 5-->jira, 6--> okta
        apiKey,
        oktaDomain,
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
export const oktaSyncData = async () => {
  try {
    // await httpServices.post(
    //   `${App_Config.API_BASE_URL}/api/okta/validate-tokens`,
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
      `${App_Config.API_BASE_URL}/api/okta/sync-data`,
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
export const oktaGetData = async () => {
  try {
    // await httpServices.post(
    //   `${App_Config.API_BASE_URL}/api/okta/validate-tokens`,
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
      `${App_Config.API_BASE_URL}/api/okta/get-data`,
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
