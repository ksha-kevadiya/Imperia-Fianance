import { KTCard, KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'
import { Content } from '../../../_metronic/layout/components/content'
import { PageTitle } from '../common-components/PageTitle'
import * as Yup from 'yup'
import { useState, FC, useRef } from 'react'
import { useFormik } from 'formik'
import { UpdateProfileRequestModel, UpdateProfileResponse } from './core/_models'
import { AdminUserModel, setAuth, useAuth } from '../auth'
import { updateProfile } from './core/_requests'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import STRING from '../common-components/String'
import blackphoto from '../../../../public/media/avatars/blank.png'


const MyProfileSchema = Yup.object().shape({
  first_name: Yup.string().required(STRING.FIRST_NAME_REQUIRED),
  last_name: Yup.string().required(STRING.LAST_NAME_REQUIRED),
  email: Yup.string()
    .email(STRING.INVALID_EMAIL)
    .required(STRING.EMAIL_REQUIRED),
  mobile_number: Yup.string()
    .required(STRING.PHONE_NUMBER_REQUIRED)
})

const MyProfileView: FC = () => {
  const { currentUser, saveAuth, setCurrentUser } = useAuth()
  const initialValues: AdminUserModel = {
    _id: currentUser?._id || "",
    first_name: currentUser?.first_name || "",
    last_name: currentUser?.last_name || "",
    email: currentUser?.email || "",
    country_id: currentUser?.country_id || "",
    isd_code: currentUser?.isd_code || "",
    mobile_number: currentUser?.mobile_number || "",
    photo: currentUser?.photo || ""
  }

  const [data, setData] = useState<AdminUserModel>(initialValues)

  const updateData = (fieldsToUpdate: Partial<AdminUserModel>): void => {
    const updatedData = { ...data, ...fieldsToUpdate };
    setData(updatedData);
  }
  const [loading, setLoading] = useState(false)

  const formik = useFormik<AdminUserModel>({
    initialValues,
    validationSchema: MyProfileSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(async () => {
        let newEmail = ""
        let newPhoneNumber = ""
        if (currentUser?.email != values.email) {
          newEmail = values.email
        }
        if (currentUser?.mobile_number != values.mobile_number) {
          newPhoneNumber = values.mobile_number
        }

        const updateProfileRequestData: UpdateProfileRequestModel = {
          user_id: currentUser?._id || "",
          first_name: values.first_name || "",
          last_name: values.last_name || "",
          email: currentUser?.email || "",
          mobile_number: currentUser?.mobile_number || "",
          new_email: newEmail,
          new_phone_number: newPhoneNumber,
          photo: values.photo || "",
        };
        const updateProfileResponse: UpdateProfileResponse | undefined = await updateProfile(updateProfileRequestData);
        if (updateProfileResponse?.success) {
          saveAuth(updateProfileResponse.admin_data)
          setCurrentUser(updateProfileResponse.admin_data)
          toastr.success(updateProfileResponse.message || "");
        } else {
          toastr.error(updateProfileResponse?.message || "");
        }
        setLoading(false)
      }, 1000)
    },
  })

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    formik.setFieldValue('photo', selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        updateData({ photo: imageUrl })
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveAvatar = () => {
    formik.setFieldValue("photo", "");
    updateData({ photo: "" });

  };

  const handleKeyPress = (event: { charCode: any; preventDefault: () => void; }) => {
    const charCode = event.charCode;
    const key = String.fromCharCode(charCode);

    if (!/[0-9+]/.test(key)) {
      event.preventDefault();
    }
  };

  return (
    <div className='card mb-5 mb-xl-10' style={{ marginTop: '20px' }}>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                {STRING.PHOTO}
              </label>
              <div className="col-lg-8 fv-row">
                <div className="image-input image-input-outline" data-kt-image-input="true">
                  <div className="image-input-wrapper w-125px h-125px">
                    {data.photo ? (
                      <img src={data.photo} alt="Selected" className="w-100 h-100 rounded" />
                    ) : (
                      <img src={blackphoto} alt="No image selected" className="w-100 h-100 rounded" />
                    )}
                  </div>

                  <label
                    className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    data-bs-dismiss="click"
                    title="Change avatar"
                  >
                    <i className="ki-duotone ki-pencil fs-6"><span className="path1"></span><span className="path2"></span></i>
                    <input
                      type="file"
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      style={{ display: "none" }}
                    />
                    <input type="hidden" name="avatar_remove" />
                  </label>

                  <span
                    className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    data-bs-dismiss="click"
                    title="Remove avatar"
                    onClick={handleRemoveAvatar}
                    style={{ display: "inline-block" }}
                  >
                    <i className="ki-outline ki-cross fs-3" style={{ marginTop: "4px" }}></i>
                  </span>
                </div>

              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>{STRING.FULL_NAME}</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder={STRING.FIRST_NAME}
                      {...formik.getFieldProps('first_name')}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.first_name}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder={STRING.LAST_NAME}
                      {...formik.getFieldProps('last_name')}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.last_name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>{STRING.EMAIL}</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='email'
                  className='form-control form-control-lg form-control-solid'
                  placeholder={STRING.EMAIL}
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.email}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>{STRING.PHONE_NUMBER}</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder={STRING.PHONE_NUMBER}
                  maxLength={11}
                  onKeyPress={handleKeyPress}
                  {...formik.getFieldProps('mobile_number')}
                />
                {formik.touched.mobile_number && formik.errors.mobile_number && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.mobile_number}</div>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading} style={{ color: 'black' }}>
              {!loading && `${STRING.SAVE_CHANGES}`}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block', color: "black" }}>
                  {STRING.PLEASE_WAIT}{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const MyProfile = () => {
  return (
    <Content>
      <PageTitle title={STRING.MY_PROFILE} />
      <MyProfileView />
    </Content>
  )
}

export default MyProfile
