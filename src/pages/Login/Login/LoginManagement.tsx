import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Toast from '../../../components/molecules/Toast.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'

export default function LoginManagement({
  login,
}: {
  login: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()

  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <>
      <FormikTextField
        name='mail'
        placeholder={t('connection.mail')}
        icon={<Mail />}
      />
      <FormikTextField
        password={!showPassword}
        name='password'
        placeholder={t('connection.password')}
        showPassword={() => setShowPassword(!showPassword)}
        icon={<Password />}
      />
      <button onClick={login}>Login</button>
    </>
  )
}
