import { useCallback } from 'react'
import { useFormik } from 'formik'
import { useAppSelector } from '../../../store/store.ts'

export default function usePropertyFormik() {
  const homeFilters = useAppSelector()
  const initialValues = {
    searchCity: '',
    searchBudget: null,
    searchType: '',
  }

  const form = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: useCallback(async () => null, []),
  })

  return form
}
