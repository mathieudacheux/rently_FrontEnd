import { useTranslation } from 'react-i18next'

export default function Button({
  text,
  icon,
  rounded,
  fullWidth = false,
  className = '',
  disabled = false,
  onClick,
}: {
  text: string
  icon?: React.ReactNode
  rounded?: boolean
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <button
      className={`${
        rounded ? 'roundedBtn' : 'btn'
      } md:btn-md lg:btn-md bg-primary hover:bg-primary text-white border-0 flex justify-between items-center ${className} ${
        fullWidth ? 'w-full' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <div className='mr-2'>{icon}</div>}
      <div className='text-sm'>{t(text)}</div>
    </button>
  )
}
