import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import { PropertySerializerRead } from '../../../../api/index.ts'
import HeartFull from '../../../../components/atoms/icons/HeartFull.tsx'
import Heart from '../../../../components/atoms/icons/Heart.tsx'

export default function PropertyDetailsLeftSide({
  property,
  bookmarked,
  addBookmarkHandler,
  deleteBookmarkHandler,
}: {
  property: PropertySerializerRead
  bookmarked: {
    bookmark_id: number
    property_id: number
    user_id: number
  } | null
  addBookmarkHandler: () => void
  deleteBookmarkHandler: (bookmarkId: number) => Promise<boolean>
}) {
  const { t } = useTranslation()
  return (
    <div className='md:w-1/2 px-2 md:pr-4'>
      <div className='flex flex-row justify-between w-full items-center'>
        <h2 className='text-neutral-900 font-bold text-xl my-4'>
          {`${property?.name || ''} - ${property?.price || ''}€`}
        </h2>
        <div
          className='hover:cursor-pointer'
          onClick={() => {
            bookmarked?.property_id === property?.property_id
              ? deleteBookmarkHandler(bookmarked?.bookmark_id as number)
              : addBookmarkHandler()
          }}
        >
          {bookmarked?.property_id === property?.property_id ? (
            <HeartFull />
          ) : (
            <Heart />
          )}
        </div>
      </div>
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
