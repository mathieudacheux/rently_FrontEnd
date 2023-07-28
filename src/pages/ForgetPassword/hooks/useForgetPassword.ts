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

  const validationSchema = useMemo(
    () =>
      yup.object({
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        password: yup.string().required(t('yup.required')),
      }),
    [i18n.language],
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
