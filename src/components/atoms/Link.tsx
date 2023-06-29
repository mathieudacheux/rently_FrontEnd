import { useTranslation } from 'react-i18next'

export default function Link({
  text,
  to,
}: {
  text: string
  to: string
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <a className='text-xl text-secondary' href={to}>
      {t(text)}
    </a>
  )
}
