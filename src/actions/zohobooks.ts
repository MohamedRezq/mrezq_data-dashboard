import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//--------------------------------------------------------------//
export const zohobooksAuth = async (code: string | null) => {
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/zohobooks/exchange-code`,
      {
        code: code,
        organizationId: localStorage.getItem("organizationId") || 1,
        applicationId: 2, // 1-->quickbooks , 2-->zohobooks, 3-->zohopeople, 4-->freshbooks,
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
//--------------------------------------------------------------//
export const zohobooksSyncData = async (fromDate: string, toDate: string) => {
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/zohobooks/validate-tokens`,
      {
        organizationId: localStorage.getItem("organizationId"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/zohobooks/sync-data`,
      {
        organizationId: localStorage.getItem("organizationId"),
        fromDate: new Date(fromDate).toISOString(),
        toDate: new Date(toDate).toISOString(),
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
export const zohobooksGetData = async (fromDate: string, toDate: string) => {
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/zohobooks/validate-tokens`,
      {
        organizationId: localStorage.getItem("organizationId"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/zohobooks/get-data`,
      {
        organizationId: localStorage.getItem("organizationId"),
        fromDate: new Date(fromDate).toISOString(),
        toDate: new Date(toDate).toISOString(),
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
