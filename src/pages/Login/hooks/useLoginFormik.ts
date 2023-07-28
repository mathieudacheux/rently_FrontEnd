import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useLoginFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const initialValues = {
    mail: '',
    password: '',
  }

  const validationSchema = useMemo(
    () =>
      yup.object({
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        password: yup.string().required(t('yup.required')),
      }),
    [i18n.language],
  )

  const loginFormik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  })

  return {
    loginFormik,
  }
}
