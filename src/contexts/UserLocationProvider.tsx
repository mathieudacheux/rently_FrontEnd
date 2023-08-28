import { createContext, useState, useEffect } from 'react'

export interface UserLocationContextType {
  userLocation: number[]
  setUserLocation: (location: number[]) => void
}

const UserLocationContext = createContext<UserLocationContextType | undefined>(
  undefined,
)

function UserLocationProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [userLocation, setUserLocation] = useState<number[]>([
    48.866667, 2.333333,
  ])

  const setUserLocationToDefault = async (position: number[]) => {
    setUserLocation(position)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocationToDefault([
        position.coords.latitude,
        position.coords.longitude,
      ])
    })
  }, [navigator.geolocation])

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  )
}

export { UserLocationContext, UserLocationProvider }
