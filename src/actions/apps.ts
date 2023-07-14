import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//--------------------------------------------------------------//
export const getAppsForIntegration = async () => {
  try {
    const response = await httpServices.get(
      `${App_Config.API_BASE_URL}/api/applications?integration_only=true`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any | null) {
    console.log(error);
    return error.response;
  }
};
