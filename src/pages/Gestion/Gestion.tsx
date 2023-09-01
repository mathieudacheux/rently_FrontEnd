import { useTranslation } from 'react-i18next'
import Typography from '../../components/atoms/Typography.tsx'
import CardButton from '../../components/atoms/CardButton.tsx'

export default function Gestion(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col items-center w-full p-0 md:p-4'>
      <div className='w-11/12 md:w-[800px]'>
        <Typography variant='h1' className='text-primary text-center mb-4'>
          {t('gestion.title')}
        </Typography>
        <img
          src='https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2013/12/agent-immobilier-independant.png'
          alt='gestion'
          className='w-full mb-4'
        />
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.summary')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title2')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.paragraph2')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title3')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.paragraph3')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title4')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.paragraph4')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title5')}
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          {t('gestion.paragraph5')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title6')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.paragraph6')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('gestion.title7')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('gestion.summary')}
        </Typography>
        <Typography variant='h2' className='my-2 text-primary'>
          {t('gestion.cta')}
        </Typography>
        <Typography variant='text' className='text-neutral-700 mb-2'>
          {t('gestion.paragraphCTA')}
        </Typography>
        <CardButton
          onClick={() => {
            window.location.href = 'mailto:info@rently.fr'
          }}
          text='gestion.cta'
        />
      </div>
    </div>
  )
}
