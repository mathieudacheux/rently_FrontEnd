import { useFormikContext } from 'formik'
import PropertyDetailsDetailsManagement from './PropertyDetailsManagement.tsx'
import { PropertySerializerRead } from '../../../api/index.ts'

export default function PropertyDetailsManagementStep() {
  const { values } = useFormikContext<PropertySerializerRead>()

  return (
    <div className='flex items-center flex-col'>
      <PropertyDetailsDetailsManagement property={values} />
    </div>
  )
}
