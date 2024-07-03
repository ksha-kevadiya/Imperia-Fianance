import {KTCard, KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import { Content } from '../../../_metronic/layout/components/content'
import { CreditCardPaymentTable } from './table/CreditCardPaymentTable'
import { CreditCardPaymentListHeader } from './components/header/CreditCardPaymentListHeader'
import {ListViewProvider, useListView} from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { PageTitle } from '../common-components/PageTitle'
import STRING from '../common-components/String'


const NotificationList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <CreditCardPaymentListHeader />
        <CreditCardPaymentTable />
      </KTCard>
      {itemIdForUpdate !== undefined && null}
    </>
  )
}

const CreditCardPaymentPage = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
     <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <Content>
            <PageTitle title = {STRING.NOTIFICATION_LIST} />
            <NotificationList />
          </Content>
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
    </>
  )
}

export default CreditCardPaymentPage
