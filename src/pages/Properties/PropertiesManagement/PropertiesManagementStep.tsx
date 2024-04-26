import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { useLazyGetPropertyByFilterQuery } from '../../../features/property/propertyApi.ts'
import {
  PropertySerializerRead,
  StatusSerializerRead,
} from '../../../api/index.ts'
import PropertiesManagement from './PropertiesManagement.tsx'
import { PropertyFormikType } from '../type.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setSearchFilter } from '../../../features/property/propertySlice.ts'
import { useGetStatusQuery } from '../../../features/status/statusApi.ts'

export default function PropertiesManagementStep() {
  const dispatch = useAppDispatch()
  const { values } = useFormikContext<PropertyFormikType>()

  const [triggerProperties, propertiesQuery] = useLazyGetPropertyByFilterQuery()

  const status = useGetStatusQuery({})?.data as StatusSerializerRead[]

  const rent = status?.find((s) => s.name === 'À louer')?.status_id ?? null
  const buy = status?.find((s) => s.name === 'À vendre')?.status_id ?? null

  const [properties, setProperties] = useState<PropertySerializerRead[]>([])

  useEffect(() => {
    dispatch(
      setSearchFilter({
        searchFilter: {
          searchStatus: false,
          searchCity: '',
          searchBudget: null,
          searchType: null,
        },
      }),
    )
  }, [])

  useEffect(() => {
    if (!rent || !buy) return
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
      draft: false,
      status_id: values?.status === true ? buy : rent,
    })
  }, [values, rent, buy])

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
    draft,
    status_id,
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
    elevator: string | true
    terrace: string | true
    balcony: string | true
    cellar: string | true
    parking: string | true
    garden: string | true
    garage: string | true
    pool: string | true
    caretaker: string | true
    fiber_deployed: string | true
    duplex: string | true
    ground_floor: string | true
    top_floor: string | true
    life_annuity: string | true
    work_done: string | true
    draft: boolean
    status_id: number
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
      draft,
      status_id,
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
