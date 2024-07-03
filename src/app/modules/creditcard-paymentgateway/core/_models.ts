import { string } from 'yup'
import {ID, Response} from '../../../../_metronic/helpers'


export type NotificationUserListData = {
  _id?: string
  status?: string
  is_deleted?: boolean
  message: string
  code: string
  title: string
  totalPages: number
  totalCount: number
  currentPage: number
  success: boolean
}

export type NotificationUserListQueryResponse = {
  success: boolean
  message: string
  notification_templates: NotificationUserListData[] | undefined
  totalCount: number
  totalPages: number
  currentPage: number
};

export type NotificationUserDetail = {
  is_deleted: any
  message: string
  code: string
  title: any
  _id?: string
  mobile_verified?: boolean
  status: number
}

export interface AddNotificationUserResponse {
  success?: boolean
  message?: string
  user_data?: NotificationUserDetail
}

export type AddNotificationUserRequestModel = {
  code: string
  message:string
  title: string
  mobile_verified: boolean
  status: number
}


export const notificationUserDetailInitValues: NotificationUserDetail = {
  _id: "",
  status: 1,
  message: '',
  code: "",
  title: "",
  is_deleted: false
};

export interface LocationState {
  userId?: string;
}

export type GetNotificationUserDetailByIdRequestModel = {
  template_id?: string    
}

export interface GetNotificationUserDetailByIdResponse {
  success?: boolean
  message?: string
  template_detail?: NotificationUserDetail
  total_device_count?: number
}

export type EditNotificationUserRequestModel = {
  template_id?: string,
  title: any
  message: string
  code: string  
  status: number
}

export type DeleteNotificationUserRequestModel = {
  template_id?: string,
}

export interface DeleteNotificationUserResponse {
  success?: boolean
  message?: string
}

export type AllNotificationCodeData = {
  _id?: string
  code?: string
}


export type GetAllNotificationCodeRequestModel = {
}

export interface GetAllNotificationCodeResponse {
  success?: boolean
  message?: string
  notifications?: string[]
}