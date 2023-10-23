import { FormikProvider } from 'formik'
import usePropertyFormik from './hooks/usePropertiesFormik.ts'
import PropertiesManagementStep from './PropertiesManagement/PropertiesManagementStep.tsx'

export default function Properties(): JSX.Element {
  const { propertiesFormik } = usePropertyFormik()

  return (
    <>
      <FormikProvider value={propertiesFormik}>
        <PropertiesManagementStep />
      </FormikProvider>
    </>
  )
}
