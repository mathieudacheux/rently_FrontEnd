import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { ForgetPasswordFormik } from '../types.ts'
import ForgetPasswordManagement from './ForgetPasswordManagement.tsx'
import {
  useLazyGetUserByFilterQuery,
  useLazyGetUserByIdQuery,
  useUpdateUserMutation,
} from '../../../features/user/userApi.ts'
import { useResetPasswordMailMutation } from '../../../features/mail/mailApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import Toast from '../../../components/molecules/Toast.tsx'
import { JWT } from '../../ValidateAccount/types.ts'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function ForgetPasswordManagementStep(): JSX.Element {
  const navigate = useNavigate()
  const formikContext = useFormikContext<ForgetPasswordFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [getUserByFilter] = useLazyGetUserByFilterQuery()
  const [getUserById] = useLazyGetUserByIdQuery()
  const [updateUser] = useUpdateUserMutation()
  const [resetPasswordMail] = useResetPasswordMailMutation()

  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')
  const isToken = token ? true : false

  const [showErrorToast, setShowErrorToast] = useState<{
    view: boolean
    message: string
  }>({
    view: false,
    message: '',
  })

  const [showSuccessToast, setShowSuccessToast] = useState<{
    view: boolean
    message: string
  }>({
    view: false,
    message: '',
  })

  const [showSuccessToastUpdatePassword, setShowSuccessToastUpdatePassword] =
    useState<{
      view: boolean
      message: string
    }>({
      view: false,
      message: '',
    })

  useEffect(() => {
    if (showSuccessToastUpdatePassword.view) {
      setTimeout(() => {
        setShowSuccessToastUpdatePassword({
          view: false,
          message: '',
        })
      }, 1500)
      navigate(APP_ROUTES.LOGIN)
    }
  }, [showSuccessToastUpdatePassword])

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
      }, 3000)
    }
  }, [showSuccessToast])

  const sendResetPasswordMail = async () => {
    const formIsValid = await formikValidator(values)

    if (!formIsValid) return false

    const result: any = await getUserByFilter({
      mail: values.mail,
    })

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.data?.message,
      })
      return false
    }

    await resetPasswordMail({
      id: result?.data[0]?.user_id,
    })

    setShowSuccessToast({
      view: true,
      message: 'connection.emailValidation',
    })

    return true
  }

  const updatePassword = async () => {
    const formIsValid = await formikValidator(values)

    if (!formIsValid) return false

    if (!token) return false

    const decodedToken: JWT = jwt_decode(token)

    if (decodedToken.exp < Date.now() / 1000) {
      setShowErrorToast({
        view: true,
        message: 'connection.tokenExpired',
      })
      return false
    }

    const result: any = await getUserById(decodedToken.user_id)

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.data?.message,
      })
      return false
    }

    if (result?.data?.user_id !== decodedToken.user_id) {
      setShowErrorToast({
        view: true,
        message: 'connection.tokenInvalid',
      })
      return false
    }

    const update: any = await updateUser({
      id: decodedToken.user_id,
      password: values.passwordOne,
    })

    if (!update?.data || update?.error) {
      setShowErrorToast({
        view: true,
        message: update?.error?.data?.message,
      })
      return false
    }

    setShowSuccessToastUpdatePassword({
      view: true,
      message: 'connection.passwordUpdated',
    })

    return true
  }

  return (
    <>
      <ForgetPasswordManagement
        sendResetEmail={sendResetPasswordMail}
        updatePassword={updatePassword}
        token={isToken}
      />

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />

      <Toast open={showSuccessToast.view} text={showSuccessToast.message} />
    </>
  )
}
