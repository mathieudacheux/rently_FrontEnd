import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import FormikTextField from '../../../../components/molecules/core/FormikTextField.tsx'
import Password from '../../../../components/atoms/icons/Password.tsx'
import CardButton from '../../../../components/atoms/CardButton.tsx'
import { useFormikContext } from 'formik'
import { useUpdateUserMutation } from '../../../../features/user/userApi.ts'

export default function PasswordSection(): JSX.Element {
  const { t } = useTranslation()
  const { values, resetForm } = useFormikContext()
  const [updateUser] = useUpdateUserMutation()

  const userData =
    window.localStorage.getItem('user') !== null
      ? JSON.parse(window.localStorage.getItem('user') as string)
      : null

  const handleSubmit = async (values: any) => {
    const response: any = await updateUser({
      id: userData[0].user_id,
      password: values.newPassword,
    })

    if (response?.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    resetForm()
  }

  return (
    <div className='pl-4 w-full'>
      <div className='flex flex-col justify-center align-middle w-full'>
        <Typography variant='h2' className='text-neutral-900'>
          {t('myAccount.passwordSection.title')}
        </Typography>
        <div className='pt-4 w-full'>
          <Typography variant='text' className='text-neutral-900'>
            {t('myAccount.passwordSection.oldPassword')}
          </Typography>
        </div>
        <div className='pt-2 w-2/5'>
          <FormikTextField
            name='oldPassword'
            password
            placeholder={t('connection.password')}
            icon={<Password />}
          />
        </div>
        <div className='flex flex-col md:flex-row flex-start w-full'>
          <div className='flex flex-col w-2/5 mr-4'>
            <div className='pt-4 w-full'>
              <Typography variant='text' className='text-neutral-900'>
                {t('connection.password')}
              </Typography>
            </div>
            <div className='pt-2 w-full'>
              <FormikTextField
                name='newPassword'
                password
                placeholder={t('connection.password')}
                icon={<Password />}
              />
            </div>
          </div>
          <div className='flex flex-col w-2/5'>
            <div className='pt-4 w-full'>
              <Typography variant='text' className='text-neutral-900'>
                {t('connection.passwordConfirm')}
              </Typography>
            </div>
            <div className='pt-2'>
              <FormikTextField
                name='newPasswordConfirm'
                password
                placeholder={t('connection.password')}
                icon={<Password />}
              />
            </div>
          </div>
        </div>
        <div className='pt-4 w-[125px]'>
          <CardButton
            onClick={() => handleSubmit(values)}
            text='myAccount.passwordSection.button'
          />
        </div>
      </div>
    </div>
  )
}
