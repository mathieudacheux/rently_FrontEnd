import { ArticleSerializerRead } from '../../api/index.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store/store.ts'

type Article = {
  id: number | null
  fullArticle: ArticleSerializerRead | null
}

const initialState: Article = {
  id: null,
  fullArticle: null,
}

export const setSelectedArticleId = createAsyncThunk(
  'article/setSelectedArticleId',
  (args: { selectedArticleId: number | null }) => {
    const { selectedArticleId } = args

    return {
      selectedArticleId,
    }
  },
)

export const setSelectedArticle = createAsyncThunk(
  'article/setSelectedArticle',
  (args: { selectedArticle: ArticleSerializerRead }) => {
    const { selectedArticle } = args

    return {
      selectedArticle,
    }
  },
)

const articleSlice = createSlice({
  name: 'article',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedArticleId.fulfilled, (state, action) => {
      state.id = action.payload.selectedArticleId
    })
    builder.addCase(setSelectedArticle.fulfilled, (state, action) => {
      state.fullArticle = action.payload.selectedArticle
    })
  },
})

export const selectedArticleId = (state: RootState) => state.article.id

export const selectedArticle = (state: RootState) => state.article.fullArticle

export default articleSlice
