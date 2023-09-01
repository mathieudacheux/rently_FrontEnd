import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const attachmentApi = createApi({
  reducerPath: 'attachmentApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllFolderImage: builder.query({
      query: (args: { id: number }) => {
        const { id } = args
        return `file/img/${id}`
      },
    }),
  }),
})

export const { useGetAllFolderImageQuery } = attachmentApi

export default attachmentApi
