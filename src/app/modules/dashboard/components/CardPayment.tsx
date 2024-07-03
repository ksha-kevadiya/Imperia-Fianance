import { FC } from "react";
import STRING from "../../common-components/String";
import { useNavigate } from "react-router-dom";

type Props = {
  className: string;
  totalAdminUsers?: number;
  activeAdminUsers?: number;
  pendingAdminUsers?: number;
};

const CardPayment: FC<Props> = ({
  className,
  totalAdminUsers,
  activeAdminUsers,
  pendingAdminUsers,
}) => {

  const navigate = useNavigate();

  const handleCreditCardPaymentClick = () => {
    navigate("/creditcard/billpay");

  };

  const handlePaymentGatwayClick = () => {
    navigate("/payment/gateway");

  };
  return (
    <div className={`card card-flush ${className}`} style={{ width: "317%" }}>
      <div className="card-header pt-5">
        <div className="mb-6">
          <div className="card-title">
            {STRING.SELECT_FROM_RANGE_OF_SERVICE_OFFERINGS}
          </div>
        </div>

        <div className="mb-6 d-flex gap-3">
          <div className="card-title">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleCreditCardPaymentClick}
            >
              <span
                className="indicator-progress"
                style={{ display: "block" }}
              >
                {STRING.CARD_PAYMENT}
              </span>
            </button>
          </div>
          
          <div className="card-title">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handlePaymentGatwayClick}

            >
              <span
                className="indicator-progress"
                style={{ display: "block" }}
              >
                {STRING.PAYMENT_GATEWAY}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardPayment };
