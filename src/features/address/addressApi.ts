import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const agencyApi = createApi({
  reducerPath: 'addressApi',
  baseQuery,
  endpoints: (builder) => ({
    getAddressById: builder.query({
      query: (id) => `addresses/${id}`,
    }),
  }),
})

export const { useGetAddressByIdQuery } = agencyApi

export default agencyApi
