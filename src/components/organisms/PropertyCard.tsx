import { useTranslation } from 'react-i18next'
import CardButton from '../atoms/CardButton.tsx'
import Typography from '../atoms/Typography.tsx'
import Heart from '../atoms/icons/Heart.tsx'

export default function PropertyCard(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='card lg:card-side md:w-5/12 sm:w-11/12 w-11/12 '>
      <figure className='lg:w-6/12'>
        <img
          src='https://s3-alpha-sig.figma.com/img/ebfd/d8cc/7eb42cf9d865b262fe2556f782aad1ea?Expires=1691366400&Signature=U7hzI5kJwalGftk9~-EKZxHwMmPvR~Km4pZ2TCTJuPsNbqKhLEDDwk3633LxbBC2aG6J1rGr2pWczCJlL7O4YMxwcoN8ym9-xJyRJmBlV3KZAg3FW84d4KxiJTZRXEwsOzafyLATediX4WVNfyqEHYU0m9c-~9BtIfPZepLeHWaNGPDfyqXvxpSnOjkrYMLYbTXEF2L301pO4S02wAdRgp~0Y8rGUB6O9PkRcco5tZVzt4wYeHePcvS~~UxvpewkQzgB349vGHn7BrxoOHacl9KJxflVkxaX1LYXus1LIkt9C~tm0tyWpn5d-zNcGkOPPbjUbWwemyppJHLc-GwfOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='Album'
        />
      </figure>
      <div className='card-body lg:w-6/12 flex-col justify-between'>
        <div className='flex justify-between'>
          <Typography variant='h2' color='secondary'>
            {t('Description')}
          </Typography>
          <Typography variant='h2' color='primary'>
            {t('1505050€')}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <Typography variant='text-light' color='textLight'>
            {t('Amiens, 80000')}
          </Typography>
          <Typography variant='text-light' color='textLight'>
            {t('200m²')}
          </Typography>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center'>
            <Heart marginRight />
            <Typography variant='text' color='secondary'>
              {t('test')}
            </Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Heart marginRight />
            <Typography variant='text' color='secondary'>
              {t('test')}
            </Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Heart marginRight />
            <Typography variant='text' color='secondary'>
              {t('test')}
            </Typography>
          </div>
        </div>
        <div className='card-actions'>
          <CardButton text='Discover' />
        </div>
      </div>
    </div>
  )
}
