import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import { useGetBookmarksByUserIdQuery } from '../../../../features/bookmark/bookmarkApi.ts'
import { PropertySerializerRead } from '../../../../api/index.ts'
import PropertyCard from '../../../../components/organisms/PropertyCard.tsx'

export default function WishlistSection(): JSX.Element {
  const { t } = useTranslation()
  const userId = JSON.parse(localStorage.getItem('user') || '{}')[0].user_id

  const { data: bookmarks } = useGetBookmarksByUserIdQuery(userId)

  return (
    <div className='md:pl-4 w-full'>
      <Typography variant='h2' className='text-neutral-900 mb-4'>
        {t('myAccount.wishlistSection.title')}
      </Typography>
      <div className='w-full flex flex-col flex-wrap'>
        {bookmarks ? (
          bookmarks?.map((property: PropertySerializerRead) => (
            <PropertyCard key={property.property_id} property={property} />
          ))
        ) : (
          <Typography variant='text' className='text-neutral-900 mb-2'>
            {t('myAccount.wishlistSection.empty')}
          </Typography>
        )}
      </div>
    </div>
  )
}
