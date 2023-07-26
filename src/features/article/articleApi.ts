import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => 'articles',
    }),
    getArticleById: builder.query({
      query: (id) => `articles/${id}`,
    }),
    getArticleByFilter: builder.query({
      query: ({ filter }) => ({
        url: 'articles/articles_filter',
        params: {
          filter,
        },
      }),
    }),
    createArticle: builder.mutation({
      query: (newArticle) => ({
        url: 'articles',
        method: 'POST',
        body: newArticle,
      }),
    }),
    updateArticle: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `articles/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `articles/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
  useGetArticleByIdQuery,
  useLazyGetArticleByIdQuery,
  useGetArticleByFilterQuery,
  useLazyGetArticleByFilterQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi

export default articleApi
