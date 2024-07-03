import STRING from '../../../common-components/String'
import { useListView } from '../../core/ListViewProvider'
import { AccountReportUserListSearchComponent } from './AccountReportUserListSearchComponent'
import { AccountReportUserListToolbar } from './AccountReportUserListToolbar'

const AccountReportHeader = () => {
    const { selected } = useListView()
    return (
        <>
            <div className='card-header pt-8'>
                <h3 className='fw-bolder m-0'>{STRING.FILTER}</h3>
            </div>

        </>
    )
}

export { AccountReportHeader }
