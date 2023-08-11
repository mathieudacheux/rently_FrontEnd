import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'
import { Link } from 'react-router-dom'

export default function RedirectText({
  text,
  to,
  variant = 'navbar',
}: {
  text: string
  to: keyof typeof APP_ROUTES
  variant?: 'navbar' | 'footer'
}): JSX.Element {
  const { t } = useTranslation()

  if (variant === 'navbar') {
    return (
      <Link
        className='text-lg font-semibold text-neutral-900 p-2 ml-2'
        to={APP_ROUTES[to]}
      >
        <p>{t(text)}</p>
      </Link>
    )
  } else {
    return (
      <Link className='text-neutral-900 opacity-50' to={APP_ROUTES[to]}>
        <p>{t(text)}</p>
      </Link>
    )
  }
}
