import { Content } from '../../../_metronic/layout/components/content'
import { PageTitle } from '../common-components/PageTitle'
import * as Yup from 'yup'
import { useState, FC } from 'react'
import { useFormik } from 'formik'
import { ChangePasswordDetails, ChangePasswordResponse, changePasswordInitValues as initialValues } from './core/_models'
import { changePassword } from './core/_requests'
import { useAuth } from '../auth'
import toastr from 'toastr';
import STRING from '../common-components/String'
import { AddEditPageTitle } from '../common-components/AddEditPageTitle'

const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required(STRING.CURRENT_PASSWORD_REQUIRED),
  newPassword: Yup.string()
    .min(3, STRING.NEW_PASSWORD_THREE_CHARACTER)
    .max(50, STRING.NEW_PASSWORD_FIFTY_CHARACTER)
    .required(STRING.NEW_PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .test('passwords-match', STRING.NEW_CONFIRM_PASSWORD_MATCH, function (value) {
      const newPassword = this.parent.newPassword;
      return !newPassword || value === newPassword;
    })
    .nullable()
    .required(STRING.CONFIRM_PASSWORD_REQUIRED),
})

const ChangePasswordView: FC = () => {
  const { currentUser, logout } = useAuth()
  const [loading, setLoading] = useState(false)
  const [currentshowPassword, setcurrentshowPassword] = useState(false);
  const [newshowPassword, setnewshowPassword] = useState(false);
  const [confirmshowPassword, setconfirmshowPassword] = useState(false);

  const formik = useFormik<ChangePasswordDetails>({
    initialValues,
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values: ChangePasswordDetails) => {
      setLoading(true)
      const changePasswordResponse: ChangePasswordResponse | undefined = await changePassword(currentUser?._id || '', values.currentPassword, values.newPassword);
      if (changePasswordResponse?.success) {
        toastr.success(changePasswordResponse.message || "");
        formik.resetForm();
      } else {
        toastr.error(changePasswordResponse?.message || "");
      }
      setLoading(false)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div id='kt_account_profile_details' className='collapse show'>
        <div
          className='card-header border-0'
          data-bs-toggle='collapse'
          data-bs-target='#kt_account_connected_accounts'
          aria-expanded='true'
          aria-controls='kt_account_connected_accounts'
        >
          <AddEditPageTitle title={STRING.CHANGE_PASSWORD} />
        </div>

        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>{STRING.CURRENT_PASSWORD}</span>
              </label>
              <div className='col-lg-8 fv-row position-relative'>
                <div className="input-group">
                  <input
                    type={currentshowPassword ? "text" : "password"}
                    className="form-control form-control-lg form-control-solid"
                    style={{ borderRadius: "7px" }}
                    placeholder={STRING.PASSWORD}
                    {...formik.getFieldProps("currentPassword")}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setcurrentshowPassword(!currentshowPassword)}
                    style={{
                      position: 'absolute',
                      right: '0px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: '1000',
                    }}
                  >
                    <i
                      className={`bi ${currentshowPassword ? "bi-eye-slash" : "bi-eye"}`}
                      style={{ fontSize: '1.25rem', color: 'black' }}
                    ></i>
                  </button>
                </div>
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.currentPassword}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span >{STRING.NEW_PASSWORD}</span>
              </label>
              <div className='col-lg-8 fv-row position-relative'>
                <div className="input-group">
                  <input
                    type={newshowPassword ? "text" : "password"}
                    className="form-control form-control-lg form-control-solid"
                    style={{ borderRadius: "7px" }}
                    placeholder={STRING.PASSWORD}
                    {...formik.getFieldProps("newPassword")}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setnewshowPassword(!newshowPassword)}
                    style={{
                      position: 'absolute',
                      right: '0px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: '1000',
                    }}
                  >
                    <i
                      className={`bi ${newshowPassword ? "bi-eye-slash" : "bi-eye"}`}
                      style={{ fontSize: '1.25rem', color: 'black' }}
                    ></i>
                  </button>
                </div>
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.newPassword}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>{STRING.CONFIRM_PASSWORD}</span>
              </label>

              <div className='col-lg-8 fv-row position-relative'>
                <div className="input-group">
                  <input
                    type={confirmshowPassword ? "text" : "password"}
                    className="form-control form-control-lg form-control-solid"
                    style={{ borderRadius: "7px" }}
                    placeholder={STRING.PASSWORD}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setconfirmshowPassword(!confirmshowPassword)}
                    style={{
                      position: 'absolute',
                      right: '0px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: '1000',
                    }}
                  >
                    <i
                      className={`bi ${confirmshowPassword ? "bi-eye-slash" : "bi-eye"}`}
                      style={{ fontSize: '1.25rem', color: 'black' }}
                    ></i>
                  </button>

                </div>

                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.confirmPassword}</div>
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

const ChangePassword = () => {
  return (
    <Content>
      <PageTitle title={STRING.CHANGE_PASSWORD} />
      <ChangePasswordView />
    </Content>
  )
}

export default ChangePassword
