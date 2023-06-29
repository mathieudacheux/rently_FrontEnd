import { useTranslation } from 'react-i18next'

export default function Button({ text }: { text: string }): JSX.Element {
  const { t } = useTranslation()
  return <button className='btn-primary normal-case text-xl'>{t(text)}</button>
}
