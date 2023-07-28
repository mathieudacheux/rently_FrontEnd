import { FormikProvider } from 'formik'
import useForgetPassword from './hooks/useForgetPassword.ts'
import ForgetPasswordManagementStep from './ForgetPasswordManagement/ForgetPasswordManagementStep.tsx'

export default function ForgetPassword(): JSX.Element {
  const { forgetPasswordFormik } = useForgetPassword()

  return (
    <FormikProvider value={forgetPasswordFormik}>
      <ForgetPasswordManagementStep />
    </FormikProvider>
  )
}
