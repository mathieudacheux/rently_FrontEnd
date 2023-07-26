import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'
import LoginImage from '../../../assets/images/login.png'

export default function LoginManagement({
  login,
}: {
  login: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div
      className='w-full flex 
      h-[calc(100vh-100px)]
    '
    >
      <img className='w-1/2 object-cover h-full' src={LoginImage} alt='Login' />
      <div className='w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle'>
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
        </div>
      </div>
    </div>
  )
}
