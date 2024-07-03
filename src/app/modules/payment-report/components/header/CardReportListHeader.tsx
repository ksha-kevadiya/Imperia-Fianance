import {useListView} from '../../core/ListViewProvider'
import {AccountReportUserListSearchComponent} from './AccountReportUserListSearchComponent'
import { AccountReportUserListToolbar } from './AccountReportUserListToolbar'
import { CardReportUserListSearchComponent } from './CardReportUSerListSearchComponent'

const CardReportListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CardReportUserListSearchComponent />
      {/* <div className='card-toolbar'>
        <AdminUserListToolbar />
      </div> */}
    </div>
  )
}

export {CardReportListHeader}
