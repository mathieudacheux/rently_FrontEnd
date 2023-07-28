import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store.ts'

type User = {
  id: number | null
  fullProperty: any
  searchFiter: {
    searchCity: string
    searchBudget: null
    searchType: string
  }
}

const initialState: User = {
  id: null,
  fullProperty: null,
  searchFiter: {
    searchCity: '',
    searchBudget: null,
    searchType: '',
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
      searchCity: string
      searchBudget: null
      searchType: string
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
