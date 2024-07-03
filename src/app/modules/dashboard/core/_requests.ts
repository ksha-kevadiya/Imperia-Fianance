import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { DashboardRequestModel, DashboardResponse, DownloadImagesResponse, UpdateStatusResponse } from "./_models";
import { string } from "yup";
import { API_ENDPOINTS, API_KEY, CONTENT_TYPE_APPLICATION_JSON, CONTENT_TYPE_MULTIPART_FORMDATA } from '../../../Constants';


const getDashboardData = async (dashboardRequestData: DashboardRequestModel): Promise<DashboardResponse | undefined> => {
  try {
    const response = await axios.post(API_ENDPOINTS.GET_DASHBOARD_DATA, dashboardRequestData, {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': CONTENT_TYPE_APPLICATION_JSON
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};

export {
  getDashboardData,
};
