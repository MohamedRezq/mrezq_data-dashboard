import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import { quickbooksGetData, quickbooksSyncData } from "./quickbooks";
import { zohobooksGetData, zohobooksSyncData } from "./zohobooks";
import { zohopeopleGetData, zohopeopleSyncData } from "./zohopeople";
import { jiraGetData, jiraSyncData } from "./jira";
import { oktaGetData, oktaSyncData } from "./okta";
//--------------------------------------------------------------//
type userType = {
  email: string;
  password: string;
};

type UserIntegratedAppType = {
  application_id: string;
  organization_id: string;
  integration_status: string;
};

export const userLogin = async (user: userType) => {
  try {
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any | null) {
    console.log(error);
    return error.response;
  }
};
//--------------------------------------------------------------//
export const getLoggedUser = async (token: string) => {
  try {
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/users/get-user`,
      { token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any | null) {
    console.log(error);
    return error.response;
  }
};
//--------------------------------------------------------------//
export const syncUserData = async (userIntegratedAppsIds: number[]) => {
  const fromDate = new Date(
    new Date().getFullYear() - 1,
    new Date().getMonth(),
    new Date().getDate()
  ); // One year ago
  const toDate = new Date();
  const appResponse = new Map([]);
  let syncTime = null;
  for (let i = 0; i < userIntegratedAppsIds.length; i++) {
    switch (userIntegratedAppsIds[i]) {
      case 1: // Quickbooks
        const quickbooks_res = await quickbooksSyncData(
          new Date(fromDate).toISOString(),
          new Date(toDate).toISOString()
        );
        if (quickbooks_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            quickbooks_res?.data?.appData
          );
          syncTime = quickbooks_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 2:
        const zohobooks_res = await zohobooksSyncData(
          new Date(fromDate).toISOString(),
          new Date(toDate).toISOString()
        );
        if (zohobooks_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            zohobooks_res?.data?.appData
          );
          syncTime = zohobooks_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 3:
        const zohopeople_res = await zohopeopleSyncData();
        if (zohopeople_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            zohopeople_res?.data?.appData
          );
          syncTime = zohopeople_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      // case "4":
      //   const quickbooks_data = await quickbooksSyncData();
      //   break;
      case 5:
        const jira_res = await jiraSyncData();
        if (jira_res?.status === 200) {
          appResponse.set(userIntegratedAppsIds[i], jira_res?.data?.appData);
          syncTime = jira_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 6:
        const okta_res = await oktaSyncData();
        if (okta_res?.status === 200) {
          appResponse.set(userIntegratedAppsIds[i], okta_res?.data?.appData);
          syncTime = okta_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      default:
        break;
    }
  }
  return { appData: appResponse, syncTime: syncTime };
};
//--------------------------------------------------------------//
export const getUserData = async (
  userIntegratedAppsIds: number[],
  fromDate: string,
  toDate: string
) => {
  const appResponse = new Map([]);
  let syncTime = null;
  for (let i = 0; i < userIntegratedAppsIds.length; i++) {
    switch (userIntegratedAppsIds[i]) {
      case 1: // Quickbooks
        const quickbooks_res = await quickbooksGetData(fromDate, toDate);
        if (quickbooks_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            quickbooks_res?.data?.appData
          );
          syncTime = quickbooks_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 2:
        const zohobooks_res = await zohobooksGetData(fromDate, toDate);
        if (zohobooks_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            zohobooks_res?.data?.appData
          );
          syncTime = zohobooks_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 3:
        const zohopeople_res = await zohopeopleGetData();
        if (zohopeople_res?.status === 200) {
          appResponse.set(
            userIntegratedAppsIds[i],
            zohopeople_res?.data?.appData
          );
          syncTime = zohopeople_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      // case "4":
      //   const quickbooks_data = await quickbooksSyncData();
      //   break;
      case 5:
        const jira_res = await jiraGetData();
        if (jira_res?.status === 200) {
          appResponse.set(userIntegratedAppsIds[i], jira_res?.data?.appData);
          syncTime = jira_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      case 6:
        const okta_res = await oktaGetData();
        if (okta_res?.status === 200) {
          appResponse.set(userIntegratedAppsIds[i], okta_res?.data?.appData);
          syncTime = okta_res?.data?.syncTime;
        } else appResponse.set(userIntegratedAppsIds[i], null);
        break;
      default:
        break;
    }
  }
  return { appData: appResponse, syncTime: syncTime };
};
