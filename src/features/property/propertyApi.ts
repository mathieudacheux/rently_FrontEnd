import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery,
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => 'properties',
    }),
    getPropertyById: builder.query({
      query: (id: number) => `properties/${id}`,
    }),
    getPropertyByFilter: builder.query({
      query: (filter) => ({
        url: 'properties/properties_filter',
        params: filter,
      }),
    }),
    getPropertyHome: builder.query({
      query: (filter) => ({
        url: 'properties/properties_home',
        params: filter,
      }),
    }),
    createProperty: builder.mutation({
      query: (newProperty) => ({
        url: 'properties',
        method: 'POST',
        body: newProperty,
      }),
    }),
    updateProperty: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `properties/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `properties/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetPropertiesQuery,
  useLazyGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useLazyGetPropertyByIdQuery,
  useGetPropertyByFilterQuery,
  useLazyGetPropertyByFilterQuery,
  useGetPropertyHomeQuery,
  useLazyGetPropertyHomeQuery,
  useCreatePropertyMutation,
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} = propertyApi

export default propertyApi
