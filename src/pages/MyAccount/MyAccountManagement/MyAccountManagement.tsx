import { useState } from 'react'
import { settingsList } from './constants/constants.ts'
import { useTranslation } from 'react-i18next'
import PersonnalSection from './components/PersonnalSection.tsx'
import PasswordSection from './components/PasswordSection.tsx'
import WishlistSection from './components/WishlistSection.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'

export default function MyAccountManagement(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeSetting, setActiveSetting] = useState<number>(1)

  const handleLogout = () => {
    localStorage.clear()
    navigate(APP_ROUTES.HOME)
  }

  return (
    <div className='w-full h-[calc(100vh-75px)] flex flex-col items-center md:items-start md:flex-row md:p-4'>
      <div className='w-11/12 md:w-[250px] md:h-full flex flex-col justify-between items-start border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-neutral-900'>
        <div>
          {settingsList.map((setting) => (
            <div
              key={setting.id}
              className={`w-full md:w-[234px] h-[50px] flex flex-row items-center justify-start mb-4 p-4 cursor-pointer rounded-[10px] 
              transition-all duration-300 hover:bg-primary hover:text-neutral-100
            ${
              activeSetting === setting?.id
                ? 'bg-primary text-neutral-100'
                : 'bg-neutral-100 text-neutral-500'
            }`}
              onClick={() => setActiveSetting(setting.id)}
            >
              {t(setting.name)}
            </div>
          ))}
        </div>

        <div onClick={() => handleLogout()}>
          <Typography
            variant='text'
            className='cursor-pointer hover:text-neutral-900'
          >
            {t('myAccount.logout')}
          </Typography>
        </div>
      </div>
      <div className='h-full w-11/12 md:w-[calc(100vw-250px)] mt-4 md:mt-0'>
        {activeSetting === 1 && <PersonnalSection />}
        {activeSetting === 2 && <PasswordSection />}
        {activeSetting === 3 && <WishlistSection />}
      </div>
    </div>
  )
}
