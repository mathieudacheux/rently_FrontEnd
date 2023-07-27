import { useCallback } from 'react'
import { useFormik } from 'formik'

export default function usePropertyFormik() {
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
