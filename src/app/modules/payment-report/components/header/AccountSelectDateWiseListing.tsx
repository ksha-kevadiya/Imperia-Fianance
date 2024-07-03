import { FC } from "react";

const AccountSelectDateWiseListingView: FC = () => {
  return (
    <div
      className="d-flex flex-wrap align-items-center"
      style={{ gap: "10px" }}
    >
      <label htmlFor="fromDate">From Date</label>
      <div className="form-group" style={{ width: "168px", minWidth: "120px" }}>
        <input
          type="date"
          className="form-control"
          id="fromDate"
          name="fromDate"
        />
      </div>

      <label htmlFor="toDate">To Date</label>
      <div className="form-group" style={{ width: "168px", minWidth: "120px" }}>
        <input type="date" className="form-control" id="toDate" name="toDate" />
      </div>
    </div>
  );
};

export default AccountSelectDateWiseListingView;
