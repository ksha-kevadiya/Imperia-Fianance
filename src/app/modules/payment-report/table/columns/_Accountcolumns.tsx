import {Column} from 'react-table'
import {AccountReportCustomHeader} from './AccountReportCustomHeader'
import {AdminData} from '../../core/_models'
import { NameWithPhoto } from '../../../common-components/NameWithPhoto'
import { TableColumnText } from '../../../common-components/TableColumnText'
import { Status } from '../../../common-components/Status'
import { Deleted } from '../../../common-components/Deleted'
import STRING from '../../../common-components/String'

const usersColumns: ReadonlyArray<Column<AdminData>> = [
  {
    Header: (props) => <AccountReportCustomHeader tableProps={props} title={STRING.NAME} className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <NameWithPhoto first_name={props.data[props.row.index].first_name} last_name={props.data[props.row.index].last_name} photo={props.data[props.row.index].photo} />,
  },
  {
    Header: (props) => <AccountReportCustomHeader tableProps={props} title={STRING.EMAIL} className='min-w-125px' />,
    id: 'email',
    Cell: ({...props}) => <TableColumnText text={props.data[props.row.index].email} />
  },
  {
    Header: (props) => (
      <AccountReportCustomHeader tableProps={props} title={STRING.PHONE_NUMBER} className='min-w-125px' />
    ),
    id: 'phone_number',
    Cell: ({...props}) => <TableColumnText text={props.data[props.row.index].phone_number} />,
  },
  {
    Header: (props) => (
      <AccountReportCustomHeader tableProps={props} title={STRING.STATUS} className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <Status status={props.data[props.row.index].status?.toString()} type='admin_users' />,
  },
  {
    Header: (props) => (
      <AccountReportCustomHeader tableProps={props} title={STRING.DELETED} className='min-w-125px' />
    ),
    id: 'is_deleted',
    Cell: ({...props}) => <Deleted is_deleted={props.data[props.row.index].is_deleted} />,
  },
  {
    Header: (props) => (
      <AccountReportCustomHeader tableProps={props} title={STRING.CREATED_DATE} className='min-w-125px' />
    ),
    id: 'created_date',
    Cell: ({...props}) => <TableColumnText text={props.data[props.row.index].created_date} />
  },
  // {
  //   Header: (props) => (
  //     <AdminUserCustomHeader tableProps={props} title={STRING.ACTIONS} className='text-end min-w-100px' />
  //   ),
  //   id: 'actions',
  //   Cell: ({...props}) => <AdminUserActions id={props.data[props.row.index]._id ?? ""} isDeleted={props.data[props.row.index].is_deleted || false} />,
  // },
]

export {usersColumns}
