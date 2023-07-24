import { useTranslation } from 'react-i18next'

export default function Button({ text }: { text: string }): JSX.Element {
  const { t } = useTranslation()
  return (
    <button className='btn bg-primary hover:bg-primary text-white border-0 w-full'>
      {t(text)}
    </button>
  )
}
