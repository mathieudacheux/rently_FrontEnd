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

  useEffect(() => {
    dispatch(
      setSearchFilter({
        searchFilter: { searchCity: '', searchBudget: null, searchType: '' },
      }),
    )
  }, [])

  const [triggerProperties, propertiesQuery] = useLazyGetPropertyByFilterQuery()

  const { values } = useFormikContext<PropertyFormikType>()

  useEffect(() => {
    triggerProperties({
      city: values.searchCity,
      price: values.searchBudget,
      type: values.searchType,
    })
  }, [values])

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

  const [properties, setProperties] = useState<PropertySerializerRead[]>([])

  useEffect(() => {
    if (propertiesQuery.data?.length) {
      setProperties(propertiesQuery.data)
    } else {
      setProperties([])
    }
  }, [propertiesQuery.data])

  return <PropertiesManagement properties={properties} search={handleSearch} />
}
