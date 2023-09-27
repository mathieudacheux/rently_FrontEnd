import L from 'leaflet'
import { useMemo } from 'react'
import BlogCard from '../../../components/organisms/BlogCard.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/atoms/Button.tsx'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { useNavigate } from 'react-router-dom'
import MapHome from './MapHome.tsx'
import { useGetAgenciesQuery } from '../../../features/agency/agencyApi.ts'
import { useUserLocation } from '../../../hooks/useUserLocation.ts'

export default function AgencySection(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { userLocation } = useUserLocation()

  const agencies = useGetAgenciesQuery({
    expanded: true,
  })

  const closestAgencies = useMemo(
    () =>
      agencies.data
        ?.map((agency: any) => {
          const distance = L.latLng([
            userLocation[0],
            userLocation[1],
          ]).distanceTo([agency.longitude, agency.latitude])
          return {
            ...agency,
            distance,
          }
        })
        .sort((a: any, b: any) => a.distance - b.distance)
        .slice(0, 2),
    [agencies.data],
  )

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography
        variant='h2'
        className='text-center w-11/12 text-neutral-900 pt-7'
      >
        {t('home.titleAgency')}
      </Typography>
      <div
        className='w-11/12 md:max-w-[1200px] flex flex-col-reverse items-center md:flex-row
        md:justify-between pt-7'
      >
        <div className='h-[810px] w-full md:max-w-[50%] flex justify-center mt-[30px] md:mt-0'>
          <MapHome />
        </div>
        <div className='flex flex-col items-center justify-between md:items-end w-full md:1/2'>
          {closestAgencies
            ? closestAgencies?.map((agency: any, index: number) => (
                <div
                  key={`${Math.random()}-${agency.id}`}
                  className={`h-[390px] w-full md:w-[calc(100%-30px)] flex justify-center
                  ${index === 0 ? 'mb-[30px]' : ''}  
                `}
                >
                  <BlogCard
                    id={agency.id}
                    title={agency.name}
                    description=''
                    buttonTitle='home.readAgency'
                    agency
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      <div className='w-full flex justify-center pt-7'>
        <Button
          text={t('home.seeAgency')}
          onClick={() => navigate(APP_ROUTES.AGENCY)}
        />
      </div>
    </div>
  )
}
