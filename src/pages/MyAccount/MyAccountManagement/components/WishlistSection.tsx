import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'
import { useLazyGetBookmarksByUserIdQuery } from '../../../../features/bookmark/bookmarkApi.ts'
import {
  BookmarkSerializerRead,
  PropertySerializerRead,
} from '../../../../api/index.ts'
import PropertyCard from '../../../../components/organisms/PropertyCard.tsx'
import { useFormikContext } from 'formik'
import { MyAccountFormik } from '../../types.ts'

export default function WishlistSection(): JSX.Element {
  const { t } = useTranslation()
  const { values } = useFormikContext<MyAccountFormik>()

  const [bookmarkList, setBookmarkList] = useState<BookmarkSerializerRead[]>([])
  const [triggerBookmarkListQuery, bookmarkListQueryResults] =
    useLazyGetBookmarksByUserIdQuery({})

  useEffect(() => {
    if (!values?.id) return
    triggerBookmarkListQuery(values?.id)
  }, [])

  useEffect(() => {
    if (!bookmarkListQueryResults.data) return
    setBookmarkList(bookmarkListQueryResults.data)
  }, [bookmarkListQueryResults.data])

  const deleteFromList = ({ bookmarkId }: { bookmarkId: number }) => {
    setBookmarkList((prev) =>
      prev.filter((bookmark) => bookmark.bookmark_id !== bookmarkId),
    )
  }

  console.log('bookmarkList', bookmarkList)

  return (
    <div className='md:pl-4 w-full'>
      <Typography variant='h2' className='text-neutral-900 mb-4'>
        {t('myAccount.wishlistSection.title')}
      </Typography>
      <div className='w-full flex flex-row flex-wrap gap-10'>
        {bookmarkList?.length ? (
          bookmarkList?.map((property: PropertySerializerRead) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              handleDelete={deleteFromList}
            />
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
