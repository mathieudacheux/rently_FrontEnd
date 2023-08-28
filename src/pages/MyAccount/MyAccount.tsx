import { FormikProvider } from 'formik'
import useMyAccountFormik from './hooks/useMyAccountFormik.ts'
import MyAccountManagementStep from './MyAccountManagement/MyAccountManagementStep.tsx'

export default function MyAccount(): JSX.Element {
  const { accountFormik } = useMyAccountFormik()

  return (
    <FormikProvider value={accountFormik}>
      <MyAccountManagementStep />
    </FormikProvider>
  )
}
