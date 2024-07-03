export type AdminUserData = {
  total_users?: number
  active_users?: number
  pending_users?: number
  deleted_users?: number
}

export type AppUserData = {
  total_users?: number
  active_users?: number
  pending_users?: number
  deleted_users?: number
}
export type DoctorData = {
  total_doctor?: number
  active_doctor?: number
  pending_doctor?: number
  deleted_doctor?: number
}
export type SymptomData = {
  total_symptoms?: number
  active_symptoms?: number
  pending_symptoms?: number
  deleted_symptoms?: number
}
export type DieasesData = {
  total_disease?: number
  active_disease?: number
  pending_disease?: number
  deleted_disease?: number
}
export type QuestionData = {
  total_question?: number
  active_question?: number
  pending_question?: number
  deleted_question?: number
}


export type HalalTypeData = {
  _id?: string
  title?: string
  restaurant_count?: number
}

export type DashboardData = {
  admin_user_data?: AdminUserData
  app_user_data?: AppUserData
  doctor_data?: DoctorData
  symptoms_data?: SymptomData
  question_data?: QuestionData
  disease_data?: DieasesData

}

export interface DashboardResponse {
  success?: boolean
  message?: string
  dashboard_data?: DashboardData
}

export type DashboardRequestModel = {
  user_id?: string
}

export interface DownloadImagesResponse {
  success?: boolean
  message?: string
}

export interface UpdateStatusResponse {
  success?: boolean
  message?: string
}
