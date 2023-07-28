import { useTranslation } from 'react-i18next'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import LoginImage from '../../../assets/images/login.webp'
import Typography from '../../../components/atoms/Typography.tsx'
import CardButton from '../../../components/atoms/CardButton.tsx'

export default function ForgetPasswordManagement({
  forgetPassword,
}: {
  forgetPassword: () => Promise<boolean>
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='w-full flex justify-center h-[calc(100vh-75px)]'>
      <img
        className='w-1/2 object-cover h-full rounded-tr-[15px] 
        hidden md:block 
        '
        src={LoginImage}
        alt='Login'
      />
      <div className='w-10/12 md:w-1/2 flex justify-center align-middle h-full'>
        <div className='flex flex-col justify-center align-middle w-[400px]'>
          <Typography variant='h2'>{t('connection.forgotPassword')}</Typography>
          <div className='pt-4'>
            <Typography variant='text'>{t('connection.mail')}</Typography>
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
              onClick={() => forgetPassword()}
              text='connection.login'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
