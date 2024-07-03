import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { AdminUsersQueryResponse, UpdateProfileResponse, ChangePasswordResponse, UpdateProfileRequestModel, DeleteAdminUserResponse, DeleteAdminUserRequestModel, GetAdminUserDetailByIdRequestModel, GetAdminUserDetailByIdResponse, EditAdminUserRequestModel, AddAdminUserResponse, AddAdminUserRequestModel} from "./_models";
import { API_ENDPOINTS, API_KEY, CONTENT_TYPE_APPLICATION_JSON, CONTENT_TYPE_MULTIPART_FORMDATA } from '../../../Constants';
import STRING from "../../common-components/String";

const getAdminUsers = (userId?: string, page?: number, searchQuery?: string, sortBy?: string, sortOrder?: string,  limit: number = 10): Promise<AdminUsersQueryResponse | undefined> => {
  const adminDataAPIRequestModel = {
    user_id: userId,
    page : page,
    limit : limit,
    search_query: searchQuery,
    sort_by: sortBy,
    sort_order: sortOrder
  };
  return axios
    .post(API_ENDPOINTS.GET_ADMIN_USERS, adminDataAPIRequestModel, {headers: {
      'X-Api-Key': API_KEY
    }})
    .then((response: Response<AdminUsersQueryResponse>) => response.data);
};

const changePassword = async (userId: string, currentPassword: string, newPassword: string): Promise<ChangePasswordResponse | undefined> => {
  const changePasswordReqestModel = {
    user_id: userId,
    current_password: currentPassword,
    new_password: newPassword
  };
  
  try {
    const response = await axios.post(API_ENDPOINTS.CHANGE_PASSWORD, changePasswordReqestModel, {
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

const updateProfile = async (updateProfileRequestData: UpdateProfileRequestModel): Promise<UpdateProfileResponse | undefined> => {
  const updateProfileRequestModel = {
    user_id: updateProfileRequestData.user_id,
    first_name: updateProfileRequestData.first_name,
    last_name: updateProfileRequestData.last_name,
    email: updateProfileRequestData.email,
    mobile_number: updateProfileRequestData.mobile_number,
    new_email: updateProfileRequestData.new_email,
    new_phone_number: updateProfileRequestData.new_phone_number,
    photo: updateProfileRequestData.photo
  };
  
  try {
    const response = await axios.post(API_ENDPOINTS.UPDATE_PROFILE, updateProfileRequestModel, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': CONTENT_TYPE_MULTIPART_FORMDATA
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR_CHANGING_PASSWORD, error);
    return undefined;
  }
};

const deleteAdminUser = async (deleteAdminUserRequestModel: DeleteAdminUserRequestModel): Promise<DeleteAdminUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.DELETE_ADMIN_USER, deleteAdminUserRequestModel, {
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

const getAdminUserDetailById = async (getAppUserDetailByIdRequestData: GetAdminUserDetailByIdRequestModel): Promise<GetAdminUserDetailByIdResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.GET_ADMIN_USER_DETAIL_BY_ID, getAppUserDetailByIdRequestData, {
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

const addAdminUser = async (addAdminUserRequestData: AddAdminUserRequestModel): Promise<AddAdminUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.ADD_ADMIN_USER, addAdminUserRequestData, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': CONTENT_TYPE_MULTIPART_FORMDATA
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR, error);
    return undefined;
  }
};

const editAdminUser = async (editAdminUserRequestModel: EditAdminUserRequestModel): Promise<AddAdminUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.EDIT_ADMIN_USER, editAdminUserRequestModel, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': CONTENT_TYPE_MULTIPART_FORMDATA
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR, error);
    return undefined;
  }
};


export {
  getAdminUsers,
  changePassword,
  updateProfile,
  deleteAdminUser,
  getAdminUserDetailById,
  addAdminUser,
  editAdminUser
};
