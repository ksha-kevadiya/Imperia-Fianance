import {FC} from 'react'

type Props = {
  status?: string,
  type?: string
}

const Status: FC<Props> = ({status, type}) => {
  const restaurantStatusTitleArray = ['Pending', 'Approved', 'Draft'];
  const userStatusTitleArray = ['Deactive', 'Active', 'Suspended'];
  const advertisementStatusTitleArray = ['Deactive', 'Active'];
  return (
  <>
    <div className={`badge badge-light-${status == '1' ? 'success' : 'warning'} fw-bolder`}>
      {(type == 'restaurant') ? (restaurantStatusTitleArray[parseInt(status ?? '-1')]) : (type == 'advertisement') ? (advertisementStatusTitleArray[parseInt(status ?? '-1')]) : (userStatusTitleArray[parseInt(status ?? '-1')]) }
    </div>
  </>
)}

export {Status}
