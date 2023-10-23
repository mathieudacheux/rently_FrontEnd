import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const propertyTypeApi = createApi({
  reducerPath: 'propertyTypeApi',
  baseQuery,
  endpoints: (builder) => ({
    getPropertyTypes: builder.query({
      query: () => 'property_types',
    }),
  }),
})

export const { useGetPropertyTypesQuery } = propertyTypeApi

export default propertyTypeApi
