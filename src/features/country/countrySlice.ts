import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type Country = {
  id: number | null
  fullCountry: any
}

const initialState: Country = {
  id: null,
  fullCountry: null,
}

export const setSelectedCountryId = createAsyncThunk(
  'country/setSelectedCountryId',
  (args: { selectedCountryId: number | null }) => {
    const { selectedCountryId } = args

    return {
      selectedCountryId,
    }
  },
)

export const setSelectedCountry = createAsyncThunk(
  'country/setSelectedCountry',
  (args: { selectedCountry: any }) => {
    const { selectedCountry } = args

    return {
      selectedCountry,
    }
  },
)

const countrySlice = createSlice({
  name: 'country',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedCountryId.fulfilled, (state, action) => {
      state.id = action.payload.selectedCountryId
    })
    builder.addCase(setSelectedCountry.fulfilled, (state, action) => {
      state.fullCountry = action.payload.selectedCountry
    })
  },
})

export const selectedCountryId = (state: RootState) => state.country.id

export const selectedCountry = (state: RootState) => state.country.fullCountry

export default countrySlice
