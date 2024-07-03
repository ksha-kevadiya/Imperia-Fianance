import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { AddNotificationUserRequestModel, AddNotificationUserResponse, NotificationUserListQueryResponse, DeleteNotificationUserRequestModel, DeleteNotificationUserResponse, EditNotificationUserRequestModel, GetNotificationUserDetailByIdRequestModel, GetNotificationUserDetailByIdResponse,GetAllNotificationCodeRequestModel, GetAllNotificationCodeResponse } from "./_models";
import { string } from "yup";
import { API_ENDPOINTS, API_KEY, CONTENT_TYPE_APPLICATION_JSON, CONTENT_TYPE_MULTIPART_FORMDATA } from '../../../Constants';
import STRING from "../../common-components/String";


const getNotificationUsersList = (userId?: string, page?: number, searchQuery?: string, sortBy?: string, sortOrder?: string, limit: number = 10): Promise<NotificationUserListQueryResponse | undefined> => {
  const restaurantListAPIRequestModel = {
    user_id: userId,
    page : page,
    limit : limit,
    search_query: searchQuery,
    sort_by: sortBy,
    sort_order: sortOrder
  };
  return axios
    .post(API_ENDPOINTS.GET_NOTIFICATION_USERS,restaurantListAPIRequestModel ,{headers: {
      'X-Api-Key': API_KEY
    }})
    .then((response: Response<NotificationUserListQueryResponse>) => response.data);
};


const addNotificationUser = async (addNotificationUserRequestData: AddNotificationUserRequestModel): Promise<AddNotificationUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.ADD_NOTIFICATION_USER, addNotificationUserRequestData, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type':CONTENT_TYPE_APPLICATION_JSON
      }
    });
    return response.data;
  } catch (error) {
    console.error(STRING.ERROR, error);
    return undefined;
  }
};

const getNotificationUserDetailById = async (getNotificationUserDetailByIdRequestData: GetNotificationUserDetailByIdRequestModel): Promise<GetNotificationUserDetailByIdResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.GET_NOTIFICATION_USER_DETAIL_BY_ID, getNotificationUserDetailByIdRequestData, {
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

const editNotificationUser = async (editNotificationUserRequestModel: EditNotificationUserRequestModel): Promise<AddNotificationUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.EDIT_NOTIFICATION_USER, editNotificationUserRequestModel, {
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

const deleteNotificationUser = async (deleteNotificationUserRequestModel: DeleteNotificationUserRequestModel): Promise<DeleteNotificationUserResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.DELETE_NOTIFICATION_USER, deleteNotificationUserRequestModel, {
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

const getAllNotificationCode = async (getAllNotificationCodeRequestModel: GetAllNotificationCodeRequestModel): Promise<GetAllNotificationCodeResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.GET_ALL_NOTIFICATION_CODE, getAllNotificationCodeRequestModel, {
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
  getNotificationUsersList,
  addNotificationUser,
  getNotificationUserDetailById,
  editNotificationUser,
  deleteNotificationUser,
  getAllNotificationCode
};
