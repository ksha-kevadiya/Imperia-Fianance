const BASE_URL = 'http://192.168.1.9:3000'
// const BASE_URL = 'http://192.168.0.221:3000'
// const BASE_URL = 'https://datingapp-api.loopbots.in'
export const API_KEY = 'f7d5c46d-2adf-411b-afc2-90a1413a8808'
export const CONTENT_TYPE_APPLICATION_JSON = 'application/json'
export const CONTENT_TYPE_MULTIPART_FORMDATA = 'multipart/form-data'
export const TEXT_EDITOR_API_KEY = 'ik9pl174103m87rv1lo50dtovtbe8agwc2cv2qlgje23r8tp'


export const API_ENDPOINTS = {

    LOGIN: BASE_URL + '/admin/doLogin',
    GET_ADMIN_USERS: BASE_URL + '/admin/getAllAdminUsers',
    CHANGE_PASSWORD: BASE_URL + '/admin/changePassword',
    UPDATE_PROFILE: BASE_URL + '/admin/updateProfile',
    GET_DASHBOARD_DATA: BASE_URL + '/admin/getDashboardData',
    
    GET_APP_USERS: BASE_URL + '/admin/getAppUsers',
    ADD_APP_USER: BASE_URL + '/admin/addAppUser',
    DELETE_ADMIN_USER: BASE_URL + '/admin/deleteAdminUser',
    GET_APP_USER_DETAIL_BY_ID: BASE_URL + '/admin/getUserById',
    EDIT_APP_USER: BASE_URL + '/admin/editAppUser',
    DELETE_APP_USER: BASE_URL + '/admin/deleteAppUser',
    GET_DEVICE_LIST_BY_APP_USER_ID: BASE_URL + '/app/getDeviceListByUserId',

    
    GET_ADMIN_USER_DETAIL_BY_ID: BASE_URL + '/admin/getAdminUserById',
    EDIT_ADMIN_USER: BASE_URL + '/admin/updateAdminUser',
    ADD_ADMIN_USER: BASE_URL + '/admin/addAdminUser',
    RESET_PASSTPWORD_ADMIN: BASE_URL + '/admin/resetPassword',


    ADD_ADMIN_QUESTION: BASE_URL + '/question/add',
    EDIT_ADMIN_QUESTION: BASE_URL + '/question/editQuestion',
    DELETE_ADMIN_QUESTION: BASE_URL + '/question/delete',
    GET_ALL_QUESTION: BASE_URL + '/admin/getAllQuestions',
    GET_QUESTIONS_DETAIL_BY_ID: BASE_URL + '/admin/getAllQuestionById',


    ADD_SYMPTOMS: BASE_URL + '/symptom/addSymptomsByAge',
    EDIT_SYMPTOMS: BASE_URL + '/symptom/editSymptomsByAge',
    DELETE_SYMPTOMS: BASE_URL + '/symptom/deleteSymptom',
    GET_SYMPTOMS_DETAIL_BY_ID: BASE_URL + '/symptom/getSymptomById',
    GET_ALL_SYMPTOMS: BASE_URL + '/symptom/getAllSymptoms',
    GET_ALL_SYMPTOMS_QUESTION_NAME_BY_ID: BASE_URL + '/symptom/getAllquestionsName',
    GET_ALL_SYMPTOMS_AGE_GROUP_NAME: BASE_URL + '/ageGroup/getAllageGroup',
    GET_QUESTION_ORDERING_NAME_BY_ID: BASE_URL + '/symptom/questionBySymptoms',
    GET_SYMTPOM_ORDERING_BY_ID: BASE_URL + '/symptom/getSymptomOrderingById',
    EDIT_QUESTION_ORDERING_NAME_BY_ID: BASE_URL + '/symptom/addEditSymptomQuestionOrder',
    ADD_SERIOUS_CONDITION_CRITERIA: BASE_URL + '/symptom/add_serious_condition_criteria',
    EDIT_SERIOUS_CONDITION_CRITERIA: BASE_URL + '/symptom/edit_serious_condition_criteria',


    GET_ALL_CMS: BASE_URL + '/admin/getAllCms',
    GET_CMS_BY_ID: BASE_URL + '/admin/getCmsById',
    EDIT_CMS: BASE_URL + '/admin/editCms',
    GET_HTML_DATA_BY_CODE: BASE_URL + '/admin/gethtmlByCode',


    GET_ALL_DISEASES: BASE_URL + '/diseases/getAllDiseases',
    DELETE_DISEASES: BASE_URL + '/diseases/deleteDiseases',
    DELETE_DISEASES_ASSOCIATED_QUESTION: BASE_URL + '/diseases/deleteDiseaseAssociatedQuestion',
    GET_DISEASES_BY_ID: BASE_URL + '/diseases/getDiseasesById',
    GET_SINGLE_SYMPTOMS_DATA_BY_DISEASES_BY_ID: BASE_URL + '/diseases/getSingleSymptomsDataByDiseasesId',
    EDIT_DISEASES: BASE_URL + '/diseases/edit',
    EDIT_DISEASES_ASSOCIATED_QUESTION: BASE_URL + '/diseases/editDiseasesAssociatedQuestions',
    ADD_DISEASES_ASSOCIATED_QUESTION: BASE_URL + '/diseases/addDiseaseAssociatedQuestion',
    ADD_DISEASES: BASE_URL + '/diseases/add',   
    GET_SYMPTOM_DATA: BASE_URL + '/diseases/getAllSymptomsName',
    GET_SYMPTOM_DATA_BY_DISEASE_ID: BASE_URL + '/diseases/getSymptomsDataByDiseasesId',


    GET_NOTIFICATION_USERS: BASE_URL + '/notificationtemplate/getAllTemplates',
    ADD_NOTIFICATION_USER: BASE_URL + '/notificationtemplate/add',
    EDIT_NOTIFICATION_USER: BASE_URL + '/notificationtemplate/update',
    DELETE_NOTIFICATION_USER: BASE_URL + '/notificationtemplate/delete',
    GET_DEVICE_LIST_BY_NOTIFICATION_USER_ID: BASE_URL + '/admin/getDeviceListByAppUserId',
    GET_NOTIFICATION_USER_DETAIL_BY_ID: BASE_URL + '/notificationtemplate/getTemplateById',
    GET_ALL_NOTIFICATION_CODE: BASE_URL + '/notification_template_code/getNotifications',


    GET_HEALTH_PROFILE_BY_USER: BASE_URL + '/app/getHealthProfilesByUser',
    DELETE_HEALTH_PROFILE: BASE_URL + '/app/deleteHealthProfile',


    GET_DOCTOR: BASE_URL + '/admin/getAllDoctors',
    ADD_DOCTOR: BASE_URL + '/admin/addDoctor',
    DELETE_DOCTOR: BASE_URL + '/admin/deleteDoctor',
    GET_DOCTOR_DETAIL_BY_ID: BASE_URL + '/admin/getDoctorById',
    EDIT_DOCTOR: BASE_URL + '/admin/updateDoctor',

}

    
