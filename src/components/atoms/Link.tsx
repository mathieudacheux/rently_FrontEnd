import { useTranslation } from 'react-i18next'

export default function Link({ text }: { text: string }): JSX.Element {
  const { t } = useTranslation()
  return <a className='text-xl text-secondary'>{t(text)}</a>
}
