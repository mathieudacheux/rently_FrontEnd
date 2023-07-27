import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const sectorApi = createApi({
  reducerPath: 'sectorApi',
  baseQuery,
  endpoints: (builder) => ({
    getSectors: builder.query({
      query: () => 'sectors',
    }),
    getSectorById: builder.query({
      query: (id) => `sectors/${id}`,
    }),
  }),
})

export const {
  useGetSectorsQuery,
  useLazyGetSectorsQuery,
  useGetSectorByIdQuery,
  useLazyGetSectorByIdQuery,
} = sectorApi

export default sectorApi
