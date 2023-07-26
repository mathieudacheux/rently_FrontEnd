import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'
import LoginImage from '../../../assets/images/login.png'
import Typography from '../../../components/atoms/Typography.tsx'

export default function LoginManagement({
  login,
}: {
  login: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='w-full flex h-[calc(100vh-75px)]'>
      <img className='w-1/2 object-cover h-full' src={LoginImage} alt='Login' />
      <div className='w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle'>
          <Typography variant='h2'>{t('connection.login')}</Typography>
          <div className='pt-4'>
            <Typography variant='text'>{t('connection.mail')}</Typography>
          </div>
          <div className='pt-4'>
            <FormikTextField
              name='mail'
              placeholder={t('connection.mail')}
              icon={<Mail />}
            />
          </div>
          <div className='pt-4'>
            <Typography variant='text'>{t('connection.password')}</Typography>
          </div>
          <div className='pt-2'>
            <FormikTextField
              password={!showPassword}
              name='password'
              placeholder={t('connection.password')}
              showPassword={() => setShowPassword(!showPassword)}
              icon={<Password />}
            />
          </div>
          <div className='pt-4'>
            <button
              onClick={login}
              className='btn bg-primary hover:bg-primary text-white border-0 w-full'
            >
              ferez
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
