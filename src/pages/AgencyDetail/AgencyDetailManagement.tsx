import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Typography from '../../components/atoms/Typography.tsx'
import { useGetAgencyByIdQuery } from '../../features/agency/agencyApi.ts'
import { useGetUserByFilterQuery } from '../../features/user/userApi.ts'
import { useGetRolesQuery } from '../../features/role/roleApi.ts'
import {
  RoleSerializerRead,
  UserSerializerRead,
  AgencySerializerRead,
} from '../../api/index.ts'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Icon from '../../assets/icons/MapIcon.svg'
import Phone from '../../components/atoms/icons/Phone.tsx'
import Contact from '../../components/atoms/icons/Contact.tsx'

export default function AgencyDetailManagement() {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const agencyDetail = useGetAgencyByIdQuery(id)?.data as AgencySerializerRead
  const userDetail = useGetUserByFilterQuery({ agency_id: id })
    ?.data as UserSerializerRead[]

  const roles = useGetRolesQuery({}).data?.find(
    (role: RoleSerializerRead) => role.name === 'AGENT',
  )?.role_id

  const agents = userDetail?.filter(
    (user: UserSerializerRead) =>
      user.role_id === roles && user?.agency_id === Number(id),
  )

  const handleCall = (agent: UserSerializerRead) => {
    window.open(`tel:${agent?.phone || ''}`, '_blank')
  }

  const handleMail = (agent: UserSerializerRead) => {
    window.open(`mailto:${agent?.mail || ''}`, '_blank')
  }

  if (!id) {
    return (
      <div className='w-full h-[calc(100dvh-75px)] md:h-[calc(100vh-500px)] flex flex-col justify-center items-center'>
        <Typography variant='h3'>{t('agency.noAgencySelected')}</Typography>
      </div>
    )
  }

  const myIcon = new L.Icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
  })

  return (
    <div className='w-full flex flex-col items-center'>
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
        {agencyDetail?.name && (
          <div className='bg-primary p-2 rounded-md'>
            <Typography variant='h1' className='text-white text-center'>
              {agencyDetail?.name ?? ''}
            </Typography>
          </div>
        )}
      </div>
      <div className='w-11/12 mt-5 md:mt-12 flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-8/12 flex flex-col md:flex-row md:justify-evenly md:flex-wrap justify-start gap-5 md:gap-10 mt-5 md:mt-0 p-0 md:p-4'>
          {agents?.map((agent) => {
            if (!agent?.firstname) return null
            return (
              <div
                className='w-full md:w-[250px] card flex flex-col items-center p-2'
                key={agent?.user_id}
              >
                <img
                  className='w-20 md:w-40 md:h-40 rounded-full'
                  src={
                    `https://back-rently.mathieudacheux.fr/public/img/agent/${agent?.user_id}/avatar.png` ??
                    ''
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null
                    currentTarget.src =
                      'https://back-rently.mathieudacheux.fr/public/img/agent/none/avatar.png'
                  }}
                  alt='avatar'
                />
                <div className='flex flex-col items-center'>
                  <Typography variant='text-light'>{`${agent?.firstname} ${agent.name}`}</Typography>
                  <div className='w-full flex justify-between'>
                    <div
                      className='btn-cta btn-call mr-2'
                      onClick={() => handleCall(agent)}
                    >
                      <Phone />
                      {t('propertyDetails.call')}
                    </div>
                    <div
                      className='btn-cta btn-contact'
                      onClick={() => handleMail(agent)}
                    >
                      <Contact />
                      {t('propertyDetails.contact')}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='w-full md:w-4/12 h- flex flex-col md:flex-row md:flex-wrap justify-start md:justify-center p-0 md:p-4'>
          {agencyDetail?.longitude && agencyDetail?.latitude && (
            <MapContainer
              center={[
                Number(agencyDetail?.longitude),
                Number(agencyDetail?.latitude),
              ]}
              zoom={13}
              scrollWheelZoom={false}
              className='w-full h-[500px] rounded-[10px]'
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />

              <Marker
                icon={myIcon}
                position={[
                  Number(agencyDetail?.longitude),
                  Number(agencyDetail?.latitude),
                ]}
                eventHandlers={{
                  click: () => {
                    window.open(
                      `https://maps.google.com/?q=${agencyDetail?.latitude},${agencyDetail?.longitude}`,
                      '_blank',
                    )
                  },
                }}
                autoPanOnFocus
              />
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  )
}
