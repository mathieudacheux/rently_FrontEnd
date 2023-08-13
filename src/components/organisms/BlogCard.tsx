import { useTranslation } from 'react-i18next'
import Typography from '../atoms/Typography.tsx'

export default function BlogCard({
  title,
  link,
  description,
}: {
  title: string
  link: string
  description?: string
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='blog w-full h-full'>
      <Typography variant='h2' className='mb-2'>
        {t(title)}
      </Typography>
    </div>
  )
}
