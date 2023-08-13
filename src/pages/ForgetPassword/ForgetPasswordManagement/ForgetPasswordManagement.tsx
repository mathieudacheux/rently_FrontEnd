import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import LoginImage from '../../../assets/images/login.webp'
import Typography from '../../../components/atoms/Typography.tsx'
import CardButton from '../../../components/atoms/CardButton.tsx'
import Password from '../../../components/atoms/icons/Password.tsx'

export default function ForgetPasswordManagement({
  sendResetEmail,
  updatePassword,
  token = false,
}: {
  sendResetEmail: () => Promise<boolean>
  updatePassword: () => Promise<boolean>
  token?: boolean
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='w-full flex flex-col md:flex-row items-center md:justify-center h-[calc(100dvh-75px)]'>
      <img
        className='w-full md:w-1/2 object-cover md:rounded-tr-[15px]
        hidden md:block md:h-[calc(100dvh-75px)]
        '
        src={LoginImage}
        alt='Login'
      />
      {token ? (
        <div className='w-10/12 md:w-1/2 flex justify-center align-middle h-full'>
          <div className='flex flex-col justify-center align-middle w-[400px]'>
            <Typography variant='h2' className='text-neutral-900'>
              {t('connection.forgotPassword')}
            </Typography>
            <div className='pt-4'>
              <Typography variant='tiny-text' className='text-neutral-900'>
                {t('connection.ctaPassword')}
              </Typography>
            </div>
            <div className='pt-4'>
              <Typography variant='text' className='text-neutral-900'>
                {t('connection.password')}
              </Typography>
            </div>
            <div className='pt-2'>
              <FormikTextField
                name='passwordOne'
                password
                placeholder={t('connection.password')}
                icon={<Password />}
              />
            </div>
            <div className='pt-4'>
              <Typography variant='text' className='text-neutral-900'>
                {t('connection.passwordConfirm')}
              </Typography>
            </div>
            <div className='pt-2'>
              <FormikTextField
                name='passwordTwo'
                password
                placeholder={t('connection.password')}
                icon={<Password />}
              />
            </div>
            <div className='pt-4'>
              <CardButton
                onClick={() => updatePassword()}
                text='connection.modify'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='w-10/12 md:w-1/2 flex justify-center align-middle h-full'>
          <div className='flex flex-col justify-center align-middle w-[400px]'>
            <Typography variant='h2' className='text-neutral-900'>
              {t('connection.forgotPassword')}
            </Typography>
            <div className='pt-4'>
              <Typography variant='tiny-text' className='text-neutral-900'>
                {t('connection.ctaPassword')}
              </Typography>
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
              <CardButton
                onClick={() => sendResetEmail()}
                text='connection.resetPassword'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
