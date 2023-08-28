import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography.tsx'

export default function WishlistSection(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='pl-4'>
      <Typography variant='h2' className='text-neutral-900'>
        {t('myAccount.wishlistSection.title')}
      </Typography>
    </div>
  )
}
