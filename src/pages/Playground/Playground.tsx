import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import FormikTextField from '../../components/molecules/core/FormikTextField.tsx'
import { FormikProvider, useFormik } from 'formik'
import Heart from '../../components/atoms/icons/Heart.tsx'

export default function Playground(): JSX.Element {
  const initialValues = {
    test: '',
  }

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  const form = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  return (
    <>
      <FormikProvider value={form}>
        <FormikTextField
          name='test'
          placeholder='testing formik textfield'
          icon={<Heart color />}
        />
        <PropertyCard />
      </FormikProvider>
    </>
  )
}
