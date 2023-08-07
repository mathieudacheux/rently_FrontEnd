import { useTranslation } from 'react-i18next'
import Rently from '../../assets/Rently.svg'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()

  return (
    <footer className='footer p-10 bg-primary text-white mt-7'>
      <div>
        <img src={Rently} className='logo p-2' alt='Rently Logo' />
      </div>
      <div>
        <span className='footer-title'>{t('footer.sectionOne.title')}</span>
        <a className='link link-hover'>{t('footer.sectionOne.first')}</a>
        <a className='link link-hover'>{t('footer.sectionOne.second')}</a>
        <a className='link link-hover'>{t('footer.sectionOne.third')}</a>
        <a className='link link-hover'>{t('footer.sectionOne.fourth')}</a>
        <a className='link link-hover'>{t('footer.sectionOne.fifth')}</a>
      </div>
      <div>
        <span className='footer-title'>{t('footer.sectionTwo.title')}</span>
        <a className='link link-hover'>{t('footer.sectionTwo.first')}</a>
        <a className='link link-hover'>{t('footer.sectionTwo.second')}</a>
        <a className='link link-hover'>{t('footer.sectionTwo.third')}</a>
        <a className='link link-hover'>{t('footer.sectionTwo.fourth')}</a>
        <a className='link link-hover'>{t('footer.sectionTwo.fifth')}</a>
      </div>
      <div>
        <span className='footer-title'>{t('footer.sectionThree.title')}</span>
        <a className='link link-hover'>{t('footer.sectionThree.first')}</a>
        <a className='link link-hover'>{t('footer.sectionThree.second')}</a>
        <a className='link link-hover'>{t('footer.sectionThree.third')}</a>
      </div>
    </footer>
  )
}
