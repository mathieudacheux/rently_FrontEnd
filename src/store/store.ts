// eslint-disable-next-line import/named
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice.ts'
import userApi from '../features/user/userApi.ts'
import propertySlice from '../features/property/propertySlice.ts'
import propertyApi from '../features/property/propertyApi.ts'
import articleSlice from '../features/article/articleSlice.ts'
import articleApi from '../features/article/articleApi.ts'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [propertySlice.name]: propertySlice.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [articleSlice.name]: articleSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat([userApi.middleware])
      .concat([propertyApi.middleware])
      .concat([articleApi.middleware]),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
