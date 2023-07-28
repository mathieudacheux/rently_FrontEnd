import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useTranslation } from 'react-i18next'
import Typography from '../../components/atoms/Typography.tsx'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../routes/routes.ts'
import { JWT } from './types.ts'
import { useLazyGetUserByIdQuery } from '../../features/user/userApi.ts'

export default function ValidateAccount(): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [getUserById, { data: dataUser }] = useLazyGetUserByIdQuery()

  const [redirection, setRedirection] = useState<boolean>(false)

  useEffect(() => {
    if (redirection) {
      setTimeout(() => {
        navigate(APP_ROUTES.LOGIN, {
          state: { from: APP_ROUTES.VALIDATE_ACCOUNT },
        })
      }, 1500)
      setRedirection(false)
    }
  }, [redirection])

  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')

  if (!token) {
    setTimeout(() => {
      navigate(APP_ROUTES.HOME)
    }, 1500)
    return (
      <div className='h-[calc(100vh-75px)] flex justify-center items-center'>
        <div className='h-full w-10/12 flex flex-col justify-center items-center'>
          <span className='loading loading-spinner loading-lg bg-primary mb-4'></span>
          <Typography variant='h2' className='text-center'>
            {t('connection.invalidToken')}
          </Typography>
        </div>
      </div>
    )
  }

  const decodedToken: JWT = jwt_decode(token as string)

  if (Date.now() >= decodedToken.exp * 1000) {
    setTimeout(() => {
      navigate(APP_ROUTES.HOME)
    }, 1500)
    return (
      <div className='h-[calc(100vh-75px)] w-10/12 flex flex-col justify-center items-center'>
        <span className='loading loading-spinner loading-lg bg-primary mb-4'></span>
        <Typography variant='h2' className='text-center'>
          {t('connection.expiredToken')}
        </Typography>
      </div>
    )
  }

  useEffect(() => {
    const fetchUser = async () => {
      getUserById(decodedToken.user_id)
    }
    fetchUser()
  }, [decodedToken.user_id])

  useEffect(() => {
    if (dataUser?.user_id === decodedToken.user_id) {
      setRedirection(true)
    }
  }, [dataUser])

  return (
    <div className='h-[calc(100vh-75px)] flex justify-center items-center'>
      <div className='h-[calc(100vh-75px)] w-10/12 flex flex-col justify-center items-center'>
        <span className='loading loading-spinner loading-lg bg-primary mb-4'></span>
        <Typography variant='h2' className='text-center'>
          {t('connection.validateAccount')}
        </Typography>
      </div>
    </div>
  )
}
