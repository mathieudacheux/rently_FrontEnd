import { FormikProvider } from 'formik'
import useLoginFormik from './hooks/useLoginFormik.ts'
import LoginManagementStep from './LoginManagement/LoginManagementStep.tsx'

export default function Connection(): JSX.Element {
  const { loginFormik } = useLoginFormik()

  return (
    <FormikProvider value={loginFormik}>
      <LoginManagementStep />
    </FormikProvider>
  )
}
