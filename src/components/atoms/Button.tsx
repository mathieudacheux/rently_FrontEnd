import { useTranslation } from 'react-i18next'

export default function Button({ text }: { text: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-primary hover:bg-primary text-white border-0'>
      {t(text)}
    </button>
  )
}
