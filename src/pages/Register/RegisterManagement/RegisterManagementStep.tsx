import { useState } from 'react'
import { RegisterFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import RegisterManagement from './RegisterManagement.tsx'
import Toast from '../../../components/molecules/Toast.tsx'
import { useCreateUserMutation } from '../../../features/user/userApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import { useGetCountriesQuery } from '../../../features/country/countryApi.ts'
import { useGetRolesQuery } from '../../../features/role/roleApi.ts'
import { useTranslation } from 'react-i18next'

export default function LoginManagementStep(): JSX.Element {
  const { i18n } = useTranslation()
  const formikContext = useFormikContext<RegisterFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [postUser] = useCreateUserMutation()

  const getCountry = useGetCountriesQuery({
    name: i18n.language === 'fr' ? 'France' : 'Royaume-Uni',
  })

  const getRole = useGetRolesQuery({
    name: 'VISITOR',
  })

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

  const createUser = async () => {
    const formIsValid = await formikValidator(values)

    if (!formIsValid) return false

    const result: any = await postUser({
      mail: values.mail,
      password: values.password,
      country: getCountry.data?.id,
      role: getRole.data?.id,
    })

    if (!result?.data || result?.error) {
      setShowErrorToast({
        view: true,
        message: result?.error?.data?.message,
      })
      return false
    }

    localStorage.setItem('token', result?.data?.token)

    return true
  }

  return (
    <>
      <RegisterManagement login={createUser} />

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />

      <Toast open={showSuccessToast.view} text={showSuccessToast.message} />
    </>
  )
}
