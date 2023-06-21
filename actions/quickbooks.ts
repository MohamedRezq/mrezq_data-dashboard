import httpServices from "@/services/httpServices";
import { App_Config } from "@/app_config";
//--------------------------------------------------------------//
export const quickbooksAuth = async (url: string | null) => {
  //TODO get organization_id from local storage
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/quickbooks/exchange-code`,
      {
        url: url,
        organizationId: 1, //localStorage.getItem("organizationId"),
        applicationId: 1, // 1-->quickbooks , 2-->zoho
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
    if (error.response.status === 400) console.log(error.response.data.message);
  }
};

export const quickbooksSyncData = async () => {
  //TODO get organization_id from local storage
  try {
    await httpServices.post(
      `${App_Config.API_BASE_URL}/api/quickbooks/validate-tokens`,
      {
        organizationId: 1,
        //applicationId: 1, // 1-->quickbooks , 2-->zoho
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await httpServices.post(
      `${App_Config.API_BASE_URL}/api/quickbooks/sync-data`,
      {
        organizationId: 1,
        //applicationId: 1, // 1-->quickbooks , 2-->zoho
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response: ", response.data);
    return { status: response.status, data: response.data };
  } catch (error: any | null) {
    return {
      status: error.response.status,
      statusText: error.response.statusText,
    };
  }
};
