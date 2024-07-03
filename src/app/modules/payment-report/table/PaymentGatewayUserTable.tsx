import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {usersColumns} from './columns/_Accountcolumns'
import {AdminData} from '../core/_models'
import {AccountReportUserListLoading} from '../components/loading/AccountReportUserListLoading'
import {AccountReportUserListPagination} from '../components/pagination/AccountReportUserListPagination'
import {KTCardBody} from '../../../../_metronic/helpers'
import STRING from '../../common-components/String'

const PaymentGatewayUserTable = () => {
  const users = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => users, [users])
  const columns = useMemo(() => usersColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<AdminData>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<AdminData>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    {STRING.NO_MATCHING_RECORD_FOUND}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AccountReportUserListPagination />
      {isLoading && <AccountReportUserListLoading />}
    </KTCardBody>
  )
}

export {PaymentGatewayUserTable}
