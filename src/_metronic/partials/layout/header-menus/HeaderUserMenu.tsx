
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'
import clsx from 'clsx'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()

  const bgColors = ['warning', 'success', 'danger'];
  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];  
  
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            {currentUser?.photo ? (
       <img alt={currentUser?.first_name?.charAt(0).toUpperCase()} src={currentUser?.photo} />



            ) : (
              <div
                className={clsx(
                  'symbol-label fs-3',
                  `bg-light-${randomBgColor}`,
                  `text-${randomBgColor}`
                )}
              >
                {(currentUser?.first_name ?? '').charAt(0).toUpperCase() + (currentUser?.last_name ?? '').charAt(0).toUpperCase()}
              </div>  
            )}
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {currentUser?.first_name} {currentUser?.last_name}
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/admin/myprofile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/admin/changepassword'} className='menu-link px-5'>
          Change Password
        </Link>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
