import { useTranslation } from 'react-i18next'
import Rently from '../../assets/Rently.svg'
import RedirectText from '../atoms/RedirectText.tsx'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()

  return (
    <footer className='footer p-10 bg-white'>
      <div>
        <img src={Rently} className='logo' alt='Rently Logo' />
      </div>
      <div>
        <span className='footer-title text-primary opacity-100'>
          {t('footer.sectionOne.title')}
        </span>
        <RedirectText
          to='PROPERTIES'
          text='footer.sectionOne.first'
          variant='footer'
        />
        <RedirectText
          to='GESTION'
          text='footer.sectionOne.second'
          variant='footer'
        />
        <RedirectText
          to='AGENCY'
          text='footer.sectionOne.third'
          variant='footer'
        />
        <RedirectText
          to='BLOG'
          text='footer.sectionOne.fourth'
          variant='footer'
        />
      </div>
      <div>
        <span className='footer-title text-primary opacity-100'>
          {t('footer.sectionTwo.title')}
        </span>
        <RedirectText
          to='HIRING'
          text='footer.sectionTwo.second'
          variant='footer'
          target='_blank'
        />
        <RedirectText
          to='TERMS'
          text='footer.sectionTwo.fourth'
          variant='footer'
        />
        <RedirectText
          to='PRIVACY'
          text='footer.sectionTwo.fifth'
          variant='footer'
        />
      </div>
      <div>
        <span className='footer-title text-primary opacity-100'>
          {t('footer.sectionThree.title')}
        </span>
        <RedirectText
          to='FACEBOOK'
          text='footer.sectionThree.first'
          variant='footer'
          target='_blank'
        />
        <RedirectText
          to='INSTAGRAM'
          text='footer.sectionThree.second'
          variant='footer'
          target='_blank'
        />
        <RedirectText
          to='LINKEDIN'
          text='footer.sectionThree.third'
          variant='footer'
          target='_blank'
        />
      </div>
    </footer>
  )
}
