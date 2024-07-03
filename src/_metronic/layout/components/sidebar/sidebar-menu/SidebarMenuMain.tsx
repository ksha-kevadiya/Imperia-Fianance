import { useIntl } from "react-intl";
import { KTIcon } from "../../../../helpers";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { FooterWrapper } from "../../footer";
import STRING from "../../../../../app/modules/common-components/String";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to={STRING.NAVIGATE_DASHBOARD}
        icon="home"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}

      />
      <SidebarMenuItemWithSub
        to={STRING.NAVIGATE_ADMIN}
        title={STRING.REPORT}
        icon="bi bi-file-earmark-text"
      >
        <SidebarMenuItem
          to={STRING.NAVIGATE_ACCOUNT_REPORT}
          title={STRING.VIEW_ACCOUNT_REPORT}
          hasBullet={true}
        />
        <SidebarMenuItem
          to={STRING.NAVIGATE_CARD_REPORT}
          title={STRING.VIEW_CARD_REPORT}
          hasBullet={true}
        />
        <SidebarMenuItem
          to={STRING.NAVIGATE_PAYMENT_GATEWAY_REPORT}
          title={STRING.VIEW_PAYMENT_GATEWAY_REPORT}
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
 
     
      <SidebarMenuItemWithSub
        to={STRING.NAVIGATE_NOTIFICATION}
        title={STRING.SETTINGS}
        icon="bi bi-gear"
      >
        <SidebarMenuItem
          to={STRING.NAVIGATE_NOTIFICATION_VIEW}
          title={STRING.VIEW_NOTIFICATION_TEMPLATE}
          hasBullet={true}
        />
        <SidebarMenuItem
          to={STRING.NAVIGATE_NOTIFICATION_ADD}
          title={STRING.ADD_NOTIFICATION_TEMPLATE}
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> 


      {/* <SidebarMenuItem
        to={STRING.NAVIGATE_CMS_VIEW}
        icon='bi bi-ui-checks'
        title={STRING.CMS_PAGE}
      />  */}

    </>
  );
};

export { SidebarMenuMain };
