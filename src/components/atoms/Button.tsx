import { useTranslation } from 'react-i18next'

export default function Button({
  text,
  icon,
  rounded,
  onClick,
}: {
  text: string
  icon?: React.ReactNode
  rounded?: boolean
  onClick?: () => void
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <button
      className={`${
        rounded ? 'roundedBtn' : 'btn'
      } btn-xs sm:btn-sm md:btn-md lg:btn-md bg-primary hover:bg-primary text-white border-0 ml-4 flex justify-between items-center`}
      onClick={onClick}
    >
      {icon && <div className='mr-2'>{icon}</div>}
      {t(text)}
    </button>
  )
}
