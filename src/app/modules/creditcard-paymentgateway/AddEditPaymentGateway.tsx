import { useState, FC, useEffect } from "react";
import * as Yup from "yup";
import QuillResizeImage from "quill-resize-image";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import STRING from "../../../app/modules/common-components/String";
import { Content } from "../../../_metronic/layout/components/content";
import { AddEditPageTitle } from "../common-components/AddEditPageTitle";
import { CardsWidget17 } from "../../../_metronic/partials/widgets";

const AddEditPaymentGatewayView: FC = () => {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    symptom_name: "",
    description: "",
    status: 1,
  });

  const handleT0Click = () => {
    navigate('/t0/carddetails');
  };

  const handleT1Click = () => {
    navigate('/t1/carddetails');
  };

  const handleOnSubmit = async (values: any) => {};

  return (
    <div className="card mb-5 mb-xl-10">
      <div id="kt_account_profile_details" className="collapse show">
        <div
          className="card-header border-1"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_connected_accounts"
          aria-expanded="true"
          aria-controls="kt_account_connected_accounts"
        >
          <AddEditPageTitle title={STRING.PAYMENT_GATEWAY} />
        </div>

        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {({ values, setFieldValue, handleChange, errors, touched }) => (
            <Form placeholder={""}>
              <div className="container">
                <div className="row justify-content-center mb-5">
                  <div className="col-lg-3 col-md-8 col-sm-12 mb-4">
                    <div
                      className="card card-flush shadow"
                      style={{
                        marginTop: "33px",
                        borderRadius: "10px",
                        border: "1px solid #e3e3e3",
                      }}
                    >
                      <div className="card-header pt-5" style={{backgroundColor: "#813fd6"}}>
                        <div className="card-title d-flex flex-column">
                          <div className="d-flex align-items-center">
                            <span className="fs-1 fw-semibold text-white me-1 fw-bolder align-self-start">
                            {STRING.T0_SETTLEMENT}
                            </span>
                            <span className="badge badge-light-success fs-base"></span>
                          </div>
                          <span className="text-white pt-1 fw-semibold fs-6">
                              {STRING.PAYMENT_GATEWAY}
                          </span>
                        </div>
                      </div>
                      
                      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                        <div className="d-flex flex-column w-100">
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.CREDIT}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center my-3">
                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.DEBIT}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#aba265" }}
                            ></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.PREPAID}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST1}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#b96f87" }}
                            ></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.BUSSINESS}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST2}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="card-footer pt-5">
                        <div className="card-title d-flex flex-column">
                          <div
                            className="d-flex align-items-center"
                            style={{ justifyContent: "center" }}
                          >
                            <button
                              className="btn btn-primary d-flex align-items-center"
                              style={{
                                width: "322px",
                                borderTop: "1px solid #ccc",
                                justifyContent: "center",
                              }}
                              onClick={handleT0Click}
                            >
                              {STRING.PROCESS_NOW}
                              <i className="bi bi-arrow-right me-2 ms-5"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-8 col-sm-12 mb-4">
                    <div
                      className="card card-flush shadow"
                      style={{
                        marginTop: "33px",
                        borderRadius: "10px",
                        border: "1px solid #e3e3e3",
                      }}
                    >
                      <div className="card-header pt-5"  style={{backgroundColor: "#813fd6"}}>
                        <div className="card-title d-flex flex-column">
                          <div className="d-flex align-items-center">
                            <span className="fs-1 fw-semibold text-white me-1 fw-bolder align-self-start">
                            {STRING.T1_SETTLEMENT}
                            </span>
                            <span className="badge badge-light-success fs-base"></span>
                          </div>
                          <span className="text-white pt-1 fw-semibold fs-6">
                              {STRING.PAYMENT_GATEWAY}
                          </span>
                        </div>
                      </div>
                      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                        <div className="d-flex flex-column w-100">
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.CREDIT}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T1_GST}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center my-3">
                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.DEBIT}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T1_GST}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#aba265" }}
                            ></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.PREPAID}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST1}
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center mb-3 my-3">
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#b96f87" }}
                            ></div>
                            <div className="text-gray-500 flex-grow-1 me-4">
                              {STRING.BUSSINESS}
                            </div>
                            <div className="fw-bolder text-gray-700 text-end">
                              {STRING.T0_GST2}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="card-footer pt-5">
                        <div className="card-title d-flex flex-column">
                          <div
                            className="d-flex align-items-center"
                            style={{ justifyContent: "center" }}
                          >
                            <button
                              className="btn btn-primary d-flex align-items-center"
                              style={{
                                width: "322px",
                                borderTop: "1px solid #ccc",
                                justifyContent: "center",
                              }}
                              onClick={handleT1Click}

                            >
                              {STRING.PROCESS_NOW}
                              <i className="bi bi-arrow-right me-2 ms-5"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const AddEditPaymentGateway = () => {
  return (
    <Content>
      {/* <PageTitle title={"Edit CMS"} /> */}
      <AddEditPaymentGatewayView />
    </Content>
  );
};

export default AddEditPaymentGateway;
