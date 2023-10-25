import { useCallback, useEffect, useMemo } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { useLazyGetPropertyByIdQuery } from '../../../features/property/propertyApi.ts'
import { PropertySerializerRead } from '../../../api/index.ts'

export interface PropertyFormik extends PropertySerializerRead {
  appointment_date: string
  appointment_hour: string | null
}

export default function usePropertyFormik() {
  // get id from URI path
  const { property_id } = useParams()

  const [triggerPoperty, propertyQuery] = useLazyGetPropertyByIdQuery({})

  useEffect(() => {
    if (property_id) {
      triggerPoperty(Number(property_id))
    }
  }, [property_id])

  const initialValues = useMemo(() => {
    if (propertyQuery.data) {
      return {
        ...propertyQuery.data,
        appointment_date: '',
        appointment_hour: null,
      }
    } else {
      return {
        appointment_date: '',
        appointment_hour: null,
      }
    }
  }, [propertyQuery.data]) as PropertyFormik

  const propertyFormik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: useCallback(async () => null, []),
  })

  return { propertyFormik }
}
