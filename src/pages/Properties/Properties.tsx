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
        <div className='flex'>
          <div
            className={`mapContainer ${
              mapOpen ? 'w-4/6' : 'w-1/6'
            } bg-primary `}
          ></div>
          <div
            className={`propertiesContainer flex justify-evenly flex-wrap gap-6 my-4 ${
              mapOpen ? 'w-1/6 ml-10' : 'w-12/12'
            }`}
          >
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
            <PropertyCard mapOpened />
          </div>
        </div>
      </FormikProvider>
    </>
  )
}
