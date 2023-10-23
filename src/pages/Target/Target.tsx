import { useTranslation } from 'react-i18next'
import Typography from '../../components/atoms/Typography.tsx'

export default function Target(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center w-full p-0 md:p-4'>
      <div className='w-11/12 md:w-[800px]'>
        <Typography variant='h1' className='text-primary text-center mb-4'>
          {t('target.title')}
        </Typography>
        <img
          src='https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2013/12/agent-immobilier-independant.png'
          alt='target'
          className='w-full mb-4'
        />
        <Typography variant='text' className='text-neutral-700'>
          {t('target.paragraph')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('target.title2')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('target.paragraph2')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('target.title3')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('target.paragraph3')}
        </Typography>
        <Typography variant='h2' className='my-2 text-neutral-900'>
          {t('target.title4')}
        </Typography>
        <Typography variant='text' className='text-neutral-700'>
          {t('target.paragraph4')}
        </Typography>
      </div>
    </div>
  )
}
