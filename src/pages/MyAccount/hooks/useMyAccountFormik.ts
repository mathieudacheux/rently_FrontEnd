import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useGetUserByFilterQuery } from '../../../features/user/userApi.ts'

export default function useMyAccountFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  if (localStorage.getItem('mail')) {
    const response = useGetUserByFilterQuery({
      mail: localStorage.getItem('mail'),
    })

    if (response?.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  }

  const userData = JSON.parse(localStorage.getItem('user') as string)

  const initialValues = useMemo(() => {
    return {
      mail: userData[0]?.mail || '',
      firstname: userData[0]?.firstname || '',
      lastname: userData[0]?.name || '',
      phone: userData[0]?.phone || '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      newsletter: userData[0]?.newsletter || false,
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
