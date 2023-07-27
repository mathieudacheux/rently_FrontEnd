import { useState } from 'react'
import { useFormikContext } from 'formik'
import { PropertySerializerRead } from '../../api/index.ts'
import Searchbar from '../../components/organisms/Searchbar.tsx'
import { PropertyFormikType } from './type.ts'
import Filter from '../../components/atoms/icons/Filter.tsx'
import Button from '../../components/atoms/Button.tsx'
import Map from '../../components/atoms/icons/Map.tsx'
import PropertiesList from './components/PropertiesList.tsx'

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

  return (
    <>
      <div className='flex justify-center items-center h-[80px]'>
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
          onClick={() => setMapOpen(!mapOpen)}
        />
      </div>
      <PropertiesList mapOpen={mapOpen} properties={properties} />
    </>
  )
}
