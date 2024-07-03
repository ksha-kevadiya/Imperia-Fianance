
import { FC, useEffect } from 'react'
import {  useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../_metronic/assets/ts/components'
import { ID, KTIcon } from '../../../../../_metronic/helpers'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { deleteAdminUser } from '../../core/_requests'
import { DeleteAdminUserRequestModel, DeleteAdminUserResponse } from '../../core/_models'
import STRING from '../../../common-components/String'

type Props = {
  id: string
  isDeleted: boolean
}

const AccountReportUserActions: FC<Props> = ({ id, isDeleted }) => {
  const navigate = useNavigate();
  const { query } = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleDeleteUser = (userId: string) => {
    Swal.fire({
      title: STRING.SWAL_TITLE,
      text: STRING.SWAL_TEXT,
      icon: STRING.SWAL_ICON,
      showCancelButton: true,
      confirmButtonColor: STRING.SWAL_CONFIRMBUTTONCOLOUR,
      cancelButtonColor: STRING.SWAL_CANCELBUTTONCOLOUR,
      confirmButtonText: STRING.SWAL_CONFIRMBUTTONTEXT,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteAdminUserRequestModel: DeleteAdminUserRequestModel = {
          user_id: userId
        };
        const deleteAdminUserResponse: DeleteAdminUserResponse | undefined = await deleteAdminUser(deleteAdminUserRequestModel);
        if (deleteAdminUserResponse?.success) {
          toastr.success(deleteAdminUserResponse.message || "");
          queryClient.invalidateQueries()
        } else {
          toastr.error(deleteAdminUserResponse?.message || "");
        }
      }
    });
  };

  return (
    <>
      <div className='d-flex justify-content-end flex-shrink-0'>
        {isDeleted ? (
          <a
            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
            onClick={() => {
              navigate(STRING.NAVIGATE_ADMIN_EDIT, { state: { userId: id } });
            }}
          >
            <KTIcon iconName={STRING.ICON_EYE} className='fs-3' />
          </a>
        ) : (
          <>
            <a
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
              onClick={() => {
                navigate(STRING.NAVIGATE_ADMIN_EDIT, { state: { userId: id } });
              }}
            >
              <KTIcon iconName={STRING.ICON_PENCIL} className='fs-3' />
            </a>
            <a
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
              onClick={() => {
                handleDeleteUser(id)
              }}
            >
              <KTIcon iconName={STRING.ICON_TRASH} className='fs-3' />
            </a>
          </>
        )}
      </div>
    </>
  )
}

export { AccountReportUserActions }
