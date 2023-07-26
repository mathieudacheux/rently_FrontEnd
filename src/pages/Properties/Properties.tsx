import { useEffect, useState } from 'react'
import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import Searchbar from '../../components/organisms/Searchbar.tsx'
import { FormikProvider, useFormik } from 'formik'
import { useLazyGetPropertyByFilterQuery } from '../../features/property/propertyApi.ts'
import Button from '../../components/atoms/Button.tsx'
import Filter from '../../components/atoms/icons/Filter.tsx'
import Map from '../../components/atoms/icons/Map.tsx'
export default function Properties() {
  const initialValues = {
    searchCity: '',
    searchBudget: null,
    searchType: '',
  }

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  const form = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  const { values } = form

  const [triggerProperties, propertiesQuery] = useLazyGetPropertyByFilterQuery()

  console.log(propertiesQuery)

  useEffect(() => {
    triggerProperties({ city: '' })
  }, [])

  const handleSearch = ({
    city,
    price,
    type,
  }: {
    city: string
    price: number | null
    type: string
  }) => {
    triggerProperties({ city, price, type })
  }

  const [mapOpen, setMapOpen] = useState<boolean>(false)

  return (
    <>
      <FormikProvider value={form}>
        <div className='flex justify-center items-center mt-4'>
          <Searchbar
            onClick={() =>
              handleSearch({
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
        <div className='flex h-[calc(100vh-220px)]  mt-4'>
          <div
            className={`mapContainer ${
              mapOpen ? 'w-7/12' : 'w-0'
            } bg-primary  transition-all duration-700 linear`}
          ></div>
          <div
            className={`propertiesContainer flex justify-evenly flex-wrap gap-6 py-3 ${
              mapOpen ? 'w-5/12 overflow-scroll' : 'w-full'
            }`}
          >
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
            <PropertyCard mapOpened={mapOpen} />
          </div>
        </div>
      </FormikProvider>
    </>
  )
}
