import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../../routes/routes.ts'
import { Link } from 'react-router-dom'

export default function RedirectText({
  text,
  to,
  variant = 'navbar',
  target = '_self',
  onClick,
}: {
  text: string
  to: keyof typeof APP_ROUTES
  variant?: 'navbar' | 'footer'
  target?: '_self' | '_blank'
  onClick?: () => void
}): JSX.Element {
  const { t } = useTranslation()

  if (variant === 'navbar') {
    return (
      <Link
        className='text-lg font-semibold text-neutral-900 p-2 ml-2'
        to={APP_ROUTES[to]}
        target={target}
        onClick={onClick}
      >
        <p>{t(text)}</p>
      </Link>
    )
  } else {
    return (
      <Link
        className='text-neutral-900 opacity-50
          hover:opacity-100
          transition duration-250 ease-in-out
        '
        to={APP_ROUTES[to]}
        target={target}
        onClick={onClick}
      >
        <p>{t(text)}</p>
      </Link>
    )
  }
}
