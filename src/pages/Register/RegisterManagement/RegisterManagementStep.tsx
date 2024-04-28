import { useEffect } from 'react'
import { RegisterFormik } from '../types.ts'
import { useFormikContext } from 'formik'
import RegisterManagement from './RegisterManagement.tsx'
import { useCreateUserMutation } from '../../../features/user/userApi.ts'
import useFormikValidator from '../../../hooks/useFormikValidator.ts'
import { useLazyGetCountriesQuery } from '../../../features/country/countryApi.ts'
import { useLazyGetRolesQuery } from '../../../features/role/roleApi.ts'
import { useConfirmationMailMutation } from '../../../features/mail/mailApi.ts'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

export default function LoginManagementStep(): JSX.Element {
  const { t, i18n } = useTranslation()
  const formikContext = useFormikContext<RegisterFormik>()
  const formikValidator = useFormikValidator(formikContext)
  const { values } = formikContext

  const [postUser] = useCreateUserMutation()
  const [postConfirmationMail] = useConfirmationMailMutation()
  const [getCountry, { data: dataCountry }] = useLazyGetCountriesQuery()
  const [getRole, { data: dataRole }] = useLazyGetRolesQuery()

  useEffect(() => {
    const fetchForPost = async () => {
      await getCountry({
        name: i18n.language === 'fr' ? 'France' : 'Royaume-Uni',
      }).unwrap()
      await getRole({
        name: 'VISITOR',
      }).unwrap()
    }
    fetchForPost()
  }, [])

  const createUser = async () => {
    const formIsValid = await formikValidator(values)

    if (!formIsValid) return false

    const result: any = await postUser({
      firstname: values.firstName,
      lastname: values.lastName,
      mail: values.mail,
      password: values.password,
      country_id: dataCountry[0].country_id,
      role_id: dataRole[0].id || 6,
      newsletter: values.newsletter,
    })

    if (!result?.data || result?.error) {
      toast.error(result?.error?.data?.message)
      return false
    }

    await postConfirmationMail({
      id: result?.data.user_id,
    })

    toast.success(t('connection.emailValidation'))
    return true
  }

  return (
    <>
      <RegisterManagement create={createUser} />
    </>
  )
}
