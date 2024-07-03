import {ID, Response} from '../../../../_metronic/helpers'
import { AdminUserModel } from '../../auth'

export type AdminData = {
  phone_number: any
  _id?: string
  first_name?: string
  last_name?: string
  email?: string
  country_id?: string
  isd_code?: string
  mobile_number?: string
  password?: string
  photo?: string
  email_verified?: boolean
  mobile_verified?: boolean
  status: number
  is_deleted?: boolean
  created_date?: string
  modified_date?: string
}

export type AdminUsersQueryResponse = {
  limit: number
  totalPages: number | undefined
  totalCount: number | undefined
  currentPage: number | undefined
  success: boolean
  message: string
  users: AdminData[]
};

export type AdminDataAPIRequestModel = {
  page: number 
  limit: number
  search_query: string
}

export interface ChangePasswordDetails {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const changePasswordInitValues: ChangePasswordDetails = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export type ChangePasswordResponse = {
  success: boolean
  message: string
};

export interface UpdateProfileResponse {
  success?: boolean
  message?: string
  admin_data?: AdminUserModel
}


export const updateProfileInitValues: AdminUserModel = {
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  country_id: "",
  isd_code: "",
  mobile_number: "",
  photo: ""
}

export type UpdateProfileRequestModel = {
  user_id: string
  first_name: string
  last_name: string
  email: string
  mobile_number: string
  new_email: string
  new_phone_number: string
  photo: any
}

export const adminInitValues: AdminData = {
  first_name: "",
  last_name: "",
  email: "",
  country_id: "",
  isd_code: "",
  phone_number: "",
  password: "",
  photo: "",
  status: 1,
  is_deleted: false
};

export type DeleteAdminUserRequestModel = {
  user_id?: string
}

export interface DeleteAdminUserResponse {
  success?: boolean
  message?: string
}

export type GetAdminUserDetailByIdRequestModel = {
  user_id?: string
}

export interface GetAdminUserDetailByIdResponse {
  success?: boolean
  message?: string
  user_data?: AdminData
}

export interface LocationState {
  userId?: string;
}

export type EditAdminUserRequestModel = {
  user_id?: string,
  first_name: string
  last_name: string
  email: string
  mobile_number: string
  new_email: string
  new_phone_number: string
  photo: any,
  status: number
}

export interface AddAdminUserResponse {
  success?: boolean
  message?: string
  user_data?: AdminData
}

export type AddAdminUserRequestModel = {
  first_name: string
  last_name: string
  email: string
  countryId: string
  isdCode: string
  mobile_number: string
  password: string
  email_verified: boolean
  mobile_verified: boolean
  photo: any,
  status: number
}
