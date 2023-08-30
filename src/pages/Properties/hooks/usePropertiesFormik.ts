import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import { useAppSelector } from '../../../store/store.ts'
import { searchFilter } from '../../../features/property/propertySlice.ts'

export default function usePropertiesFormik() {
  const selectedSearchFilter = useAppSelector(searchFilter)

  const initialValues = useMemo(
    () => ({
      searchCity: selectedSearchFilter?.searchCity || '',
      searchBudget: selectedSearchFilter?.searchBudget || null,
      searchType: selectedSearchFilter?.searchType || '',
    }),
    [selectedSearchFilter],
  )

  const propertiesFormik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: useCallback(async () => null, []),
  })

  return { propertiesFormik }
}
