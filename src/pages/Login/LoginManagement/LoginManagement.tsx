import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'
import LoginImage from '../../../assets/images/login.png'
import Typography from '../../../components/atoms/Typography.tsx'
import CardButton from '../../../components/atoms/CardButton.tsx'
import { Link } from 'react-router-dom'

export default function LoginManagement({
  login,
}: {
  login: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='w-full flex h-[calc(100vh-75px)]'>
      <img
        className='w-1/2 object-cover h-full rounded-tr-[15px]'
        src={LoginImage}
        alt='Login'
      />
      <div className='w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle w-[400px]'>
          <Typography variant='h2'>{t('connection.login')}</Typography>
          <div className='flex flex-start pt-4'>
            <Typography variant='tiny-text'>
              {t('connection.ctaRegister')}
            </Typography>
            <Link to='/register' className='ml-1'>
              <Typography variant='tiny-text' className='font-semibold'>
                {t('connection.ctaRegisterClick')}
              </Typography>
            </Link>
          </div>
          <div className='pt-4'>
            <Typography variant='text'>{t('connection.mail')}</Typography>
          </div>
          <div className='pt-2'>
            <FormikTextField
              name='mail'
              placeholder={t('connection.mail')}
              icon={<Mail />}
              iconError={<Mail error />}
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
              iconError={<Password error />}
            />
          </div>
          <div className='pt-4'>
            <CardButton onClick={() => login()} text='connection.login' />
          </div>
          <div className='pt-4 flex justify-center'>
            <Link to='/register'>
              <Typography variant='tiny-text'>
                {t('connection.ctaForgotPassword')}
              </Typography>
            </Link>
          </div>
          <div className='pt-4'>
            <hr className='border-t-2 border-gray-300' />
          </div>
          <div className='pt-4 flex justify-center'>
            <button
              aria-label='Continue with google'
              role='button'
              className='focus:outline-none focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-neutral-900 flex items-center w-full justify-center
                shadow-[-5px_5px_15px_0px_#00000026]'
            >
              <img
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg'
                alt='google'
                className='mr-2'
              />
              <Typography variant='tiny-text'>
                {t('connection.loginGoogle')}
              </Typography>
            </button>
          </div>
          <div className='pt-4 flex justify-center'>
            <button
              aria-label='Continue with Apple'
              role='button'
              className='focus:outline-none focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-neutral-900 flex items-center w-full justify-center
                shadow-[-5px_5px_15px_0px_#00000026]'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
                alt='apple'
                className='mr-2 w-5'
              />
              <Typography variant='tiny-text'>
                {t('connection.loginApple')}
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}