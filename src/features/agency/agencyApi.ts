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
  reducerPath: 'agencyApi',
  baseQuery,
  endpoints: (builder) => ({
    getAgencies: builder.query({
      query: (filter) => ({
        url: 'agencies',
        params: filter,
      }),
    }),
    getAgencyById: builder.query({
      query: (id) => `agencies/${id}`,
    }),
    getAgenciesByFilter: builder.query({
      query: (filter) => ({
        url: 'agencies/filter',
        params: filter,
      }),
    }),
    createAgency: builder.mutation({
      query: (newAgency) => ({
        url: 'agencies',
        method: 'POST',
        body: newAgency,
      }),
    }),
    updateAgency: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `agencies/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
    deleteAgency: builder.mutation({
      query: (id) => ({
        url: `agencies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAgenciesQuery,
  useLazyGetAgenciesQuery,
  useGetAgencyByIdQuery,
  useLazyGetAgencyByIdQuery,
  useGetAgenciesByFilterQuery,
  useLazyGetAgenciesByFilterQuery,
  useCreateAgencyMutation,
  useUpdateAgencyMutation,
  useDeleteAgencyMutation,
} = agencyApi

export default agencyApi
