import httpServices from "@/services/httpServices";
import { App_Config } from "@/app_config";
//--------------------------------------------------------------//
export const userLogin = async (user: any) => {
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
