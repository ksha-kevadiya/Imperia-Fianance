import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import {resetPasswordAdmin} from '../core/_requests'
import { AdminUserResetPasswordRequest, AdminUserResetPasswordResponse } from '../core/_models'
import toastr from 'toastr';
import STRING from '../../common-components/String';

const initialValues = {
  email: '',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
  .email(STRING.INVALID_EMAIL)
  .required(STRING.EMAIL_REQUIRED)
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      const adminUserResetPasswordRequest: AdminUserResetPasswordRequest = {
        email: values.email
      }
      const adminUserResetPasswordResponse: AdminUserResetPasswordResponse | undefined = await resetPasswordAdmin(adminUserResetPasswordRequest);
      if (adminUserResetPasswordResponse?.success) {
        toastr.success(adminUserResetPasswordResponse.message || "");
        formik.resetForm();
        navigate('/auth/login', { replace: true, state: { resetNavigation: true } });
      } else {
        toastr.error(adminUserResetPasswordResponse?.message || ""); 
      }
      setLoading(false)
    },
  })

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center mb-10'>
        {/* begin::Title */}
        <h1 className='text-gray-900 fw-bolder mb-3'>{STRING.FORGOT_PASSWORD}</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-500 fw-semibold fs-6'>
          {STRING.FORGOT_PASSWORD_EMAIL_TEXT}
        </div>
        {/* end::Link */}
      </div>

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-gray-900 fs-6'>{STRING.EMAIL}</label>
        <input
          type='email'
          placeholder=''
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
        <button type='submit' id='kt_password_reset_submit' className='btn btn-primary me-4' style={{color: "black"}}>
          <span className='indicator-label'>{STRING.SUBMIT}</span>
          {loading && (
            <span className='indicator-progress'>
              {STRING.PLEASE_WAIT}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-light'
            
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {STRING.CANCEL}
          </button>
        </Link>{' '}
      </div>
      {/* end::Form group */}
    </form>
  )
}
