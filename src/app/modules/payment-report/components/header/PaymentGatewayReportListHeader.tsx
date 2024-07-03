import {useListView} from '../../core/ListViewProvider'
import {AccountReportUserListSearchComponent} from './AccountReportUserListSearchComponent'
import { AccountReportUserListToolbar } from './AccountReportUserListToolbar'
import { PaymentGatewayUserListSearchComponent } from './PaymentGatewayUserListSearchComponent'

const PaymentGatewayReportListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PaymentGatewayUserListSearchComponent />
      {/* <div className='card-toolbar'>
        <AdminUserListToolbar />
      </div> */}
    </div>
  )
}

export {PaymentGatewayReportListHeader}
