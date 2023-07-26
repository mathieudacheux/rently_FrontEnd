// eslint-disable-next-line import/named
import { FormikContextType } from 'formik'
import { useCallback } from 'react'

const useFormikValidator = <Values>(formik: FormikContextType<Values>) => {
  const { validateForm, setFieldTouched } = formik

  return useCallback(
    async (values: Values) => {
      const errors = await validateForm(values)

      Object.keys(errors).forEach((fieldName) => {
        setFieldTouched(fieldName, true)
      })

      return false
    },
    [formik],
  )
}

export default useFormikValidator
