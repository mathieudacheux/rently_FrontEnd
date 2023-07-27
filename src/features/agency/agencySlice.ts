import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type Agency = {
  id: number | null
  fullAgency: any
}

const initialState: Agency = {
  id: null,
  fullAgency: null,
}

export const setSelectedAgencyId = createAsyncThunk(
  'agency/setSelectedAgencyId',
  (args: { selectedAgencyId: number | null }) => {
    const { selectedAgencyId } = args

    return {
      selectedAgencyId,
    }
  },
)

export const setSelectedAgency = createAsyncThunk(
  'agency/setSelectedAgency',
  (args: { selectedAgency: any }) => {
    const { selectedAgency } = args

    return {
      selectedAgency,
    }
  },
)

const agencySlice = createSlice({
  name: 'agency',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedAgencyId.fulfilled, (state, action) => {
      state.id = action.payload.selectedAgencyId
    })
    builder.addCase(setSelectedAgency.fulfilled, (state, action) => {
      state.fullAgency = action.payload.selectedAgency
    })
  },
})

export const selectedAgencyId = (state: RootState) => state.agency.id

export const selectedAgency = (state: RootState) => state.agency.fullAgency

export default agencySlice
