import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/named
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import userSlice from '../features/user/userSlice.ts'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      // pricesApi.middleware,
    ]),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
