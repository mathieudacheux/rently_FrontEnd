import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const statusApi = createApi({
  reducerPath: 'statusApi',
  baseQuery,
  endpoints: (builder) => ({
    getStatus: builder.query({
      query: () => 'statuses',
    }),
  }),
})

export const { useGetStatusQuery } = statusApi

export default statusApi
