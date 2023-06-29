import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'
import { Link } from 'react-router-dom'

export default function RedirectText({
  text,
  to,
}: {
  text: string
  to: keyof typeof APP_ROUTES
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <Link className='text-xl text-secondary' to={APP_ROUTES[to]}>
      <p>{t(text)}</p>
    </Link>
  )
}
