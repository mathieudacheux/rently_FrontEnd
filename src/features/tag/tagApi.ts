import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const tagApi = createApi({
  reducerPath: 'tagApi',
  baseQuery,
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => 'tags',
    }),
    getTagById: builder.query({
      query: (id) => `tags/${id}`,
    }),
  }),
})

export const {
  useGetTagsQuery,
  useLazyGetTagsQuery,
  useGetTagByIdQuery,
  useLazyGetTagByIdQuery,
} = tagApi

export default tagApi
