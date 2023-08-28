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
    <label className='relative inline-flex items-center cursor-pointer mt-4'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        onClick={toggleLanguage}
        {...(language === 'fr' ? { checked: true } : {})}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {language === 'fr' ? 'Français' : 'Anglais'}
      </span>
    </label>
  )
}
