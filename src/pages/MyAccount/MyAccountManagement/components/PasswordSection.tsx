import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import FormikTextField from '../../../../components/molecules/core/FormikTextField.tsx'
import Password from '../../../../components/atoms/icons/Password.tsx'
import CardButton from '../../../../components/atoms/CardButton.tsx'
import { useFormikContext } from 'formik'
import { useUpdateUserMutation } from '../../../../features/user/userApi.ts'
import { ToastState } from '../../../../types.ts'
import Toast from '../../../../components/molecules/Toast.tsx'

export default function PasswordSection(): JSX.Element {
  const { t } = useTranslation()
  const { values, resetForm } = useFormikContext()

  const [updateUser] = useUpdateUserMutation()

  const [showErrorToast, setShowErrorToast] = useState<ToastState>({
    view: false,
    message: '',
  })

  const [showSuccessToast, setShowSuccessToast] = useState<ToastState>({
    view: false,
    message: '',
  })

  useEffect(() => {
    if (showErrorToast.view) {
      setTimeout(() => {
        setShowErrorToast({
          view: false,
          message: '',
        })
      }, 3000)
    }
  }, [showErrorToast])

  useEffect(() => {
    if (showSuccessToast.view) {
      setTimeout(() => {
        setShowSuccessToast({
          view: false,
          message: '',
        })
      }, 3000)
    }
  }, [showSuccessToast])

  const userData =
    window.localStorage.getItem('user') !== null
      ? JSON.parse(window.localStorage.getItem('user') as string)
      : null

  const handleSubmit = async (values: any) => {
    const response: any = await updateUser({
      id: userData[0].user_id,
      password: values.oldPassword,
      newPassword: values.newPassword,
    })

    if (!response?.data || response?.error) {
      setShowErrorToast({
        view: true,
        message: response?.error?.data?.message,
      })
      return
    }

    localStorage.setItem('user', JSON.stringify(response.data))
    setShowSuccessToast({
      view: true,
      message: 'myAccount.success',
    })

    resetForm()
  }

  return (
    <>
      <div className='md:pl-4'>
        <div className='flex flex-col justify-center align-middle w-full'>
          <Typography variant='h2' className='text-neutral-900'>
            {t('myAccount.passwordSection.title')}
          </Typography>
          <div className='pt-4 w-full'>
            <Typography variant='text' className='text-neutral-900'>
              {t('myAccount.passwordSection.oldPassword')}
            </Typography>
          </div>
          <div className='pt-2 w-full md:w-2/5'>
            <FormikTextField
              name='oldPassword'
              password
              placeholder={t('connection.password')}
              icon={<Password />}
            />
          </div>
          <div className='flex flex-col md:flex-row flex-start w-full'>
            <div className='flex flex-col w-full md:w-2/5 md:mr-4'>
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
            <div className='flex flex-col w-full md:w-2/5'>
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
          <div className='pt-4 md:w-[125px]'>
            <CardButton
              onClick={() => handleSubmit(values)}
              text='myAccount.passwordSection.button'
            />
          </div>
        </div>
      </div>

      <Toast error open={showErrorToast.view} text={showErrorToast.message} />
      <Toast open={showSuccessToast.view} text={showSuccessToast.message} />
    </>
  )
}
