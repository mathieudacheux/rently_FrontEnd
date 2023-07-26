import { useTranslation } from 'react-i18next'

export default function Button({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <button
      className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-primary hover:bg-primary text-white border-0'
      onClick={onClick}
    >
      {t(text)}
    </button>
  )
}
