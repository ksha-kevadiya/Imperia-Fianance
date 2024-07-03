import {Route, Routes} from 'react-router-dom'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import STRING from '../common-components/String'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={STRING.PATH_LOGIN} element={<Login />} />
      <Route path={STRING.PATH_FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
