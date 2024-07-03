import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import AddEditAdminUser from '../modules/payment-report/AddEditAccountReportUser'
import { DashboardWrapper } from '../modules/dashboard/DashboardWrapper'
import ChangePassword from '../modules/payment-report/ChangePassword'
import MyProfile from '../modules/payment-report/MyProfile'
import STRING from '../modules/common-components/String'
import AccountReportUsers from '../modules/payment-report/AccountReportUsers'
import CardReportUsers from '../modules/payment-report/CardReportUsers'
import PaymentGatewayUsers from '../modules/payment-report/PaymentGatewayUsers'
import AddEditCreditCardPayment from '../modules/creditcard-paymentgateway/AddEditCreditCardPayment'
import AddEditPaymentGateway from '../modules/creditcard-paymentgateway/AddEditPaymentGateway'
import AddEditT0CardDetails from '../modules/creditcard-paymentgateway/AddEditT0CardDetails'
import AddEditT1CardDetails from '../modules/creditcard-paymentgateway/AddEditT1CardDetails'


const PrivateRoutes = () => {
  const AdminUserPage = lazy(() => import('../modules/payment-report/AccountReportUsers'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path={STRING.PATH_DASHBOARD} element={<DashboardWrapper />} />
        <Route
          path='account/view/*'
          element={
            <SuspensedView>
              <AccountReportUsers />
            </SuspensedView>
          }
        />
        <Route
          path='card/view/*'
          element={
            <SuspensedView>
              <CardReportUsers />
            </SuspensedView>
          }
        />
        <Route
          path='payment/gateway/view/*'
          element={
            <SuspensedView>
              <PaymentGatewayUsers />
            </SuspensedView>
          }
        />
        <Route
          path='/creditcard/billpay/*'
          element={
            <SuspensedView>
              <AddEditCreditCardPayment />
            </SuspensedView>
          }
        />
        <Route
          path='/payment/gateway/*'
          element={
            <SuspensedView>
              <AddEditPaymentGateway />
            </SuspensedView>
          }
        />
        <Route
          path='/t0/carddetails/*'
          element={
            <SuspensedView>
              <AddEditT0CardDetails />
            </SuspensedView>
          }
        />
        <Route
          path='/t1/carddetails/*'
          element={
            <SuspensedView>
              <AddEditT1CardDetails />
            </SuspensedView>
          }
        />
      
        
        <Route
          path='admin/changepassword/*'
          element={
            <SuspensedView>
              <ChangePassword />
            </SuspensedView>
          }
        />
        <Route
          path='admin/myprofile/*'
          element={
            <SuspensedView>
              <MyProfile />
            </SuspensedView>
          }
        />



        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
