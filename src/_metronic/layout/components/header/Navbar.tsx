import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import {useAuth} from '../../../../app/modules/auth'

const itemClass = 'ms-1 ms-md-4'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
const userAvatarClass = 'symbol-35px'
const btnIconClass = 'fs-2'

const Navbar = () => {
  const {config} = useLayout()
  const {currentUser} = useAuth()
  const bgColors = ['warning', 'success', 'danger'];
  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];  
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
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
        <HeaderUserMenu />
      </div>
    </div>
  )
}

export {Navbar}
