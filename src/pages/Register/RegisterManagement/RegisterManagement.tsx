import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'
import RegistrationImage from '../../../assets/images/registration.webp'
import Typography from '../../../components/atoms/Typography.tsx'
import CardButton from '../../../components/atoms/CardButton.tsx'
import { Link } from 'react-router-dom'
import FormikCheckbox from '../../../components/molecules/core/FormikCheckbox.tsx'
import Profil from '../../../components/atoms/icons/Profil.tsx'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function RegisterManagement({
  create,
}: {
  create: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='w-full flex flex-col md:flex-row items-center md:justify-center h-[calc(100dvh-75px)]'>
      <img
        className='w-full md:w-1/2 object-cover md:rounded-tr-[15px] block 
        h-[100px] md:h-[calc(100dvh-75px)]
        '
        src={RegistrationImage}
        alt='Login'
      />
      <div className='w-10/12 md:w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle w-[430px]'>
          <Typography variant='h2' className='text-neutral-900'>
            {t('connection.register')}
          </Typography>
          <div className='flex flex-start pt-4'>
            <Typography variant='tiny-text' className='text-neutral-900'>
              {t('connection.ctaLogin')}
            </Typography>
            <Link to={APP_ROUTES.LOGIN} className='ml-1'>
              <Typography variant='cta' className='font-semibold'>
                {t('connection.ctaLoginClick')}
              </Typography>
            </Link>
          </div>
          <div className='flex justify-between items-center pt-4'>
            <div className='flex flex-col w-[calc(50%-8px)]'>
              <div>
                <Typography variant='text' className='text-neutral-900'>
                  {t('connection.firstname')}
                </Typography>
              </div>
              <div className='pt-2'>
                <FormikTextField
                  name='firstname'
                  placeholder={t('connection.firstname')}
                  icon={<Profil primary />}
                />
              </div>
            </div>
            <div className='flex flex-col w-[calc(50%-8px)]'>
              <div>
                <Typography variant='text' className='text-neutral-900'>
                  {t('connection.lastname')}
                </Typography>
              </div>
              <div className='pt-2'>
                <FormikTextField
                  name='lastname'
                  placeholder={t('connection.lastname')}
                  icon={<Profil primary />}
                />
              </div>
            </div>
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
            <FormikCheckbox
              name='newsletter'
              label={t('connection.newsletter')}
            />
          </div>
          <div className='pt-4'>
            <CardButton onClick={() => create()} text='connection.register' />
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
              <Typography variant='tiny-text' className='text-neutral-900'>
                {t('connection.registerGoogle')}
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
              <Typography variant='tiny-text' className='text-neutral-900'>
                {t('connection.registerApple')}
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
