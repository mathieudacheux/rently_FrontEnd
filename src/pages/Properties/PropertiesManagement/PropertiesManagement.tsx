import { useFormikContext } from 'formik'
import { useEffect, useState } from 'react'
import { PropertySerializerRead } from '../../../api/index.ts'
import Button from '../../../components/atoms/Button.tsx'
import Filter from '../../../components/atoms/icons/Filter.tsx'
import Map from '../../../components/atoms/icons/Map.tsx'
import Searchbar from '../../../components/organisms/Searchbar.tsx'
import PropertiesList from '../components/PropertiesList.tsx'
import { PropertyFormikType } from '../type.ts'

export default function PropertiesManagement({
  properties,
  search,
}: {
  properties: PropertySerializerRead[]
  search: ({
    city,
    price,
    type,
  }: {
    city: string
    price: number
    type: string
  }) => void
}): JSX.Element {
  const { values } = useFormikContext<PropertyFormikType>()

  const [mapOpen, setMapOpen] = useState<boolean>(false)
  const [mobileMapOpen, setMobileMapOpen] = useState<boolean>(false)

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    setMapOpen(false)
    setMobileMapOpen(false)
  }, [windowSize])

  const setMapState = () => setMobileMapOpen(!mobileMapOpen)

  return (
    <>
      <div className='flex justify-center items-center flex-wrap md:flex-nowrap h-auto md:h-[80px] mb-4'>
        <Searchbar
          onClick={() =>
            search({
              city: values.searchCity,
              price: values.searchBudget,
              type: values.searchType,
            })
          }
        />
        <Button text='searchbar.filters' icon={<Filter />} rounded />
        <Button
          text='searchbar.map'
          icon={<Map />}
          rounded
          className='hidden md:flex'
          onClick={() => setMapOpen(!mapOpen)}
        />
        <Button
          text='searchbar.map'
          icon={<Map />}
          rounded
          className='md:hidden'
          onClick={() => setMobileMapOpen(!mobileMapOpen)}
        />
      </div>
      <PropertiesList
        mapOpen={mapOpen}
        mobileMapOpen={mobileMapOpen}
        properties={properties}
        setMapState={setMapState}
      />
    </>
  )
}
