import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import { useTranslation } from 'react-i18next'
import Typography from '../../../components/atoms/Typography.tsx'

export default function Newsletter(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div
      className='w-full h-[175px] md:h-[130px] flex flex-col md:flex-row items-center
      justify-around bg-primary mt-[30px]'
    >
      <div className='w-11/12 md:w-6/12'>
        <Typography
          variant='h3'
          className='text-white font-bold text-center md:text-left'
        >
          {t('newsletter')}
        </Typography>
      </div>
      <div className='w-10/12 md:w-5/12'>
        <FormikTextField
          name='newsletter'
          icon={<Mail />}
          placeholder='Email'
        />
      </div>
    </div>
  )
}
