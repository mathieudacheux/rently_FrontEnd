import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import Mail from '../../../components/atoms/icons/Mail.tsx'
import { useTranslation } from 'react-i18next'
import Typography from '../../../components/atoms/Typography.tsx'
import { useFormikContext } from 'formik'
import { useSubscribeNewsletterMutation } from '../../../features/mail/mailApi.ts'
import { toast } from 'sonner'

export default function NewsletterSection(): JSX.Element {
  const { t } = useTranslation()
  const { values } = useFormikContext<any>()

  const [subscribeNewsletter] = useSubscribeNewsletterMutation()

  const handleSubmit = async () => {
    const response: any = await subscribeNewsletter({
      mail: values.newsletter,
    })

    if (!response?.data || response?.error) {
      toast.error(response?.error?.data?.message)
      return
    }

    toast.success(t('home.newsletter'))
  }

  return (
    <>
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
            handleKeyDown={handleSubmit}
          />
        </div>
      </div>
    </>
  )
}
