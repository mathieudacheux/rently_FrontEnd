import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import FormikTextField from '../../../../components/molecules/core/FormikTextField.tsx'
import FormikCheckbox from '../../../../components/molecules/core/FormikCheckbox.tsx'
import Profil from '../../../../components/atoms/icons/Profil.tsx'
import Mail from '../../../../components/atoms/icons/Mail.tsx'
import CardButton from '../../../../components/atoms/CardButton.tsx'
import ToggleLanguage from '../../../../components/atoms/Toggle/ToggleLanguage.tsx'
import { useUpdateUserMutation } from '../../../../features/user/userApi.ts'
import { useFormikContext } from 'formik'
import { toast } from 'sonner'
import { MyAccountFormik } from '../../types.ts'

export default function PersonnalSection(): JSX.Element {
  const { t } = useTranslation()
  const { values } = useFormikContext<MyAccountFormik>()

  const [updateUser] = useUpdateUserMutation()

  const handleSubmit = async () => {
    const response: any = await updateUser({
      id: values.id,
      firstname: values.firstname,
      name: values.lastname,
      mail: values.mail,
      phone: values.phone,
      newsletter: values.newsletter,
    })

    if (!response?.data || response?.error) {
      toast.error(response?.error?.data?.message)
      return
    }

    localStorage.setItem('user', JSON.stringify(response.data))

    toast.success(t('myAccount.success'))
  }

  return (
    <>
      <div className='md:pl-4'>
        <Typography variant='h2' className='text-neutral-900'>
          {t('myAccount.personalInformation')}
        </Typography>
        <div className='flex flex-row mt-4'>
          <div className='flex flex-col w-[calc(50%-8px)] md:w-2/5 mr-4'>
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
          <div className='flex flex-col w-[calc(50%-8px)] md:w-2/5'>
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
        <div className='pt-4 w-full md:w-[calc(80%+16px)]'>
          <Typography variant='text' className='text-neutral-900'>
            {t('connection.mail')}
          </Typography>
          <div className='pt-2'>
            <FormikTextField
              name='mail'
              placeholder={t('connection.mail')}
              icon={<Mail />}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-4'>
          <div className='flex flex-col w-full md:w-2/5 mr-4'>
            <div>
              <Typography variant='text' className='text-neutral-900'>
                {t('myAccount.personalSection.phone')}
              </Typography>
            </div>
            <div className='pt-2'>
              <FormikTextField
                name='phone'
                placeholder={t('myAccount.personalSection.phone')}
                icon={<Profil primary />}
              />
            </div>
          </div>
          <div className='flex flex-col w-full md:w-2/5 justify-center'>
            <div className='flex items-center pt-4'>
              <FormikCheckbox
                name='newsletter'
                label={t('myAccount.personalSection.newsletter')}
              />
            </div>
          </div>
        </div>
        <ToggleLanguage />
        <div className='pt-4 w-full md:w-[125px]'>
          <CardButton
            onClick={() => handleSubmit()}
            text='myAccount.passwordSection.button'
          />
        </div>
      </div>
    </>
  )
}
