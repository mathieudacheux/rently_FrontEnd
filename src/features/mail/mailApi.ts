import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const mailApi = createApi({
  reducerPath: 'mailApi',
  baseQuery,
  endpoints: (builder) => ({
    confirmationMail: builder.mutation({
      query: (id) => ({
        url: `/mail/mail_confirm`,
        method: 'POST',
        body: id,
      }),
    }),
  }),
})

export const { useConfirmationMailMutation } = mailApi

export default mailApi
