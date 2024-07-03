import { FooterWrapper } from '../../footer'
import { SidebarMenuMain } from './SidebarMenuMain'

const SidebarMenu = () => {
  return (
    <div className='app-sidebar-menu overflow-hidden flex-column-fluid'>
      <div
        id='kt_app_sidebar_menu_wrapper'
        className='app-sidebar-wrapper hover-scroll-overlay-y my-5'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-dependencies='#kt_app_sidebar_logo, #kt_app_sidebar_footer'
        data-kt-scroll-wrappers='#kt_app_sidebar_menu'
        data-kt-scroll-offset='5px'
        data-kt-scroll-save-state='true'
      >
        <div
          className='menu menu-column menu-rounded menu-sub-indention px-3'
          id='#kt_app_sidebar_menu'
          data-kt-menu='true'
          data-kt-menu-expand='false'
        >
          <SidebarMenuMain />
         
        </div>
      </div>
      {/* <div className='text-gray-900 order-2 order-md-1' style={{
       color:"red",
        marginTop: "-35px", display: "flex", justifyContent: "flex-start", marginLeft: "18px"}} >
        <span className='text-muted fw-semibold me-1'>
          {new Date().getFullYear().toString()}&copy;
        </span>
        <a
          href=''
          target='_blank'
          className='text-white text-hover-primary'
          style={{
            zIndex: 10
            
          }}
        >
          Wellness solution
        </a>
      </div> */}
    </div>
    
  )
}

export { SidebarMenu }
