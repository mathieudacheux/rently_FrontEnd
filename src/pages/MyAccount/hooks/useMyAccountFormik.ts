import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useMyAccountFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const userData = useMemo(() => {
    return JSON.parse(localStorage.getItem('user') as string) || []
  }, [localStorage.getItem('user')])

  const initialValues = useMemo(() => {
    return {
      id: userData?.user_id || '',
      mail: userData?.mail || '',
      firstname: userData?.firstname || '',
      lastname: userData?.name || '',
      phone: userData?.phone || '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      newsletter: userData?.newsletter || false,
    }
  }, [localStorage.getItem('user')])

  const validationSchema = useMemo(
    () =>
      yup.object({
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        oldPassword: yup.string().required(t('yup.required')),
        newPassword: yup
          .string()
          .required(t('yup.required'))
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            t('yup.password'),
          ),
        newPasswordConfirm: yup
          .string()
          .oneOf([yup.ref('newPassword')], t('yup.passwordMatch'))
          .required(t('yup.required')),
      }),
    [i18n.language],
  )

  const accountFormik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  })

  return {
    accountFormik,
  }
}
