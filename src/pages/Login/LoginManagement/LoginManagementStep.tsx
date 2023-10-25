import { useState, useEffect } from 'react'
import { LoginFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import LoginManagement from './LoginManagement.tsx'
import { useLoginMutation } from '../../../features/auth/authApi.ts'
import { useLazyGetUserByFilterQuery } from '../../../features/user/userApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import { useNavigate, useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

export default function LoginManagementStep(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const formikContext = useFormikContext<LoginFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [createUser] = useLoginMutation()
  const [getUserByFilter] = useLazyGetUserByFilterQuery()

  const fromValidateAccount =
    location.state?.from === APP_ROUTES.VALIDATE_ACCOUNT

  const token = localStorage.getItem('token')

  const [userToken, setUserToken] = useState<boolean>(false)

  useEffect(() => {
    if (fromValidateAccount) {
      toast.success(t('connection.accountValidated'))
    }
  }, [])

  useEffect(() => {
    if (!token || !userToken) return

    const getUser = async () => {
      const result: any = await getUserByFilter({
        mail: values.mail,
      })

      if (!result?.data || result?.error) {
        toast.error(result?.error?.data?.message)
        return
      }

      window.localStorage.setItem('mail', values.mail)
      window.localStorage.setItem('user', JSON.stringify(result?.data[0]))

      toast.success(t('connection.connected'))

      setTimeout(() => {
        navigate(APP_ROUTES.HOME)
      }, 1000)
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
      toast.error(result?.error?.data?.message)
      return false
    }

    localStorage.setItem('token', result?.data?.token)

    setUserToken(true)

    return true
  }

  return (
    <>
      <LoginManagement login={loginUser} />
    </>
  )
}
