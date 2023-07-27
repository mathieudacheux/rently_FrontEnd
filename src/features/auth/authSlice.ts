import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type Auth = {
  token: string | null
}

const initialState: Auth = {
  token: null,
}

export const setToken = createAsyncThunk(
  'auth/setToken',
  (args: { token: string | null }) => {
    const { token } = args

    return {
      token,
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setToken.fulfilled, (state, action) => {
      state.token = action.payload.token
    })
  },
})

export const selectToken = (state: RootState) => state.auth.token

export default authSlice
