import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: 'authentifications',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi

export default authApi
