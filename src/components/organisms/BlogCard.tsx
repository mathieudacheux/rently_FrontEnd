import Button from '../atoms/Button.tsx'
import Typography from '../atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({
  title,
  description,
  id,
  buttonTitle = 'home.readBlog',
  full = false,
  agency = false,
}: {
  title: string
  description: string
  id: number
  buttonTitle?: string
  full?: boolean
  agency?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const descriptionText =
    window.innerWidth > 768
      ? description
          .slice(0, 400)
          .concat('...')
          .replace(new RegExp(title, 'g'), '')
      : description
          .slice(0, 250)
          .concat('...')
          .replace(new RegExp(title, 'g'), '')

  const showDescription = (
    <div
      className='text-neutral-900'
      dangerouslySetInnerHTML={{ __html: descriptionText }}
    />
  )

  if (!full) {
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
            {agency ? t('agency.title', { agency: title }) : title}
          </Typography>
          <Button
            text={t(buttonTitle)}
            onClick={() => navigate(`${APP_ROUTES.BLOG_DETAIL}/${id}/${title}`)}
          />
        </div>
      </div>
    )
  }

  return (
    <div className='blog w-[350px] md:w-full h-full relative'>
      <div
        className='inset-0 bg-cover bg-center bg-no-repeat rounded-t-[10px] h-3/5'
        style={{
          backgroundImage:
            'url(https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg)',
        }}
      >
        <div className='absolute inset-0 bg-black opacity-40 mix-blend-darken rounded-t-[10px] h-3/5' />
      </div>
      <div className='h-2/5 flex items-center justify-between flex-col p-4'>
        <Typography
          variant='h2'
          className='text-center text-neutral-900 w-full'
        >
          {title}
        </Typography>
        {showDescription}
        <Button
          text={t(buttonTitle)}
          onClick={() => navigate(`${APP_ROUTES.BLOG_DETAIL}/${id}/${title}`)}
        />
      </div>
    </div>
  )
}
