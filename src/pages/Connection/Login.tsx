import { useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FormikProvider } from 'formik'
import useLoginFormik from './hooks/useLoginFormik.ts'
import { APP_ROUTES } from '../../routes/routes.ts'

export default function Login(): JSX.Element {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const { loginFormik } = useLoginFormik()

  const LOGIN_STEPS = useMemo(
    () => [
      [
        {
          key: 'connectionLogin',
          route: APP_ROUTES.LOGIN,
          component: CalendarListingStep,
        },
        {
          key: 'connectionRegister',
          route: APP_ROUTES.REGISTER,
          component: CalendarManagementStep,
        },
      ],
    ],
    [i18n.language],
  )

  return <FormikProvider value={loginFormik}></FormikProvider>
}
