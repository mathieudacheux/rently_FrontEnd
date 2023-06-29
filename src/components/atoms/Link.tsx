import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'

export default function Link({
  text,
  to,
}: {
  text: string
  to: keyof typeof APP_ROUTES
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <a className='text-xl text-secondary' href={APP_ROUTES[to]}>
      {t(text)}
    </a>
  )
}
