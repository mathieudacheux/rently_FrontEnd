import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function useForgetPassword() {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const emailFromLogin =
    location.state?.from === APP_ROUTES.LOGIN ? location.state.mail : ''

  const onSubmit = useCallback(async () => null, [])

  const initialValues = {
    mail: emailFromLogin,
    passwordOne: '',
    passwordTwo: '',
  }

  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')

  const validationSchema = useMemo(
    () =>
      token
        ? yup.object({
            passwordOne: yup
              .string()
              .required(t('yup.required'))
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                t('yup.password'),
              ),
            passwordTwo: yup
              .string()
              .oneOf([yup.ref('passwordOne')], t('yup.passwordMatch'))
              .required(t('yup.required')),
          })
        : yup.object({
            mail: yup
              .string()
              .email(t('yup.email'))
              .required(t('yup.required')),
          }),
    [i18n.language, location.pathname],
  )

  const forgetPasswordFormik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  })

  return {
    forgetPasswordFormik,
  }
}
