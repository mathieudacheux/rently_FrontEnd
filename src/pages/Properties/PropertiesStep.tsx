import { useEffect, useState } from 'react'
import { FormikProvider } from 'formik'
import { useLazyGetPropertyByFilterQuery } from '../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../api/index.ts'
import usePropertyFormik from './hooks/usePropertyFormik.ts'
import PropertiesManagement from './PropertiesManagement.tsx'

export default function Properties() {
  const propertyFormik = usePropertyFormik()

  const [triggerProperties, propertiesQuery] = useLazyGetPropertyByFilterQuery()

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

  const [properties, setProperties] = useState<PropertySerializerRead[]>([])

  useEffect(() => {
    if (propertiesQuery.data?.length) {
      setProperties(propertiesQuery.data)
    } else {
      setProperties([])
    }
  }, [propertiesQuery.data])

  return (
    <>
      <FormikProvider value={propertyFormik}>
        <PropertiesManagement properties={properties} search={handleSearch} />
      </FormikProvider>
    </>
  )
}
