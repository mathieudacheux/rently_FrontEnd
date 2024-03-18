import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'
import LoginImage from '../../../assets/images/login.webp'
import Typography from '../../../components/atoms/Typography.tsx'
import CardButton from '../../../components/atoms/CardButton.tsx'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { useFormikContext } from 'formik'
import { LoginFormik } from '../types.ts'

export default function LoginManagement({
  login,
}: {
  login: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()
  const { values } = useFormikContext<LoginFormik>()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='w-full flex flex-col md:flex-row items-center md:justify-center h-[calc(100dvh-75px)]'>
      <img
        className='w-full md:w-1/2 object-cover md:rounded-tr-[15px] hidden md:block 
        h-[75px] md:h-[calc(100dvh-75px)]
        '
        src={LoginImage}
        alt='Login'
      />
      <div className='w-10/12 md:w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle w-[400px]'>
          <Typography variant='h2' className='text-neutral-900'>
            {t('connection.login')}
          </Typography>
          <div className='flex flex-start pt-4'>
            <Typography
              variant='tiny-text'
              className='text-neutral-900 text-sm'
            >
              {t('connection.ctaRegister')}
            </Typography>
            <Link to={APP_ROUTES.REGISTER} className='ml-1'>
              <Typography variant='cta' className='font-semibold flex'>
                {t('connection.ctaRegisterClick')}
              </Typography>
            </Link>
          </div>
          <div className='pt-4'>
            <Typography variant='text' className='text-neutral-900'>
              {t('connection.mail')}
            </Typography>
          </div>
          <div className='pt-2'>
            <FormikTextField
              name='mail'
              placeholder={t('connection.mail')}
              icon={<Mail />}
            />
          </div>
          <div className='pt-4'>
            <Typography variant='text' className='text-neutral-900'>
              {t('connection.password')}
            </Typography>
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
            <CardButton onClick={() => login()} text='connection.login' />
          </div>
          <div className='pt-4 flex justify-center'>
            <Link
              to={APP_ROUTES.FORGOT_PASSWORD}
              state={{
                from: APP_ROUTES.LOGIN,
                email: values.mail !== '' ? values.mail : '',
              }}
            >
              <Typography variant='tiny-text' className='text-neutral-900'>
                {t('connection.ctaForgotPassword')}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
