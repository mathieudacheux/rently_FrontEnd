import { FormikProvider } from 'formik'
import usePropertyFormik from './hooks/usePropertyFormik.ts'
import PropertyDetailsManagementStep from './PropertyDetailsManagement/PropertyDetailsManagementStep.tsx'

export default function PropertyDetails(): JSX.Element {
  const { propertyFormik } = usePropertyFormik()

  return (
    <>
      <FormikProvider value={propertyFormik}>
        <PropertyDetailsManagementStep />
      </FormikProvider>
    </>
  )
}
