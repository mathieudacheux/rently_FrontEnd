import { useField, useFormikContext } from 'formik'

export default function FormikSwitchButton({
  textOne,
  textTwo,
  name,
  className,
}: {
  textOne: string
  textTwo: string
  name: string
  className?: string
}): JSX.Element {
  const formik = useFormikContext()
  const [field] = useField(name)

  return (
    <div role='group' className={`join border-0 ${className} w-[200px]`}>
      <button
        type='button'
        className={`join-item btn border-0 w-[100px] 
        hover:bg-primary hover:text-white
        ${
          field.value === true
            ? 'active bg-primary text-white'
            : 'bg-white text-neutral-900'
        }`}
        onClick={() => {
          formik.setFieldValue(name, true)
        }}
      >
        {textOne}
      </button>
      <button
        type='button'
        className={`join-item btn border-0 w-[100px] 
        hover:bg-primary hover:text-white
        ${
          field.value === false
            ? 'active bg-primary text-white'
            : 'bg-white text-neutral-900'
        }`}
        onClick={() => {
          formik.setFieldValue(name, false)
        }}
      >
        {textTwo}
      </button>
    </div>
  )
}
