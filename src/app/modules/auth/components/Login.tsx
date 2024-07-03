
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { doLogin } from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { useAuth } from '../core/Auth'
import toastr from 'toastr';
import { AdminUserLoginResponse } from '../core/_models'
import STRING from '../../common-components/String'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, STRING.INVALID_EMAIL)
    .required(STRING.EMAIL_REQUIRED),
  password: Yup.string()
    .required(STRING.PASSWORD_REQUIRED),
})

const initialValues = {
  email: '',
  password: '',
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      const loginResponse: AdminUserLoginResponse | undefined = await doLogin(values.email, values.password);
      if (loginResponse?.success) {
        saveAuth(loginResponse.admin_data)
        setCurrentUser(loginResponse.admin_data)
        toastr.success(loginResponse.message || "");
      } else {
        saveAuth(undefined)
        setStatus(loginResponse?.message || "")
        setSubmitting(false)
        toastr.error(loginResponse?.message || "");
      }
      setLoading(false)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      <div className='text-center mb-11'>
        <h1 className='text-gray-900 fw-bolder mb-3'>{STRING.SIGN_IN}</h1>
      </div>

      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-gray-900'>{STRING.EMAIL}</label>
        <input
          placeholder={STRING.EMAIL}
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>{formik.errors.email}</div>
          </div>
        )}
      </div>

      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-gray-900'>{STRING.PASSWORD}</label>
        <div className='position-relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            className={clsx(
              'form-control bg-transparent',
              { 'is-invalid': formik.touched.password && formik.errors.password },
              {
                'is-valid': formik.touched.password && !formik.errors.password,
              }
            )}
            placeholder={STRING.PASSWORD}
            {...formik.getFieldProps('password')}
            autoComplete='off'
          />
       
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} position-absolute`}
            style={{
              cursor: "pointer",
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              fontSize: '1.25rem',
              color: "black"
            }}
          ></i>

          {formik.touched.password && formik.errors.password && (
            <div className='fv-plugins-message-container' style={{ position: 'absolute', bottom: '-20px', left: '0' }}>
              <div className='fv-help-block'>{formik.errors.password}</div>
            </div>
          )}
        </div>
      </div>


      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        <Link to={STRING.NAVIGATE_AUTH_FORGOT_PASSWORD}  style={{color: "black"}}>
          {STRING.FORGOT_PASSWORD}
        </Link>
      </div>

      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          style={{color: "black"}}
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>{STRING.CONTINUE}</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
             {STRING.PLEASE_WAIT}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>

    </form>
  )
}
