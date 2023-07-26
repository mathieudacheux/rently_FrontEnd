import Typography from '../../components/atoms/Typography.tsx'
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
    <div className='flex-col items-center text-center'>
      <FormikProvider value={form}>
        <FormikTextField
          name='test'
          placeholder='testing formik textfield'
          icon={<Heart color />}
        />
      </FormikProvider>
      <Typography variant='h2' color='primary'>
        Properties list with map opened
      </Typography>
      <div className='flex justify-center w-12/12 my-4'>
        <PropertyCard />
      </div>
      <Typography variant='h2' color='primary'>
        Properties list
      </Typography>
      <div className='flex justify-evenly flex-wrap gap-2 my-4'>
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
      </div>
    </div>
  )
}
