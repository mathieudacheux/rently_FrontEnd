import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import { useGetBookmarksByUserIdQuery } from '../../../../features/bookmark/bookmarkApi.ts'
import { PropertySerializerRead } from '../../../../api/index.ts'
import PropertyCard from '../../../../components/organisms/PropertyCard.tsx'
import { useFormikContext } from 'formik'
import { MyAccountFormik } from '../../types.ts'

export default function WishlistSection(): JSX.Element {
  const { t } = useTranslation()
  const { values } = useFormikContext<MyAccountFormik>()

  const { data: bookmarks } = useGetBookmarksByUserIdQuery(values.id)

  return (
    <div className='md:pl-4 w-full'>
      <Typography variant='h2' className='text-neutral-900 mb-4'>
        {t('myAccount.wishlistSection.title')}
      </Typography>
      <div className='w-full flex flex-row flex-wrap gap-10'>
        {bookmarks?.results?.length ? (
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
