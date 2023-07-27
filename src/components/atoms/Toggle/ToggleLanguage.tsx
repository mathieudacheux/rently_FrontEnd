import { useEffect, useState } from 'react'
import i18next from 'i18next'

export default function ToggleLanguage(): JSX.Element {
  const [language, setLanguage] = useState<string>(
    window.localStorage.getItem('lang') || 'fr',
  )

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  useEffect(() => {
    i18next.changeLanguage(language)
    window.localStorage.setItem('lang', language)
  }, [language])

  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='label-text'>
          {language === 'fr' ? 'English' : 'Français'}
        </span>
        <input
          type='checkbox'
          className='toggle toggle-primary'
          checked
          onClick={toggleLanguage}
        />
      </label>
    </div>
  )
}
