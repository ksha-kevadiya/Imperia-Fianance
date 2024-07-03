import axios from "axios";
import { AdminUserLoginResponse, AdminUserResetPasswordRequest, AdminUserResetPasswordResponse, AuthModel, UserModel } from "./_models";
import { API_ENDPOINTS, API_KEY, CONTENT_TYPE_APPLICATION_JSON } from '../../../Constants';
import STRING from "../../common-components/String";

const API_URL = import.meta.env.VITE_APP_API_URL;

const doLogin = async (email: string, password: string): Promise<AdminUserLoginResponse | undefined> => {
  const loginReqestModel = {
    email,
    password,
  };
  try {
    const response = await axios.post(API_ENDPOINTS.LOGIN, loginReqestModel, {
      headers: {
        'X-Api-Key': API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR_CHANGING_PASSWORD, error);
    return undefined;
  }
};

const resetPasswordAdmin = async (adminUserResetPasswordRequest: AdminUserResetPasswordRequest): Promise<AdminUserResetPasswordResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.RESET_PASSTPWORD_ADMIN, adminUserResetPasswordRequest, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': CONTENT_TYPE_APPLICATION_JSON
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR, error);
    return undefined;
  }
};

export {
  doLogin,
  resetPasswordAdmin
};
