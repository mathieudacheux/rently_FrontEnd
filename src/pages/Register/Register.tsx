import { FormikProvider } from 'formik'
import useRegisterFormik from './hooks/useRegisterFormik.ts'
import RegisterManagementStep from './RegisterManagement/RegisterManagementStep.tsx'

export default function Connection(): JSX.Element {
  const { registerFormik } = useRegisterFormik()

  return (
    <FormikProvider value={registerFormik}>
      <RegisterManagementStep />
    </FormikProvider>
  )
}
