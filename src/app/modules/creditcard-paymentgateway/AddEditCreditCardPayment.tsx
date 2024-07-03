import { useState, FC, useEffect } from "react";
import * as Yup from "yup";
import QuillResizeImage from "quill-resize-image";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import STRING from "../../../app/modules/common-components/String";
import { Content } from "../../../_metronic/layout/components/content";
import { AddEditPageTitle } from "../common-components/AddEditPageTitle";

const AddEditCreditCardPaymentView: FC = () => {
  const navigate = useNavigate();


  const [initialValues, setInitialValues] = useState({
    symptom_name: "",
    description: "",
    status: 1,
  });

  const handleOnSubmit = async (values: any) => {};

  return (
    <div className="card mb-5 mb-xl-10">
      <div id="kt_account_profile_details" className="collapse show">
        <div
          className="card-header border-0"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_connected_accounts"
          aria-expanded="true"
          aria-controls="kt_account_connected_accounts"
        >
          <AddEditPageTitle title={STRING.CREDT_CARD_BILL_PAYMENT} />
        </div>

        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {({ values, setFieldValue, handleChange, errors, touched }) => (
            <Form placeholder={""}>
              <div className="card-body border-top">
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.CUSTOMER_MOBILE}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.CUSTOMER_MOBILE}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.CARD_BANK}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.CARD_BANK}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.CARD_NUMBER}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.CARD_NUMBER}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.CARD_OWNER_NAME}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.CARD_OWNER_NAME}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.BILL_AMOUNT}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.BILL_AMOUNT}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6">
                    <span className="required"> {STRING.TPIN}</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder={STRING.TPIN}
                      name="symptom_name"
                      onChange={handleChange}
                      value={values.symptom_name}
                    />

                    {errors.symptom_name && touched.symptom_name ? (
                      <div style={{ color: "red" }}>{errors.symptom_name}</div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="card-footer d-flex justify-content-end py-6 px-9">
                <button
                  type="submit"
                  className="btn btn-primary me-3"
                  // disabled={loading}
                  onClick={() => handleOnSubmit(values)}
                >
                  {/* {!loading && "Save Changes"} */}
                  {/* {loading && ( */}
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    {STRING.PLEASE_WAIT}{" "}
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                  {/* )} */}
                </button>

                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => handleOnSubmit(values)}
                >
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    {STRING.CANCEL}{" "}
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const AddEditCreditCardPayment = () => {
  return (
    <Content>
      {/* <PageTitle title={"Edit CMS"} /> */}
      <AddEditCreditCardPaymentView />
    </Content>
  );
};

export default AddEditCreditCardPayment;
