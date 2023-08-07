import Searchbar from './Searchbar.tsx'
import HerobannerImage from '../../assets/images/herobanner.webp'
import FormikSwitchButton from '../molecules/core/FormikSwitchButton.tsx'
import { useTranslation } from 'react-i18next'

export default function Herobanner({
  onClick,
}: {
  onClick: () => void
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div
      className='w-full h-[calc(100dvh-75px)] md:h-[calc(100vh-75px)] flex flex-col justify-center items-center'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${HerobannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <FormikSwitchButton
        textOne={t('title.buy')}
        textTwo={t('title.rent')}
        name='status'
        className='mb-4'
      />
      <Searchbar onClick={onClick} />
    </div>
  )
}
