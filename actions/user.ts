import httpServices from "@/services/httpServices";
import {api_base_url_local} from "@/app_config"
//--------------------------------------------------------------//
export const userLogin = async (user: any) => {
  try {
    const response = await httpServices.post(
      `${api_base_url_local}/api/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any | null) {
    console.log(error)
    return error.response
  }
};
