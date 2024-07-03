// QuestionsListPagination.js
import clsx from 'clsx';
import { useQueryRequest } from '../../core/QueryRequestProvider';
import { useQueryResponseLoading, useQueryResponsePagination } from '../../core/QueryResponseProvider';
import STRING from '../../../common-components/String';

const CreditCardPaymentListPagination = () => {
  const pagination = useQueryResponsePagination();
  const isLoading = useQueryResponseLoading();
  const { state, updateState } = useQueryRequest();

  const handlePageChange = (page: any) => {
    if (!page || isLoading || pagination.page === page) {
      return;
    }
    updateState({ page });
  };

  const handleItemsPerPageChange = (event: any) => {
    const itemsPerPage = event.target.value === 'all' ? Infinity : parseInt(event.target.value, 10);
    updateState({ items_per_page: (itemsPerPage as any), page: 1 });
  };

  const PAGINATION_PAGES_COUNT = 3;
  const sliceLinks = (pagination: any) => {
    if (!pagination || (pagination.total_pages < 1) || (pagination.page < 1)) {
      return [];
    }

    const { total_pages, page } = pagination;
    const halfOfPagesCount = Math.floor(PAGINATION_PAGES_COUNT / 2);

    let pageLinks = [];

    const previousLink = {
      label: STRING.PREVIOUS,
      active: page > 1,
      page: page > 1 ? page - 1 : null,
    };

    const nextLink = {
      label: STRING.NEXT,
      active: page < total_pages,
      page: page < total_pages ? page + 1 : null,
    };

    pageLinks.push(previousLink);

    let startPage = Math.max(1, page - halfOfPagesCount);
    let endPage = Math.min(total_pages, startPage + PAGINATION_PAGES_COUNT - 1);

    while (endPage - startPage + 1 < PAGINATION_PAGES_COUNT && endPage < total_pages) {
      endPage++;
      if (endPage - startPage + 1 === PAGINATION_PAGES_COUNT) {
        break;
      }
      if (startPage > 1) {
        startPage--;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push({
        label: `${i}`,
        active: i === page,
        page: i !== page ? i : null,
      });
    }
    pageLinks.push(nextLink);
    return pageLinks;
  };

  const paginationLinks = sliceLinks(pagination);

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'>
        <div>
          {/* <label className="items-per-page-label">{STRING.ITEM_PER_PAGE}</label> */}
          <select
            onChange={handleItemsPerPageChange}
            disabled={isLoading}
            value={state.items_per_page === Infinity ? 'all' : state.items_per_page || 10}
            className="items-per-page-select with-margin"
            style={{width: "74px"}}
          >
            <option value="5">{STRING.FIVE}</option>
            <option value="10">{STRING.TEN}</option>
            <option value="20">{STRING.TWENTITY}</option>
            <option value="25">{STRING.TWENTIY_FIVE}</option>
            <option value="50">{STRING.FIFTY}</option>
            <option value="all">{STRING.ALL}</option>
          </select>
        </div>
      </div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_users_paginate'>
          <ul className='pagination'>
            <li className={clsx('page-item', { disabled: isLoading || pagination.page === 1 })}>
              <a onClick={() => handlePageChange(1)} style={{ cursor: 'pointer' }} className='page-link'>
                First
              </a>
            </li>
            {paginationLinks.map((link) => (
              <li
                key={link.label}
                className={clsx('page-item', {
                  active: pagination.page === link.page,
                  disabled: isLoading,
                  previous: link.label === 'Previous',
                  next: link.label === 'Next',
                })}
              >
                <a
                  className='page-link'
                  onClick={() => handlePageChange(link.page)}
                  style={{ cursor: 'pointer' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={clsx('page-item', { disabled: isLoading || pagination.page === pagination.total_pages })}>
              <a
                onClick={() => handlePageChange(pagination.total_pages)}
                style={{ cursor: 'pointer' }}
                className='page-link'
              >
                Last
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .items-per-page-container {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .items-per-page-label {
          font-size: 14px;
          color: #495057;
        }

        .items-per-page-select {
          padding: 8px 12px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background-color: #fff;
          font-size: 14px;
          color: #495057;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .items-per-page-select:hover {
          border-color: #80bdff;
          outline: none;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .items-per-page-select:disabled {
          background-color: #e9ecef;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export { CreditCardPaymentListPagination };
