import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export default function useHomeFormik() {
  const { t, i18n } = useTranslation()

  const onSubmit = useCallback(async () => null, [])

  const initialValues = {
    searchCity: '',
    searchBudget: null,
    searchType: null,
    status: true,
    newsletter: '',
  }

  const validationSchema = useMemo(
    () =>
      yup.object({
        searchCity: yup.string(),
        searchBudget: yup.number().nullable(),
        searchType: yup.number().nullable(),
        newsletter: yup.string().email(t('yup.email')),
      }),
    [i18n.language],
  )

  const homeFormik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  })

  return {
    homeFormik,
  }
}
