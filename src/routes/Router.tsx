import { APP_ROUTES } from './routes.ts'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import Register from '../pages/Register/Register.tsx'
import Playground from '../pages/Playground/Playground.tsx'
import Properties from '../pages/Properties/Properties.tsx'
import ValidateAccount from '../pages/ValidateAccount/ValidateAccount.tsx'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function RouterElement(): JSX.Element {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!window.localStorage.getItem('lang')) {
      window.localStorage.setItem('lang', 'fr')
      return
    }
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem('lang') === 'fr') {
      window.localStorage.setItem('lang', 'en')
      i18n.changeLanguage(window.localStorage.getItem('lang') as string)
      return
    }
    if (window.localStorage.getItem('lang') === 'en') {
      window.localStorage.setItem('lang', 'fr')
      i18n.changeLanguage(window.localStorage.getItem('lang') as string)
      return
    }
  }, [i18n.language])

  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
      <Route path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route path={APP_ROUTES.REGISTER} element={<Register />} />
      <Route path={APP_ROUTES.VALIDATE_ACCOUNT} element={<ValidateAccount />} />
      <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
      <Route path={APP_ROUTES.PLAYGROUND} element={<Playground />} />
    </Routes>
  )
}
