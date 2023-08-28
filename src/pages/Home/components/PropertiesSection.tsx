import { useTranslation } from 'react-i18next'
import Typography from '../../../components/atoms/Typography.tsx'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import { useGetPropertyByFilterQuery } from '../../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../../api/models/PropertySerializerRead.ts'
import Button from '../../../components/atoms/Button.tsx'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function PropertiesSection(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const propertyData: PropertySerializerRead[] =
    useGetPropertyByFilterQuery({
      city: 'Amiens',
    })?.data ?? []

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography
        variant='h2'
        className=' text-center w-11/12 text-neutral-900 pt-7 md:pb-7'
      >
        {t('home.titleProperties')}
      </Typography>
      <div className='w-11/12 md:max-w-[1200px] flex flex-col md:flex-wrap md:flex-row items-center md:justify-between'>
        {propertyData.slice(0, 6).map((property, index) => (
          <div
            key={property.property_id}
            className={`flex justify-center md:w-[350px] w-full ${
              index >= 3 ? 'md:mt-7' : 'md:mt-0'
            } mt-7
            `}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center pt-7'>
        <Button
          text={t('home.seeProperties')}
          onClick={() => navigate(APP_ROUTES.PROPERTIES)}
        />
      </div>
    </div>
  )
}
