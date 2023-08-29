import { useState } from 'react'
import { settingsList } from './constants/constants.ts'
import { useTranslation } from 'react-i18next'
import PersonnalSection from './components/PersonnalSection.tsx'
import PasswordSection from './components/PasswordSection.tsx'
import WishlistSection from './components/WishlistSection.tsx'

export default function MyAccountManagement(): JSX.Element {
  const { t } = useTranslation()
  const [activeSetting, setActiveSetting] = useState<number>(1)

  return (
    <div className='w-full h-[calc(100vh-75px)] flex flex-col items-center md:items-start md:flex-row md:p-4'>
      <div className='w-11/12 md:w-[250px] md:h-full flex flex-col items-start border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-neutral-900'>
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
      <div className='h-full w-11/12 md:w-[calc(100vw-250px)] mt-4 md:mt-0'>
        {activeSetting === 1 && <PersonnalSection />}
        {activeSetting === 2 && <PasswordSection />}
        {activeSetting === 3 && <WishlistSection />}
      </div>
    </div>
  )
}
