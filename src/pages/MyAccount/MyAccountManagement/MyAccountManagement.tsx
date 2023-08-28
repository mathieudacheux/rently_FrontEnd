import { useState } from 'react'
import { settingsList } from './constants/constants.ts'
import { useTranslation } from 'react-i18next'
import PasswordSection from './components/PasswordSection.tsx'

export default function MyAccountManagement(): JSX.Element {
  const { t } = useTranslation()
  const [activeSetting, setActiveSetting] = useState<number>(1)

  return (
    <div className='w-full h-[calc(100vh-75px)] flex flex-row p-4'>
      <div className=' w-[250px] flex flex-col items-start border-r-[1px] border-neutral-900'>
        {settingsList.map((setting) => (
          <div
            key={setting.id}
            className={`w-[234px] h-[50px] flex flex-row items-center justify-start mb-4 p-4 cursor-pointer rounded-[10px] 
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
      <div className='w-[calc(100vw-250px)]'>
        {activeSetting === 2 && <PasswordSection />}
      </div>
    </div>
  )
}
