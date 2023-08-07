import { useTranslation } from 'react-i18next'
import Typography from '../../../components/atoms/Typography.tsx'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import { useGetPropertyByFilterQuery } from '../../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../../api/models/PropertySerializerRead.ts'
import Button from '../../../components/atoms/Button.tsx'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function BestProperties(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const propertyData: PropertySerializerRead[] =
    useGetPropertyByFilterQuery({
      city: 'Amiens',
    })?.data ?? []

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography variant='h2' className=' text-center text-neutral-900 py-7'>
        {t('home.titleProperties')}
      </Typography>
      <div
        className='gap-y-12 gap-x-4 w-11/12 md:max-w-[1200px] md:w-11/12 grid 
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center'
      >
        {propertyData.slice(0, 6).map((property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}
      </div>
      <div className='w-full flex justify-center pt-7'>
        <Button
          text={t('home.seeMore')}
          onClick={() => navigate(APP_ROUTES.PROPERTIES)}
        />
      </div>
    </div>
  )
}
