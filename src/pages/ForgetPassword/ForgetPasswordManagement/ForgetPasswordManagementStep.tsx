import { useState } from 'react'
import { useFormikContext } from 'formik'
import { ForgetPasswordFormik } from '../types.ts'
import ForgetPasswordManagement from './ForgetPasswordManagement.tsx'
import { useLazyGetUserByFilterQuery } from '../../../features/user/userApi.ts'
import { useResetPasswordMailMutation } from '../../../features/mail/mailApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import Toast from '../../../components/molecules/Toast.tsx'

export default function ForgetPasswordManagementStep(): JSX.Element {
  const formikContext = useFormikContext<ForgetPasswordFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [getUserByFilter] = useLazyGetUserByFilterQuery()
  const [resetPasswordMail] = useResetPasswordMailMutation()

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

  const resetPassword = async () => {
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

  return (
    <>
      <ForgetPasswordManagement forgetPassword={resetPassword} />

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />

      <Toast open={showSuccessToast.view} text={showSuccessToast.message} />
    </>
  )
}
