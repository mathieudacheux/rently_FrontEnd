import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type User = {
  id: number | null
  fullUser: any
}

const initialState: User = {
  id: null,
  fullUser: null,
}

export const setSelectedUserId = createAsyncThunk(
  'user/setSelectedUserId',
  (args: { selectedUserId: number | null }) => {
    const { selectedUserId } = args

    return {
      selectedUserId,
    }
  },
)

export const setSelectedUser = createAsyncThunk(
  'user/setSelectedUser',
  (args: { selectedUser: any }) => {
    const { selectedUser } = args

    return {
      selectedUser,
    }
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSelectedUserId.fulfilled, (state, action) => {
      state.id = action.payload.selectedUserId
    })
    builder.addCase(setSelectedUser.fulfilled, (state, action) => {
      state.fullUser = action.payload.selectedUser
    })
  },
})

export const selectedUserId = (state: RootState) => state.user.id

export const selectedUser = (state: RootState) => state.user.fullUser

export default userSlice
