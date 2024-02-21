import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Typography from '../../components/atoms/Typography.tsx'
import { useGetAgencyByIdQuery } from '../../features/agency/agencyApi.ts'
import { useGetUserByFilterQuery } from '../../features/user/userApi.ts'
import { useGetRolesQuery } from '../../features/role/roleApi.ts'

export default function AgencyDetailManagement() {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const agencyDetail = useGetAgencyByIdQuery(id)
  const userDetail = useGetUserByFilterQuery({ agency_id: id })
  const roles = useGetRolesQuery({}).data?.find(
    (role: any) => role.name === 'AGENT',
  )?.role_id
  const agent = userDetail.data?.filter((user: any) => user.role_id === roles)

  if (!id) {
    return (
      <div className='w-full h-[calc(100dvh-75px)] md:h-[calc(100vh-500px)] flex flex-col justify-center items-center'>
        <Typography variant='h3'>{t('agency.noAgencySelected')}</Typography>
      </div>
    )
  }

  return (
    <div
      className='w-full h-[250px] flex flex-col justify-center items-center'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(https://back-rently.mathieudacheux.fr/public/img/agency/${id}/agency.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
      }}
    >
      <div className='bg-primary p-2 rounded-md'>
        <Typography variant='h1' className='text-white'>
          {t('agency.agency')}
        </Typography>
      </div>
    </div>
  )
}
