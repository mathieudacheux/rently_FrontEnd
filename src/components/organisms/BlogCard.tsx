import Button from '../atoms/Button.tsx'
import Typography from '../atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({
  title,
  description,
  id,
}: {
  title: string
  id: number
  description?: string
}): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className='blog w-[350px] md:w-full h-full relative'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[10px]'
        style={{
          backgroundImage:
            'url(https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg)',
        }}
      >
        <div className='absolute inset-0 bg-black opacity-40 mix-blend-darken rounded-[10px]' />
      </div>
      <div className='h-full flex items-center justify-center flex-col relative z-10'>
        <Typography
          variant='h2'
          className='mb-[15px] text-center text-white w-7/12'
        >
          {title}
        </Typography>
        <Button
          text={t('home.readMore')}
          onClick={() => navigate(`${APP_ROUTES.BLOG}/${id}`)}
        />
      </div>
    </div>
  )
}
