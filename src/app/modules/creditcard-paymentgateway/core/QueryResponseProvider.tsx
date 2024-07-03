
import {FC, useContext, useState, useEffect, useMemo} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  PaginationState,
  QUERIES,
  stringifyRequestQuery,
  WithChildren,
} from '../../../../_metronic/helpers'
import {useQueryRequest} from './QueryRequestProvider'
import { useAuth } from '../../auth'
import { NotificationUserListQueryResponse } from './_models'
import { getNotificationUsersList } from './_requests'


const QueryResponseContext = createResponseContext<NotificationUserListQueryResponse>(initialQueryResponse)
const QueryResponseProvider: FC<WithChildren> = ({children}) => {
  const {currentUser, saveAuth, setCurrentUser} = useAuth()
  const {state} = useQueryRequest()
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery)
    }
  }, [updatedQuery])

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${query}`,
    () => {
      let jsonObject;
      let isValidJson = true;
      try {
        jsonObject = JSON.parse(query);
      } catch (error) {
        isValidJson = false;
      }
     const getAdminData = getNotificationUsersList(currentUser?._id, jsonObject.page, jsonObject.search, jsonObject.sortBy, jsonObject.sortOrder, jsonObject.limit);
      return getAdminData;
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <QueryResponseContext.Provider value={{isLoading: isFetching, refetch, response, query}}>
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const {response} = useQueryResponse()
  if (!response) {
    return []
  }

  return response?.notification_templates || []
}

const useQueryResponsePagination = () => {
  const defaultPaginationState: PaginationState = {
    ...initialQueryState
  }

  const {response} = useQueryResponse()
  if (!response || !response.success) {
    return defaultPaginationState
  }
  const paginationState: PaginationState = {
    page: response.currentPage,
    items_per_page: (response as any).limit || 10,
    total_count: response.totalCount,
    total_pages: response.totalPages
  }
  return paginationState;
}


const useQueryResponseLoading = (): boolean => {
  const {isLoading} = useQueryResponse()
  return isLoading
}

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading,
}
