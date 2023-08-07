import { useTranslation } from 'react-i18next'
import CardButton from '../atoms/CardButton.tsx'
import Typography from '../atoms/Typography.tsx'
import Bed from '../atoms/icons/Bed.tsx'
import Bath from '../atoms/icons/Bath.tsx'
import { PropertySerializerRead } from '../../api/index.ts'
import Tree from '../atoms/icons/Tree.tsx'

export default function PropertyCard({
  mapOpened,
  property,
}: {
  mapOpened?: boolean
  property: PropertySerializerRead
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <div
      id={String(property.property_id)}
      className={`card ${!mapOpened ? 'w-1/5' : 'flex-row w-full h-[220px]'}`}
    >
      <figure className={!mapOpened ? 'w-12/12' : 'w-5/12'}>
        <img
          src='https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg'
          alt='Album'
          className='h-full w-full object-cover'
        />
      </figure>
      <div
        className={`card-body ${
          !mapOpened ? 'w-12/12' : 'w-7/12'
        } flex-col justify-between`}
      >
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
            <CardButton text={t('properties.cardButton')} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
