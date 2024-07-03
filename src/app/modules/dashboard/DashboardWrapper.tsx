import {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { CardPayment } from './components/CardPayment'
import { useAuth } from '../auth'
import { getDashboardData,} from './core/_requests'
import { DashboardData, DashboardRequestModel, } from './core/_models'
import toastr from 'toastr';
import STRING from '../common-components/String'


const DashboardPage: FC = () => {
  const {currentUser} = useAuth()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
 
  useEffect(
    () => {
      const fetchData = async () => {
        if (currentUser != null && currentUser != undefined) {
          
          const dashboardRequestData: DashboardRequestModel = {
            user_id: currentUser._id
          }
          try {
            const dashboardResponse = await getDashboardData(dashboardRequestData);
            if (dashboardResponse?.success) {
              setDashboardData(dashboardResponse.dashboard_data || null)
            } else {
              toastr.error(dashboardResponse?.message || ""); 
            }
          } catch (error) {
            console.error(STRING.ERROR_FETCH_CONSOLE, error);
            toastr.error(STRING.ERROR_OCCURED_FETCH);
          }
        }
      };
      fetchData();
  }, [currentUser]);
  

  
  return (<>
      <Content>
        {/* begin::Row */}
        <div className='row gy-5 g-xl-8'>
          <div className='col-xl-4'>
          <CardPayment className='h-md-0 mb-5 mb-xl-10' 
              totalAdminUsers={dashboardData?.admin_user_data?.total_users} 
              activeAdminUsers={dashboardData?.admin_user_data?.active_users} 
              pendingAdminUsers={dashboardData?.admin_user_data?.pending_users} />
          </div>
        </div>
      
        {/* end::Row */}
      </Content>
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
