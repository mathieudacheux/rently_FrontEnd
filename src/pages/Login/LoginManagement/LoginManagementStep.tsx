import { useState, useEffect } from 'react'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import LoginManagement from './LoginManagement.tsx'
import { useAppDispatch, useAppSelector } from '../../../store/store.ts'
import Toast from '../../../components/molecules/Toast.tsx'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import { selectToken, setToken } from '../../../features/auth/authSlice.ts'
import { useLazyGetUserByFilterQuery } from '../../../features/user/userApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'

export default function LoginManagementStep(): JSX.Element {
  const formikContext = useFormikContext<LoginFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const selectedToken = useAppSelector(selectToken)
  const { values } = formikContext
  const dispatch = useAppDispatch()
  const [createUser] = useLoginMutation()
  const [getUserByFilter] = useLazyGetUserByFilterQuery()

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

  useEffect(() => {
    console.log(values.mail)

    const result: any = getUserByFilter({
      mail: values.mail,
    })

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.data?.message,
      })
      return
    }

    const user = result?.data

    console.log(user)
    return
  }, [selectedToken])

  const loginUser = async () => {
    const formIsValid = await formikValidator(values)

    if (!formIsValid) return false

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
