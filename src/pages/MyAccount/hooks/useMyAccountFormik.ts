import { useCallback, useEffect, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useLazyGetUserByFilterQuery } from '../../../features/user/userApi.ts'

export default function useMyAccountFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])
  const [triggerUser, { data: retrievedUser }] = useLazyGetUserByFilterQuery()

  useEffect(() => {
    if (localStorage.getItem('mail')) {
      triggerUser({
        mail: localStorage.getItem('mail'),
      })
    }
  }, [])

  useEffect(() => {
    if (retrievedUser?.data) {
      localStorage.setItem('user', JSON.stringify(retrievedUser.data))
    }
  }, [retrievedUser])

  const userData = useMemo(() => {
    return JSON.parse(localStorage.getItem('user') as string) || []
  }, [localStorage.getItem('user')])

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
