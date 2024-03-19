import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { useLazyGetPropertyByFilterQuery } from '../../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../../api/index.ts'
import PropertiesManagement from './PropertiesManagement.tsx'
import { PropertyFormikType } from '../type.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setSearchFilter } from '../../../features/property/propertySlice.ts'

export default function PropertiesManagementStep() {
  const dispatch = useAppDispatch()
  const { values } = useFormikContext<PropertyFormikType>()

  const [triggerProperties, propertiesQuery] = useLazyGetPropertyByFilterQuery()

  const [properties, setProperties] = useState<PropertySerializerRead[]>([])

  useEffect(() => {
    dispatch(
      setSearchFilter({
        searchFilter: {
          searchStatus: null,
          searchCity: '',
          searchBudget: null,
          searchType: null,
        },
      }),
    )
  }, [])

  useEffect(() => {
    triggerProperties({
      city: values.searchCity,
      price: values.price,
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
      elevator: values.elevator ? values.elevator : '',
      terrace: values.terrace ? values.terrace : '',
      balcony: values.balcony ? values.balcony : '',
      cellar: values.cellar ? values.cellar : '',
      parking: values.parking ? values.parking : '',
      garden: values.garden ? values.garden : '',
      garage: values.garage ? values.garage : '',
      pool: values.pool ? values.pool : '',
      caretaker: values.keeper ? values.keeper : '',
      fiber_deployed: values.fiber ? values.fiber : '',
      duplex: values.duplex ? values.duplex : '',
      ground_floor: values.ground_floor ? values.ground_floor : '',
      top_floor: values.top_floor ? values.top_floor : '',
      life_annuity: values.life_annuity ? values.life_annuity : '',
      work_done: values.work_done ? values.work_done : '',
    })
  }, [values])

  const handleSearch = ({
    city,
    price,
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
    price: number | string
    property_type: string | number
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
  }) => {
    triggerProperties({
      city,
      price,
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
    })
  }

  useEffect(() => {
    if (propertiesQuery.data?.length) {
      setProperties(propertiesQuery.data)
    } else {
      setProperties([])
    }
  }, [propertiesQuery.data])

  return <PropertiesManagement properties={properties} search={handleSearch} />
}
