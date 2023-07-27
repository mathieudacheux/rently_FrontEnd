import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookmarkSerializerRead } from '../../api/models/BookmarkSerializerRead.ts'
import { RootState } from '../../store/store.ts'

type Bookmark = {
  id: number | null
  fullBookmark: BookmarkSerializerRead | null
}

const initialState: Bookmark = {
  id: null,
  fullBookmark: null,
}

export const setSelectedBookmarkId = createAsyncThunk(
  'bookmark/setSelectedBookmarkId',
  (args: { selectedBookmarkId: number | null }) => {
    const { selectedBookmarkId } = args

    return {
      selectedBookmarkId,
    }
  },
)

export const setSelectedBookmark = createAsyncThunk(
  'bookmark/setSelectedBookmark',
  (args: { selectedBookmark: BookmarkSerializerRead | null }) => {
    const { selectedBookmark } = args

    return {
      selectedBookmark,
    }
  },
)

const bookmarkSlice = createSlice({
  name: 'bookmark',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedBookmarkId.fulfilled, (state, action) => {
      state.id = action.payload.selectedBookmarkId
    })
    builder.addCase(setSelectedBookmark.fulfilled, (state, action) => {
      state.fullBookmark = action.payload.selectedBookmark
    })
  },
})

export const selectedBookmarkId = (state: RootState) => state.bookmark.id

export const selectedBookmark = (state: RootState) =>
  state.bookmark.fullBookmark

export default bookmarkSlice
