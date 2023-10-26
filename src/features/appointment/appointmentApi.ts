import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery,
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: (filter) => ({
        url: 'appointments',
        params: filter,
      }),
    }),
    getAppointmentsByUserId: builder.query({
      query: (id) => `appointments/user/${id}`,
    }),
    createAppointment: builder.mutation({
      query: (appointment) => ({
        url: 'appointments',
        method: 'POST',
        body: appointment,
      }),
    }),
  }),
})

export const {
  useGetAppointmentsByUserIdQuery,
  useLazyGetAppointmentsByUserIdQuery,
  useGetAppointmentsQuery,
  useCreateAppointmentMutation,
} = appointmentApi

export default appointmentApi
