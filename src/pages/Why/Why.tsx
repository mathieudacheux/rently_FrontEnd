import Typography from '../../components/atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'

export default function Why(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col items-center w-full p-0 md:p-4'>
      <div className='w-11/12 md:w-[800px]'>
        <Typography variant='h1' className='text-primary text-center mb-4'>
          {t('why.title')}
        </Typography>
        <img
          src='https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2013/12/agent-immobilier-independant.png'
          alt='why'
          className='w-full mb-4'
        />
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title2')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('why.paragraph2')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title3')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('why.paragraph3')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title4')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('why.paragraph4')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title5')}
        </Typography>
        <Typography variant='text' className='text-neutral-900'>
          {t('why.paragraph5')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title6')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('why.paragraph6')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('why.title7')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('why.paragraph7')}
        </Typography>
      </div>
    </div>
  )
}
