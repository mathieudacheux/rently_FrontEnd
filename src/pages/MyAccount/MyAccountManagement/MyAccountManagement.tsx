import { useState } from 'react'
import { settingsList } from './constants/constants.ts'
import { useTranslation } from 'react-i18next'

export default function MyAccountManagement(): JSX.Element {
  const { t } = useTranslation()
  const [activeSetting, setActiveSetting] = useState(settingsList[0])

  return (
    <div className='w-full h-[calc(100vh-75px)] flex flex-row justify-between p-4'>
      <div className=' w-[250px] flex flex-col items-start border-r-[1px] border-neutral-900'>
        {settingsList.map((setting) => (
          <div
            key={setting.id}
            className={`w-[234px] h-[50px] flex flex-row items-center justify-start mb-4 p-4 cursor-pointer rounded-[10px] 
              transition-all duration-300 hover:bg-primary hover:text-neutral-100
            ${
              activeSetting === setting
                ? 'bg-primary text-neutral-100'
                : 'bg-neutral-100 text-neutral-500'
            }`}
            onClick={() => setActiveSetting(setting)}
          >
            {t(setting.name)}
          </div>
        ))}
      </div>
    </div>
  )
}
