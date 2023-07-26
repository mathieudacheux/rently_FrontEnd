import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: (filter) => ({
        url: 'countries',
        params: filter,
      }),
    }),
    getCountryById: builder.query({
      query: (id) => `countries/${id}`,
    }),
  }),
})

export const {
  useGetCountriesQuery,
  useLazyGetCountriesQuery,
  useGetCountryByIdQuery,
  useLazyGetCountryByIdQuery,
} = countryApi

export default countryApi
