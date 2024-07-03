import {KTIcon} from '../../../../../_metronic/helpers'
import STRING from '../../../common-components/String';
import {useListView} from '../../core/ListViewProvider'
import { useNavigate } from 'react-router-dom';

const CreditCardPaymentListToolbar = () => {
  const navigate = useNavigate();
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate("")
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      
      <button type='button' className='btn btn-primary' onClick={()=>{
         navigate(STRING.NAVIGATE_NOTIFICATION_ADD);
      }}>
        <KTIcon iconName='plus' className='fs-2' />
        {STRING.ADD_NOTIFICATION_TEMPLATE}
      </button>
     
    </div>
  )
}

export {CreditCardPaymentListToolbar}
