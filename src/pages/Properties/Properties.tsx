import { FormikProvider } from 'formik'
import usePropertyFormik from './hooks/usePropertyFormik.ts'
import PropertiesStep from './PropertiesManagement/PropertiesStep.tsx'

export default function Properties(): JSX.Element {
  const propertyFormik = usePropertyFormik()

  return (
    <>
      <FormikProvider value={propertyFormik}>
        <PropertiesStep />
      </FormikProvider>
    </>
  )
}
