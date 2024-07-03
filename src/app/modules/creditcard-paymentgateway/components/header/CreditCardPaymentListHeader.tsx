import {useListView} from '../../core/ListViewProvider'
import {CreditCardPaymentListSearchComponent} from './CreditCardPaymentListSearchComponent'
import { CreditCardPaymentListToolbar } from './CreditCardPaymentListToolbar'

const CreditCardPaymentListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <CreditCardPaymentListSearchComponent />
      <div className='card-toolbar'>
        <CreditCardPaymentListToolbar />
      </div>
    </div>
  )
}

export {CreditCardPaymentListHeader}
