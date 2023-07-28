import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { ForgetPasswordFormik } from '../types.ts'
import ForgetPasswordManagement from './ForgetPasswordManagement.tsx'
import {
  useLazyGetUserByFilterQuery,
  useUpdateUserMutation,
} from '../../../features/user/userApi.ts'
import { useResetPasswordMailMutation } from '../../../features/mail/mailApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import Toast from '../../../components/molecules/Toast.tsx'

export default function ForgetPasswordManagementStep(): JSX.Element {
  const formikContext = useFormikContext<ForgetPasswordFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [getUserByFilter] = useLazyGetUserByFilterQuery()
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

    const update: any = await updateUser({
      id: result?.data[0]?.user_id,
      password: values.passwordOne,
    })

    if (!update?.data || update?.error) {
      setShowErrorToast({
        view: true,
        message: update?.error?.data?.message,
      })
      return false
    }

    setShowSuccessToast({
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
