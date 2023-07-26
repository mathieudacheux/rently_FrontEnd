import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => 'countries',
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
