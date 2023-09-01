import { useFormikContext } from 'formik'
import { useEffect, useState } from 'react'
import { PropertySerializerRead } from '../../../api/index.ts'
import Button from '../../../components/atoms/Button.tsx'
import Filter from '../../../components/atoms/icons/Filter.tsx'
import Map from '../../../components/atoms/icons/Map.tsx'
import Searchbar from '../../../components/organisms/Searchbar.tsx'
import PropertiesList from '../components/PropertiesList.tsx'
import { PropertyFormikType } from '../type.ts'
import FiltersComponent from '../components/FiltersComponent.tsx'

export default function PropertiesManagement({
  properties,
  search,
}: {
  properties: PropertySerializerRead[]
  search: ({
    city,
    price,
    type,
    property_type,
    number_room,
    surface,
    bedroom,
    bathroom,
    kitchen,
    toilet,
    build_year,
    dpe,
    land_size,
    elevator,
    terrace,
    balcony,
    cellar,
    parking,
    garden,
    garage,
    pool,
    caretaker,
    fiber_deployed,
    duplex,
    ground_floor,
    top_floor,
    life_annuity,
    work_done,
  }: {
    city: string
    price: number
    type: string
    property_type: string
    number_room: string
    surface: string
    bedroom: string
    bathroom: string
    kitchen: string
    toilet: string
    build_year: string
    dpe: string
    land_size: string
    elevator: boolean
    terrace: boolean
    balcony: boolean
    cellar: boolean
    parking: boolean
    garden: boolean
    garage: boolean
    pool: boolean
    caretaker: boolean
    fiber_deployed: boolean
    duplex: boolean
    ground_floor: boolean
    top_floor: boolean
    life_annuity: boolean
    work_done: boolean
  }) => void
}): JSX.Element {
  const { values } = useFormikContext<PropertyFormikType>()

  console.log(values)

  const [mapOpen, setMapOpen] = useState<boolean>(false)
  const [mobileMapOpen, setMobileMapOpen] = useState<boolean>(false)

  const [openFilters, setOpenFilters] = useState<boolean>(false)

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
      <div className='flex justify-center items-center flex-wrap md:flex-nowrap h-auto md:h-[80px]'>
        <Searchbar
          onClick={() =>
            search({
              city: values.searchCity,
              price: values.searchBudget || values.price,
              type: values.searchType,
              property_type: values.property_type,
              number_room: values.rooms_number,
              surface: values.surface,
              bedroom: values.bedroom,
              bathroom: values.bathroom,
              kitchen: values.kitchen,
              toilet: values.toilet,
              build_year: values.build_year,
              dpe: values.dpe,
              land_size: values.land_size,
              elevator: values.elevator,
              terrace: values.terrace,
              balcony: values.balcony,
              cellar: values.cellar,
              parking: values.parking,
              garden: values.garden,
              garage: values.garage,
              pool: values.pool,
              caretaker: values.keeper,
              fiber_deployed: values.fiber,
              duplex: values.duplex,
              ground_floor: values.ground_floor,
              top_floor: values.top_floor,
              life_annuity: values.life_annuity,
              work_done: values.work_done,
            })
          }
        />
        <Button
          text='searchbar.filters'
          icon={<Filter />}
          rounded
          className='mx-4'
          onClick={() => setOpenFilters(!openFilters)}
        />
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
      <FiltersComponent open={openFilters} />
      <PropertiesList
        mapOpen={mapOpen}
        mobileMapOpen={mobileMapOpen}
        properties={properties}
        setMapState={setMapState}
      />
    </>
  )
}
