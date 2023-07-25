import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import FormikTextField from '../../components/molecules/core/FormikTextField.tsx'
import FormikSelect from '../../components/molecules/core/FormikSelect.tsx'
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

  const options = [
    { label: 'test', value: 'test' },
    { label: 'test2', value: 'test2' },
  ]

  return (
    <>
      <FormikProvider value={form}>
        <FormikTextField
          name='test'
          placeholder='testing formik textfield'
          icon={<Heart color />}
        />
        <FormikSelect name='test' options={options} />
        <PropertyCard />
      </FormikProvider>
    </>
  )
}
