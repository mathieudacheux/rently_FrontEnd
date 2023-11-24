import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type User = {
  id: number | null
  fullProperty: any
  searchFiter: {
    searchStatus: number | null
    searchCity: string
    searchBudget: number | null
    searchType: number | null
  }
}

const initialState: User = {
  id: null,
  fullProperty: null,
  searchFiter: {
    searchStatus: null,
    searchCity: '',
    searchBudget: null,
    searchType: null,
  },
}

export const setSelectedPropertyId = createAsyncThunk(
  'property/setSelectedPropertyId',
  (args: { selectedPropertyId: number | null }) => {
    const { selectedPropertyId } = args

    return {
      selectedPropertyId,
    }
  },
)

export const setSelectedProperty = createAsyncThunk(
  'property/setSelectedProperty',
  (args: { selectedProperty: any }) => {
    const { selectedProperty } = args

    return {
      selectedProperty,
    }
  },
)

export const setSearchFilter = createAsyncThunk(
  'property/setSearchFilter',
  (args: {
    searchFilter: {
      searchStatus: number | null
      searchCity: string
      searchBudget: number | null
      searchType: number | null
    }
  }) => {
    const { searchFilter } = args

    return {
      searchFilter,
    }
  },
)

const propertySlice = createSlice({
  name: 'property',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setSelectedPropertyId.fulfilled, (state, action) => {
      state.id = action.payload.selectedPropertyId
    })
    builder.addCase(setSelectedProperty.fulfilled, (state, action) => {
      state.fullProperty = action.payload.selectedProperty
    })
    builder.addCase(setSearchFilter.fulfilled, (state, action) => {
      state.searchFiter = action.payload.searchFilter
    })
  },
})

export const selectedPropertyId = (state: RootState) => state.property.id

export const selectedProperty = (state: RootState) =>
  state.property.fullProperty

export const searchFilter = (state: RootState) => state.property.searchFiter

export default propertySlice
