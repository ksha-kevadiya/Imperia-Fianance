import {KTCard, KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import { Content } from '../../../_metronic/layout/components/content'
import { AccountReportUserTable } from './table/AccountReportUserTable'
import { AccountReportListHeader } from './components/header/AccountReportListHeader'
import {ListViewProvider, useListView} from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { PageTitle } from '../common-components/PageTitle'
import STRING from '../common-components/String'
import { AccountReportHeader } from './components/header/AccountReportHeader'
import { CardReportHeader } from './components/header/CardReportHeader'
import { CardReportListHeader } from './components/header/CardReportListHeader'


const CardUsersList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <CardReportHeader />
        <CardReportListHeader />
        <AccountReportUserTable />
      </KTCard>
      {itemIdForUpdate !== undefined && null}
    </>
  )
}

const CardReportUsers = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
     <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <Content>
            <PageTitle title = {STRING.ADMIN_USERS} />
            <CardUsersList />
          </Content>
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
    </>
  )
}

export default CardReportUsers
