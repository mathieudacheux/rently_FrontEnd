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
    <div className='flex flex-col items-center justify-center'>
      <Typography variant='h2' className=' text-center text-neutral-900 py-7'>
        {t('home.titleProperties')}
      </Typography>
      <div
        className='gap-4 md:max-w-[1200px] md:w-11/12 grid w-10/12
        md:grid-cols-4 grid-cols-1 justify-items-center'
      >
        {propertyData.slice(0, 8).map((property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}
      </div>
    </div>
  )
}
