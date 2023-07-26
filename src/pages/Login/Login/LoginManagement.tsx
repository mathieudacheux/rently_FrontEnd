import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Button from '../../../components/atoms/Button.tsx'
import { AuthentificationsLoginRequest } from '../../../api/models/AuthentificationsLoginRequest.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setToken } from '../../../features/auth/authSlice.ts'
import Toast from '../../../components/molecules/Toast.tsx'

export default function LoginManagement(): JSX.Element {
  const { t } = useTranslation()
  const { values, dirty, errors } = useFormikContext<LoginFormik>()
  const [createUser] = useLoginMutation()
  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showErrorToast, setShowErrorToast] = useState<{
    view: boolean
    message: string
  }>({
    view: false,
    message: '',
  })

  useEffect(() => {
    if (showErrorToast.view) {
      setTimeout(() => {
        setShowErrorToast({
          view: false,
          message: '',
        })
      }, 3000)
    }
  }, [showErrorToast])

  const loginUser = async () => {
    if (errors) return

    const result: any = await createUser({
      mail: values.mail,
      password: values.password,
    })

    console.log(result)

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.data?.message,
      })
      return false
    }

    const token = result?.data?.token

    dispatch(setToken({ token }))

    return true
  }

  return (
    <>
      <FormikTextField name='mail' />
      <FormikTextField
        password
        name='password'
        showPassword={() => setShowPassword(!showPassword)}
      />
      <button onClick={loginUser}>Login</button>
      <Toast error open={showErrorToast.view} text={showErrorToast.message} />
    </>
  )
}
