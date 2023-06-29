import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEnglish from './en.json'
import translationFrench from './fr.json'

const ressources = {
  en: {
    translation: translationEnglish,
  },
  fr: {
    translation: translationFrench,
  },
}

i18n.use(initReactI18next).init({
  resources: ressources,
  lng: 'en',
})

export default i18n
