import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import { useAppSelector } from '../../../store/store.ts'
import { searchFilter } from '../../../features/property/propertySlice.ts'

export default function usePropertiesFormik() {
  const selectedSearchFilter = useAppSelector(searchFilter)

  const initialValues = useMemo(
    () => ({
      status: selectedSearchFilter?.searchStatus || '',
      searchCity: selectedSearchFilter?.searchCity || '',
      property_type: selectedSearchFilter?.searchType
        ? selectedSearchFilter?.searchType
        : '',
      price: selectedSearchFilter?.searchBudget
        ? selectedSearchFilter?.searchBudget
        : '',
      roomsNumber: '',
      surface: '',
      bedroomNumber: '',
      bathroomNumber: '',
      kitchenNumber: '',
      toiletNumber: '',
      buildYear: '',
      dpe: '',
      landSize: '',
      elevator: false,
      terrace: false,
      balcony: false,
      cellar: false,
      parking: false,
      garden: false,
      garage: false,
      swimmingPool: false,
      keeper: false,
      fiber: false,
      duplex: false,
      groundFloor: false,
      lastFloor: false,
      lifeAnnuity: false,
      workDone: false,
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
