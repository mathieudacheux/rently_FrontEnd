import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const bookmarkApi = createApi({
  reducerPath: 'bookmarkApi',
  baseQuery,
  endpoints: (builder) => ({
    getBookmarks: builder.query({
      query: () => 'bookmarks',
    }),
    getBookmarkById: builder.query({
      query: (id) => `bookmarks/${id}`,
    }),
    getBookmarksByUserId: builder.query({
      query: (userId) => `bookmarks/user/${userId}`,
    }),
    createBookmark: builder.mutation({
      query: (newBookmark) => ({
        url: 'bookmarks',
        method: 'POST',
        body: newBookmark,
      }),
    }),
    updateBookmark: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `bookmarks/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
    deleteBookmark: builder.mutation({
      query: (id) => ({
        url: `bookmarks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetBookmarksQuery,
  useLazyGetBookmarksQuery,
  useGetBookmarkByIdQuery,
  useLazyGetBookmarkByIdQuery,
  useGetBookmarksByUserIdQuery,
  useLazyGetBookmarksByUserIdQuery,
  useCreateBookmarkMutation,
  useUpdateBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarkApi

export default bookmarkApi
