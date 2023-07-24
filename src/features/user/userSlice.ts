import { createSlice } from '@reduxjs/toolkit'

type User = {
  id: number | null
  name: string | null
  email: string | null
  role: number | null
}

const initialState: User = {
  id: null,
  name: null,
  email: null,
  role: null,
}

const selectUserId = (state: User) => state.id
const selectUserName = (state: User) => state.name
const selectUserEmail = (state: User) => state.email
const selectUserRole = (state: User) => state.role
const selectUser = (state: User) => state

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload
    },
    setUserName: (state, action) => {
      state.name = action.payload
    },
    setUserEmail: (state, action) => {
      state.email = action.payload
    },
    setUserRole: (state, action) => {
      state.role = action.payload
    },
    setUser: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.role = action.payload.role
    },
  },
})

export const { setUserId, setUserName, setUserEmail, setUserRole, setUser } =
  userSlice.actions

export {
  selectUserId,
  selectUserName,
  selectUserEmail,
  selectUserRole,
  selectUser,
}

export default userSlice
