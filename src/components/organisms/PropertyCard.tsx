import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import CardButton from '../atoms/CardButton.tsx'
import Typography from '../atoms/Typography.tsx'
import Bed from '../atoms/icons/Bed.tsx'
import Bath from '../atoms/icons/Bath.tsx'
import { PropertySerializerRead } from '../../api/index.ts'
import Tree from '../atoms/icons/Tree.tsx'
import { APP_ROUTES } from '../../routes/routes.ts'
import { useGetAllFolderImageQuery } from '../../features/attachment/attachmentApi.ts'
import Heart from '../atoms/icons/Heart.tsx'
import {
  useCreateBookmarkMutation,
  useDeleteBookmarkMutation,
  useLazyGetBookmarksByUserIdQuery,
} from '../../features/bookmark/bookmarkApi.ts'
import { toast } from 'sonner'
import HeartFull from '../atoms/icons/HeartFull.tsx'

export default function PropertyCard({
  mapOpened,
  property,
  handleDelete,
}: {
  mapOpened?: boolean
  property: PropertySerializerRead
  handleDelete?: ({ bookmarkId }: { bookmarkId: number }) => void
}): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [bookmarked, setBookmarked] = useState<
    { bookmark_id: number; property_id: number; user_id: number }[]
  >([])

  const [addBookmark] = useCreateBookmarkMutation()
  const [deleteBookmark] = useDeleteBookmarkMutation()
  const [getBookmarksByUserId] = useLazyGetBookmarksByUserIdQuery()

  const userId =
    JSON.parse(localStorage.getItem('user') || '{}')?.user_id || null

  useEffect(() => {
    if (!userId) return
    const fetchBookmarks = async () => {
      const result: any = await getBookmarksByUserId(userId)
      if (!result?.data || result?.error) {
        toast.error(result?.error?.data?.message)
        return false
      }
      setBookmarked(result.data)
    }
    fetchBookmarks()
  }, [userId])

  const bookmarkId = bookmarked?.find(
    (propertyBookmarked: any) =>
      propertyBookmarked.property_id === property.property_id,
  )?.bookmark_id

  const addBookmarkHandler = async () => {
    if (!userId) {
      toast.error(t('myAccount.wishlistSection.connection'))
      return false
    }

    const result: any = await addBookmark({
      property_id: property.property_id,
      user_id: userId,
    })

    if (!result?.data || result?.error) {
      toast.error(result?.error?.data?.message)
      return false
    }

    setBookmarked([...bookmarked, result.data])
    toast.success(t('myAccount.wishlistSection.done'))
  }

  const deleteBookmarkHandler = async (bookmarkId: number) => {
    if (!userId) {
      toast.error(t('myAccount.wishlistSection.connection'))
      return false
    }

    const result: any = await deleteBookmark(bookmarkId)

    if (result?.error) {
      toast.error(result?.error?.data?.message)
      return false
    }

    setBookmarked(
      bookmarked.filter((bookmark: any) => bookmark.bookmark_id !== bookmarkId),
    )
    toast.success(t('myAccount.wishlistSection.delete'))
  }

  const images = useGetAllFolderImageQuery({
    id: Number(property?.property_id),
  }).data

  return (
    <div
      id={String(property.property_id)}
      className={`card z-10 ${
        !mapOpened ? 'w-[350px]' : 'flex-row w-full h-[220px]'
      }`}
    >
      <figure className={`${!mapOpened ? 'w-12/12' : 'w-5/12'}`}>
        <img
          src={
            images?.length
              ? `https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[0]}`
              : ''
          }
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src =
              'https://back-rently.mathieudacheux.fr/public/img/property/placeholder.png'
          }}
          alt='Album'
          className='h-full w-full object-cover hover:cursor-pointer'
          onClick={() =>
            navigate(
              `${APP_ROUTES.PROPERTIES_DETAILS}/${property.name}/${property.property_id}`,
            )
          }
        />
      </figure>
      <div
        className={`card-body relative ${
          !mapOpened ? 'w-12/12' : 'w-7/12'
        } flex-col justify-between`}
      >
        <div
          className='absolute top-1 right-1 z-50 hover:cursor-pointer'
          onClick={() => {
            const bookmark = bookmarked?.find(
              (propertyBookmarked: any) =>
                propertyBookmarked.property_id === property.property_id,
            )
            if (bookmark) {
              deleteBookmarkHandler(bookmarkId as number)
              handleDelete
                ? handleDelete({ bookmarkId: bookmark.bookmark_id })
                : null
            } else {
              addBookmarkHandler()
            }
          }}
        >
          {bookmarked?.find(
            (propertyBookmarked: any) =>
              propertyBookmarked.property_id === property.property_id,
          ) ? (
            <HeartFull />
          ) : (
            <Heart />
          )}
        </div>

        <div className='flex justify-between'>
          <Typography variant='h2' className='text-secondary'>
            {property.name || ''}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <Typography variant='h2' className='text-primary' price>
            {property.price || ''}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <Typography variant='text-light'>
            {`${property.zipcode || ''} ${property.city || ''}`}
          </Typography>
          <Typography variant='text-light' surface>
            {property.surface || ''}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center'>
            <Bed marginRight />
            <Typography variant='tiny-text' className='text-secondary'>
              {property.bedroom && property.bedroom > 1
                ? `${property.bedroom} ${t('properties.bedrooms')}`
                : `${property.bedroom} ${t('properties.bedroom')}`}
            </Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Bath marginRight />
            <Typography variant='tiny-text' className='text-secondary'>
              {property.bathroom && property.bathroom > 1
                ? `${property.bathroom} ${t('properties.bathrooms')}`
                : `${property.bathroom} ${t('properties.bathroom')}`}
            </Typography>
          </div>
          {property.land_size && (
            <div className='flex justify-between items-center'>
              <Tree marginRight />
              <Typography variant='tiny-text' className='text-secondary'>
                {`${property.land_size} ${t('properties.landSize')}`}
              </Typography>
            </div>
          )}
        </div>
        {mapOpened ? (
          <div className='card-actions'>
            <CardButton
              text={t('properties.cardButton')}
              onClick={() => {
                navigate(
                  `${APP_ROUTES.PROPERTIES_DETAILS}/${property.name}/${property.property_id}`,
                )
              }}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
