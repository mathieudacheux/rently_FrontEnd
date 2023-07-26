import { useState } from 'react'
import Typography from '../../components/atoms/Typography.tsx'
import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import FormikTextField from '../../components/molecules/core/FormikTextField.tsx'
import FormikSelect from '../../components/molecules/core/FormikSelect.tsx'
import { FormikProvider, useFormik } from 'formik'
import Heart from '../../components/atoms/icons/Heart.tsx'
import FormikCheckbox from '../../components/molecules/core/FormikCheckbox.tsx'
import FormikTextArea from '../../components/molecules/core/FormikTextArea.tsx'
import Toast from '../../components/molecules/Toast.tsx'
import Button from '../../components/atoms/Button.tsx'
import Popup from '../../components/molecules/Popup.tsx'

export default function Playground(): JSX.Element {
  const [open, setOpen] = useState(false)
  const initialValues = {
    test41: '',
    test2: false,
    test3: '',
  }

  console.log(open)

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

  console.log(form.values)

  return (
    <div className='flex-col items-center text-center'>
      <FormikProvider value={form}>
        <FormikTextField
          name='test1'
          placeholder='testing formik textfield'
          icon={<Heart color />}
        />
      <Typography variant='h2' color='primary'>
        Properties list with map opened
      </Typography>
      <div className='flex justify-center w-12/12 my-4'>
        <FormikSelect name='test3' options={options} />
        <div className='flex justify-between align-middle flex-wrap'>
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
        </div>
        <FormikTextArea name='test4' placeholder='testing formik textarea' />
        <PropertyCard />
      </FormikProvider>
    </>
  )
}
