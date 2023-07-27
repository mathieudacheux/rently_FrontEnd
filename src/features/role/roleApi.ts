import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const roleApi = createApi({
  reducerPath: 'roleApi',
  baseQuery,
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => 'roles',
    }),
    getRoleById: builder.query({
      query: (id) => `roles/${id}`,
    }),
  }),
})

export const {
  useGetRolesQuery,
  useLazyGetRolesQuery,
  useGetRoleByIdQuery,
  useLazyGetRoleByIdQuery,
} = roleApi

export default roleApi
