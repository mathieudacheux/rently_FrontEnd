import { useState, useEffect } from 'react'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import LoginManagement from './LoginManagement.tsx'
import Toast from '../../../components/molecules/Toast.tsx'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import { useLazyGetUserByFilterQuery } from '../../../features/user/userApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setSelectedUser } from '../../../features/user/userSlice.ts'
import { useNavigate, useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { ToastState } from '../../../types.ts'

export default function LoginManagementStep(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const formikContext = useFormikContext<LoginFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [createUser] = useLoginMutation()
  const [getUserByFilter] = useLazyGetUserByFilterQuery()

  const fromValidateAccount =
    location.state?.from === APP_ROUTES.VALIDATE_ACCOUNT

  const token = localStorage.getItem('token')

  const [userToken, setUserToken] = useState<boolean>(false)

  const [showErrorToast, setShowErrorToast] = useState<ToastState>({
    view: false,
    message: '',
  })

  const [showSuccessToast, setShowSuccessToast] = useState<ToastState>({
    view: false,
    message: '',
  })

  const [showValidateAccountToast, setShowValidateAccountToast] =
    useState<ToastState>({
      view: false,
      message: '',
    })

  useEffect(() => {
    if (fromValidateAccount) {
      setShowValidateAccountToast({
        view: true,
        message: 'connection.accountValidated',
      })
    }
  }, [])

  useEffect(() => {
    if (showValidateAccountToast.view) {
      setTimeout(() => {
        setShowValidateAccountToast({
          view: false,
          message: '',
        })
      }, 3000)
    }
  }, [showValidateAccountToast])

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
    if (showSuccessToast.view) {
      setTimeout(() => {
        setShowSuccessToast({
          view: false,
          message: '',
        })
        navigate(APP_ROUTES.HOME)
      }, 3000)
    }
  }, [showSuccessToast])

  useEffect(() => {
    if (!token || !userToken) return

    const getUser = async () => {
      const result: any = await getUserByFilter({
        mail: values.mail,
      })

      if (!result?.data || result?.error) {
        setShowErrorToast({
          view: true,
          message: result?.error?.data?.message,
        })
        return
      }

      dispatch(setSelectedUser(result.data))
      window.localStorage.setItem('mail', values.mail)

      setShowSuccessToast({
        view: true,
        message: 'connection.connected',
      })
    }

    getUser()
  }, [userToken && token])

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

    localStorage.setItem('token', result?.data?.token)

    setUserToken(true)

    return true
  }

  return (
    <>
      <LoginManagement login={loginUser} />

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />

      <Toast open={showSuccessToast.view} text={showSuccessToast.message} />

      <Toast
        open={showValidateAccountToast.view}
        text={showValidateAccountToast.message}
      />
    </>
  )
}
