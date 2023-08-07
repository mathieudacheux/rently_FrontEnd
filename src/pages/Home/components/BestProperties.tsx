import { useTranslation } from 'react-i18next'
import Typography from '../../../components/atoms/Typography.tsx'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import { useGetPropertyByFilterQuery } from '../../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../../api/models/PropertySerializerRead.ts'

export default function BestProperties(): JSX.Element {
  const { t } = useTranslation()

  const propertyData: PropertySerializerRead[] =
    useGetPropertyByFilterQuery({
      city: 'Amiens',
    })?.data ?? []

  return (
    <div className='flex flex-col items-center justify-center py-7'>
      <Typography variant='h2' className='text-neutral-900'>
        {t('home.titleProperties')}
      </Typography>
      <div className='flex flex-row flex-wrap items-center justify-center w-full'>
        {propertyData.map((property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}
      </div>
    </div>
  )
}
