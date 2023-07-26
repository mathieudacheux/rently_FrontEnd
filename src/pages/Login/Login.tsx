import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FormikProvider } from 'formik'
import useLoginFormik from './hooks/useLoginFormik.ts'
import LoginManagementStep from './Login/LoginManagementStep.tsx'

export default function Connection(): JSX.Element {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const { loginFormik } = useLoginFormik()

  return (
    <FormikProvider value={loginFormik}>
      <LoginManagementStep />
    </FormikProvider>
  )
}
