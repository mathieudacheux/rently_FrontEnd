import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import { PropertySerializerRead } from '../../../../api/index.ts'

export default function PropertyDetailsLeftSide({
  property,
}: {
  property: PropertySerializerRead
}) {
  const { t } = useTranslation()
  return (
    <div className='md:w-1/2 px-2 md:pr-4'>
      <Typography variant='h2' className='text-secondary my-4'>{`${
        property?.name || ''
      } - ${property?.price || ''}€`}</Typography>
      <div
        className='text-neutral-900 text-justify'
        dangerouslySetInnerHTML={{ __html: property?.description || '' }}
      ></div>
      <Typography variant='h2' className='text-secondary my-4'>
        {t('propertyDetails.caracteristics')}
      </Typography>
      <ul className='list ml-8 text-neutral-900 md:leading-10'>
        {property?.surface && (
          <li className='list-disc'>
            {t('propertyDetails.surface', { surface: property.surface })}
          </li>
        )}
        {property?.bedroom && (
          <li className='list-disc'>
            {t('propertyDetails.bedroom', { bedroom: property.bedroom })}
          </li>
        )}
        {property?.bathroom && (
          <li className='list-disc'>
            {t('propertyDetails.bathroom', {
              bathroom: property.bathroom,
            })}
          </li>
        )}
        {property?.elevator && (
          <li className='list-disc'>{`${t('propertyDetails.elevator')} : ${
            property.elevator
              ? t('propertyDetails.yes')
              : t('propertyDetails.no')
          }`}</li>
        )}
        {property?.cellar && (
          <li className='list-disc'>{`${t('propertyDetails.cellar')} : ${
            property.cellar ? t('propertyDetails.yes') : t('propertyDetails.no')
          }`}</li>
        )}
        {property?.balcony && (
          <li className='list-disc'>{`${t('propertyDetails.balcony')} : ${
            property.balcony
              ? t('propertyDetails.yes')
              : t('propertyDetails.no')
          }`}</li>
        )}
        {property?.garage && (
          <li className='list-disc'>{`${t('propertyDetails.garage')} : ${
            property.garage ? t('propertyDetails.yes') : t('propertyDetails.no')
          }`}</li>
        )}
      </ul>
      <Typography variant='h2' className='text-secondary my-4'>
        {t('propertyDetails.priceTitle')}
      </Typography>
      <ul className='ml-8 text-neutral-900 md:leading-10'>
        {property?.price && (
          <li className='list-disc'>
            {t('propertyDetails.price', { price: property.price })}
          </li>
        )}
        {property?.price && property?.surface && (
          <li className='list-disc'>
            {t('propertyDetails.priceSquare', {
              price: Math.ceil(property.price / Number(property.surface)),
            })}
          </li>
        )}
      </ul>
    </div>
  )
}
