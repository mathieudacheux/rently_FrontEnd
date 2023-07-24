import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PropertySerializerRead } from '../../api/models/PropertySerializerRead.ts'
import { RootState } from '../../store/store.ts'

type User = {
  id: number | null
  fullProperty: PropertySerializerRead | null
}

const initialState: User = {
  id: null,
  fullProperty: null,
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
  (args: { selectedProperty: PropertySerializerRead | null }) => {
    const { selectedProperty } = args

    return {
      selectedProperty,
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
  },
})

export const selectedPropertyId = (state: RootState) => state.property.id

export const selectedProperty = (state: RootState) =>
  state.property.fullProperty

export default propertySlice
