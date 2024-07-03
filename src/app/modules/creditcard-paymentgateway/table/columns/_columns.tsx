import {Column} from 'react-table'

import {CreditCardPaymentActions} from './CreditCardPaymentActions'
import {CreditCardPaymentUserListCustomHeader} from './CreditCardPaymentUserListCustomHeader'
import {NotificationUserListData} from '../../core/_models'
import { TableColumnText } from '../../../common-components/TableColumnText'
// import { Status } from '../../../common-components/Status'
import { Deleted } from '../../../common-components/Deleted'
import { NameWithPhoto } from '../../../common-components/NameWithPhoto'
import { Status } from '../../../common-components/Status'
import STRING from '../../../common-components/String'

const usersColumns: ReadonlyArray<Column<NotificationUserListData>> = [
  {
    Header: (props) => (
      <CreditCardPaymentUserListCustomHeader tableProps={props} title={STRING.CODE} className='min-w-125px' />
    ),
    id: 'code',
    Cell: ({...props}) => <TableColumnText text={props.data[props.row.index].code} />,
  },
  
  {
    Header: (props) => (
      <CreditCardPaymentUserListCustomHeader tableProps={props} title={STRING.TITLE} className='min-w-125px' />
    ),
    id: 'title',
    Cell: ({...props}) => <TableColumnText text={props.data[props.row.index].title} />,
  },
  {
    Header: (props) => (
      <CreditCardPaymentUserListCustomHeader tableProps={props} title={STRING.STATUS} className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <Status status={props.data[props.row.index].status} />,
  },

  {
    Header: (props) => (
      <CreditCardPaymentUserListCustomHeader tableProps={props} title={STRING.ACTIONS} className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <CreditCardPaymentActions id={props.data[props.row.index]._id ?? ""} isDeleted={props.data[props.row.index].is_deleted || false}  />,
  },
]

export {usersColumns}
