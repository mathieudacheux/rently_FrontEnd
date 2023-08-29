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
    resetPasswordMail: builder.mutation({
      query: (id) => ({
        url: `/mail/reset_password`,
        method: 'POST',
        body: id,
      }),
    }),
    subscribeNewsletter: builder.mutation({
      query: (mail) => ({
        url: `/mail/subscribe_newsletter`,
        method: 'POST',
        body: mail,
      }),
    }),
  }),
})

export const {
  useConfirmationMailMutation,
  useResetPasswordMailMutation,
  useSubscribeNewsletterMutation,
} = mailApi

export default mailApi
