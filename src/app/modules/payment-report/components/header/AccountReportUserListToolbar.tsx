import {KTIcon} from '../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import { useNavigate } from 'react-router-dom';
import STRING from '../../../common-components/String';
import { KTArrowIcon } from '../../../../../_metronic/helpers/components/KTArrowIcon';
import React from 'react';


const AccountReportUserListToolbar = () => {
  const navigate = useNavigate();
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate("")
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      
      <button type='button' className='btn btn-primary' onClick={()=>{
         navigate('/admin/add/');
      }} style={{color: "black"}}>
        <KTArrowIcon iconName='plus' className='fs-2' />
        {STRING.ADD_ADMIN_USER}
      </button>
     
    </div>
  )
}

export {AccountReportUserListToolbar}
