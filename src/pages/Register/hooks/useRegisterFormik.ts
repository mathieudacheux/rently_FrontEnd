import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useRegisterFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const initialValues = {
    firstName: '',
    lastName: '',
    mail: '',
    password: '',
    newsletter: false,
  }

  const validationSchema = useMemo(
    () =>
      yup.object({
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        password: yup.string().required(t('yup.required')),
      }),
    [i18n.language],
  )

  const registerFormik = useFormik({
    initialValues,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  })

  return {
    registerFormik,
  }
}
