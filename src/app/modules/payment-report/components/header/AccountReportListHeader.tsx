import { useListView } from '../../core/ListViewProvider';
import { AccountReportUserListSearchComponent } from './AccountReportUserListSearchComponent';
import AccountSelectDateWiseListing from './AccountSelectDateWiseListing';

const AccountReportListHeader = () => {
  const { selected } = useListView();
  return (
    <div className='card-header border-0 pt-6 d-flex justify-content-between align-items-center flex-wrap'>
      <div className='d-flex flex-wrap align-items-center' style={{ gap: '10px' }}>
        <AccountReportUserListSearchComponent />
        <AccountSelectDateWiseListing />
      </div>
      <div className='card-toolbar'>
        {/* Toolbar content if needed */}
      </div>
    </div>
  );
};

export { AccountReportListHeader };
