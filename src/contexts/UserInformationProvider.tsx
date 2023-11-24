import { createContext, useState, useEffect } from 'react'
import { JWT } from '../pages/ValidateAccount/types'
import jwtDecode from 'jwt-decode'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

export interface UserInformationContextType {
  userInformation: string
  setUserInformation: (userInformation: string) => void
}

const UserInformationContext = createContext<
  UserInformationContextType | undefined
>(undefined)

function UserInformationProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { t } = useTranslation()
  const [userInformation, setUserInformation] = useState<string>('')

  const setUserInformationToDefault = async (userInformation: string) => {
    setUserInformation(userInformation)
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setUserInformationToDefault('')
    }

    const token = localStorage.getItem('token')

    if (token) {
      const decodedToken: JWT = jwtDecode(token)

      if (Date.now() >= decodedToken.exp * 1000) {
        setUserInformationToDefault('')
        localStorage.removeItem('token')
        localStorage.removeItem('mail')
        localStorage.removeItem('user')
        toast.error(t('connection.expiredToken'))
      } else {
        setUserInformationToDefault(token)
      }
    }
  }, [])

  return (
    <UserInformationContext.Provider
      value={{ userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  )
}

export { UserInformationContext, UserInformationProvider }
