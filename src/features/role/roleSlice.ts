import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type Role = {
  id: number | null
  fullRole: any
}

const initialState: Role = {
  id: null,
  fullRole: null,
}

export const setSelectedRoleId = createAsyncThunk(
  'role/setSelectedRoleId',
  (args: { selectedRoleId: number | null }) => {
    const { selectedRoleId } = args

    return {
      selectedRoleId,
    }
  },
)

export const setSelectedRole = createAsyncThunk(
  'role/setSelectedRole',
  (args: { selectedRole: any | null }) => {
    const { selectedRole } = args

    return {
      selectedRole,
    }
  },
)

const roleSlice = createSlice({
  name: 'role',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedRoleId.fulfilled, (state, action) => {
      state.id = action.payload.selectedRoleId
    })
    builder.addCase(setSelectedRole.fulfilled, (state, action) => {
      state.fullRole = action.payload.selectedRole
    })
  },
})

export const selectedRoleId = (state: RootState) => state.role.id

export const selectedRole = (state: RootState) => state.role.fullRole

export default roleSlice
