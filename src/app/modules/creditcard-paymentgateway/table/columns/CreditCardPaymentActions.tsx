
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../_metronic/assets/ts/components'
import { ID, KTIcon, QUERIES } from '../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { deleteNotificationUser } from '../../core/_requests'
import { DeleteNotificationUserRequestModel, DeleteNotificationUserResponse } from '../../core/_models'
import STRING from '../../../common-components/String'

type Props = {
  id: string
  isDeleted: boolean
}

const CreditCardPaymentActions: FC<Props> = ({ id, isDeleted }) => {
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
        const deleteNotificationUserRequestModel: DeleteNotificationUserRequestModel = {
          template_id: userId,
        };
        const deleteNotificationUserResponse: DeleteNotificationUserResponse | undefined = await deleteNotificationUser(deleteNotificationUserRequestModel);
        
        if (deleteNotificationUserResponse?.success) {
          toastr.success(deleteNotificationUserResponse.message || "");
          queryClient.invalidateQueries()
        } else {
          toastr.error(deleteNotificationUserResponse?.message || ""); 
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
              navigate(STRING.NAVIGATE_NOTIFICATION_EDIT, { state: { userId: id } });
            }}
          >
            <KTIcon iconName={STRING.ICON_EYE} className='fs-3' />
          </a>
        ) : (
          <>
            <a
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
              onClick={() => {
                navigate(STRING.NAVIGATE_NOTIFICATION_EDIT, { state: { userId: id } });
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

export { CreditCardPaymentActions }
