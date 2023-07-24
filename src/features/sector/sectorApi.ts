import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const sectorApi = createApi({
  reducerPath: 'sectorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_BASE_URL,
  }),
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
