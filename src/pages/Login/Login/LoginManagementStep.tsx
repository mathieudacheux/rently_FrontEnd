import { useState, useEffect } from 'react'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import LoginManagement from './LoginManagement.tsx'
import { useAppDispatch } from '../../../store/store.ts'
import Toast from '../../../components/molecules/Toast.tsx'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import { setToken } from '../../../features/auth/authSlice.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'

export default function LoginManagementStep(): JSX.Element {
  const formikContext = useFormikContext<LoginFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext
  const dispatch = useAppDispatch()
  const [createUser] = useLoginMutation()

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
    const formIsValid = await formikValidator(values)
    
    if (!formIsValid) return false
    console.log('a')

    const result: any = await createUser({
      mail: values.mail,
      password: values.password,
    })

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
      <LoginManagement login={loginUser} />

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />
    </>
  )
}
