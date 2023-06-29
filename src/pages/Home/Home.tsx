import ToggleLanguage from '../../components/atoms/ToggleLanguage.tsx'
import ToggleTheme from '../../components/atoms/ToggleTheme.tsx'
import { useTranslation } from 'react-i18next'

export default function Home(): JSX.Element {
  const { t } = useTranslation()
  return (
    <>
      <ToggleTheme />
      <ToggleLanguage />
      <h1>{t('welcome')}</h1>
    </>
  )
}
