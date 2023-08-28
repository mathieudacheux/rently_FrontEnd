import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useMyAccountFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const userData =
    window.localStorage.getItem('user') !== null
      ? JSON.parse(window.localStorage.getItem('user') as string)
      : null

  const initialValues = useMemo(() => {
    return {
      mail: userData === null ? '' : userData[0].mail || '',
      firstname: userData === null ? '' : userData[0].firstname || '',
      lastname: userData === null ? '' : userData[0].name || '',
      phone: userData === null ? '' : userData[0].phone || '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      newsletter: userData === null ? false : userData[0].newsletter || false,
    }
  }, [userData])

  const validationSchema = useMemo(
    () =>
      yup.object({
        mail: yup.string().email(t('yup.email')).required(t('yup.required')),
        oldPassword: yup.string().required(t('yup.required')),
        newPassword: yup.string().required(t('yup.required')),
        newPasswordConfirm: yup
          .string()
          .oneOf([yup.ref('newPassword')], t('yup.passwordMatch'))
          .required(t('yup.required')),
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
