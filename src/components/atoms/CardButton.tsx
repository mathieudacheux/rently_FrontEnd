import { useTranslation } from 'react-i18next'

export default function CardButton({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <button
      onClick={onClick}
      type='submit'
      className='btn bg-primary hover:bg-primary text-white border-0 w-full'
    >
      {t(text)}
    </button>
  )
}
