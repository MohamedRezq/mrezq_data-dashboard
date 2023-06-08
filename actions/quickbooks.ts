import httpServices from "@/services/httpServices";
import {api_base_url_local} from "@/app_config";
//--------------------------------------------------------------//
export const quickbooksAuth = async (url: string | null) => {
  //TODO get organization_id from local storage
  try {
    await httpServices.post(
      `${api_base_url_local}/api/quickbooks/exchange-code`,
      {
        url: url,
        organizationId: localStorage.getItem("organizationId"),
        applicationId: 1, // 1-->quickbooks , 2-->zoho
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.close();
  } catch (error: any | null) {
    if (error.response.status === 400) console.log(error.response.data.message);
  }
};
