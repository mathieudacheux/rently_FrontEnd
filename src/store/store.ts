// eslint-disable-next-line import/named
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice.ts'
import userApi from '../features/user/userApi.ts'
import propertySlice from '../features/property/propertySlice.ts'
import propertyApi from '../features/property/propertyApi.ts'
import articleSlice from '../features/article/articleSlice.ts'
import articleApi from '../features/article/articleApi.ts'
import addressApi from '../features/address/addressApi.ts'
import authSlice from '../features/auth/authSlice.ts'
import authApi from '../features/auth/authApi.ts'
import bookmarkSlice from '../features/bookmark/bookmarkSlice.ts'
import bookmarkApi from '../features/bookmark/bookmarkApi.ts'
import agencySlice from '../features/agency/agencySlice.ts'
import agencyApi from '../features/agency/agencyApi.ts'
import countrySlice from '../features/country/countrySlice.ts'
import countryApi from '../features/country/countryApi.ts'
import roleSlice from '../features/role/roleSlice.ts'
import roleApi from '../features/role/roleApi.ts'
import sectorApi from '../features/sector/sectorApi.ts'
import mailApi from '../features/mail/mailApi.ts'
import attachmentApi from '../features/attachment/attachmentApi.ts'
import tagApi from '../features/tag/tagApi.ts'
import propertyTypeApi from '../features/propertyType/propertyTypeApi.ts'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [propertySlice.name]: propertySlice.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [articleSlice.name]: articleSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [bookmarkSlice.name]: bookmarkSlice.reducer,
    [bookmarkApi.reducerPath]: bookmarkApi.reducer,
    [agencySlice.name]: agencySlice.reducer,
    [agencyApi.reducerPath]: agencyApi.reducer,
    [countrySlice.name]: countrySlice.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [roleSlice.name]: roleSlice.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [sectorApi.reducerPath]: sectorApi.reducer,
    [mailApi.reducerPath]: mailApi.reducer,
    [attachmentApi.reducerPath]: attachmentApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
    [propertyTypeApi.reducerPath]: propertyTypeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat([userApi.middleware])
      .concat([propertyApi.middleware])
      .concat([articleApi.middleware])
      .concat([addressApi.middleware])
      .concat([authApi.middleware])
      .concat([bookmarkApi.middleware])
      .concat([agencyApi.middleware])
      .concat([countryApi.middleware])
      .concat([roleApi.middleware])
      .concat([sectorApi.middleware])
      .concat([mailApi.middleware])
      .concat([attachmentApi.middleware])
      .concat([tagApi.middleware])
      .concat([propertyTypeApi.middleware]),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
