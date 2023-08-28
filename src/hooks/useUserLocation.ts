import { useContext } from 'react'
import {
  UserLocationContext,
  UserLocationContextType,
} from '../contexts/UserLocationProvider.tsx'

export const useUserLocation = (): UserLocationContextType => {
  const context = useContext(UserLocationContext)

  if (!context) {
    throw new Error(
      "useUserLocation doit être utilisé à l'intérieur de UserLocationProvider",
    )
  }

  return context
}
