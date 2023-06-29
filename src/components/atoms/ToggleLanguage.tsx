import { useEffect, useState } from 'react'
import i18next from 'i18next'

export default function ToggleLanguage(): JSX.Element {
  const [language, setLanguage] = useState<string>('fr')

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  return (
    <label className='swap'>
      <input type='checkbox' onChange={toggleLanguage} />
      <p className='swap-on fill-secondary w-10 h-10'>French</p>
      <p className='swap-off fill-secondary w-10 h-10'>Anglais</p>
    </label>
  )
}
