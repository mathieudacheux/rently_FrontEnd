import { useTranslation } from 'react-i18next'
import CardButton from '../atoms/CardButton.tsx'
import Typography from '../atoms/Typography.tsx'
import Bed from '../atoms/icons/Bed.tsx'
import Bath from '../atoms/icons/Bath.tsx'
import Kitchen from '../atoms/icons/Kitchen.tsx'

export default function PropertyCard({
  mapOpened,
}: {
  mapOpened?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <div
      className={
        mapOpened
          ? 'card w-1/5'
          : 'card lg:card-side md:w-5/12 sm:w-11/12 w-11/12'
      }
    >
      <figure className={mapOpened ? 'w-12/12' : 'lg:w-6/12'}>
        <img
          src='https://s3-alpha-sig.figma.com/img/ebfd/d8cc/7eb42cf9d865b262fe2556f782aad1ea?Expires=1691366400&Signature=U7hzI5kJwalGftk9~-EKZxHwMmPvR~Km4pZ2TCTJuPsNbqKhLEDDwk3633LxbBC2aG6J1rGr2pWczCJlL7O4YMxwcoN8ym9-xJyRJmBlV3KZAg3FW84d4KxiJTZRXEwsOzafyLATediX4WVNfyqEHYU0m9c-~9BtIfPZepLeHWaNGPDfyqXvxpSnOjkrYMLYbTXEF2L301pO4S02wAdRgp~0Y8rGUB6O9PkRcco5tZVzt4wYeHePcvS~~UxvpewkQzgB349vGHn7BrxoOHacl9KJxflVkxaX1LYXus1LIkt9C~tm0tyWpn5d-zNcGkOPPbjUbWwemyppJHLc-GwfOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='Album'
        />
      </figure>
      <div
        className={`card-body ${
          mapOpened ? 'w-12/12' : 'lg:w-6/12'
        } flex-col justify-between`}
      >
        <div className='flex justify-between mb-2'>
          <Typography variant='h2' color='secondary'>
            {t('Description')}
          </Typography>
          <Typography variant='h2' color='primary'>
            {t('1505050€')}
          </Typography>
        </div>
        <div className='flex justify-between  mb-2'>
          <Typography variant='text-light' color='textLight'>
            {t('Amiens, 80000')}
          </Typography>
          <Typography variant='text-light' color='textLight'>
            {t('200m²')}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center'>
            <Bed marginRight />
            <Typography variant='tiny-text' color='secondary'>
              {t('4 beds')}
            </Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Bath marginRight />
            <Typography variant='tiny-text' color='secondary'>
              {t('3 baths')}
            </Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Kitchen marginRight />
            <Typography variant='tiny-text' color='secondary'>
              {t('1 kitchen')}
            </Typography>
          </div>
        </div>
        {!mapOpened ? (
          <div className='card-actions'>
            <CardButton text='Discover' />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
