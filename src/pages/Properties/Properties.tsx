import { FormikProvider } from 'formik'
import usePropertyFormik from './hooks/usePropertyFormik.ts'
import PropertiesManagementStep from './PropertiesManagement/PropertiesManagementStep.tsx'

export default function Properties(): JSX.Element {
  const propertyFormik = usePropertyFormik()

  return (
    <>
      <FormikProvider value={propertyFormik}>
        <PropertiesManagementStep />
      </FormikProvider>
    </>
  )
}
