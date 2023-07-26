import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Button from '../../../components/atoms/Button.tsx'
import { AuthentificationsLoginRequest } from '../../../api/models/AuthentificationsLoginRequest.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setToken } from '../../../features/auth/authSlice.ts'

export default function LoginManagement(): JSX.Element {
  const { t } = useTranslation()
  const { values, dirty } = useFormikContext<LoginFormik>()
  const [createUser] = useLoginMutation()
  const dispatch = useAppDispatch()

  const [showErrorToast, setShowErrorToast] = useState<{
    view: boolean
    message: string
  }>({
    view: false,
    message: '',
  })

  const loginUser = async () => {
    if (!dirty) return

    const result: any = await createUser({
      mail: values.mail,
      password: values.password,
    })

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.message || t('login.error'),
      })
      return false
    }

    const token = result?.data?.token

    dispatch(setToken(token))

    return tru
  }

  return (
    <>
      <FormikTextField name='mail' />
      <FormikTextField name='password' />
      <button onClick={loginUser}>Login</button>
    </>
  )
}
