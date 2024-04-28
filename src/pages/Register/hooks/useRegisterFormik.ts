import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useRegisterFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const initialValues = {
    firstname: '',
    lastname: '',
    mail: '',
    password: '',
    newsletter: false,
  }

  const validationSchema = useMemo(
    () =>
      yup.object({
        lastname: yup
          .string()
          .min(2, t('yup.min', { number: 2 }))
          .required(t('yup.required')),
        firstname: yup
          .string()
          .min(2, t('yup.min', { number: 2 }))
          .required(t('yup.required')),
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        password: yup
          .string()
          .required(t('yup.required'))
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            t('yup.password'),
          ),
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
