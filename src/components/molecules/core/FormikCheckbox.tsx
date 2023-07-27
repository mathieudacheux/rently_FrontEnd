import { useTranslation } from 'react-i18next'
import { useField } from 'formik'

export default function FormikCheckbox({
  name,
  label,
  disabled = false,
}: {
  name: string
  label: string
  disabled?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  const [field] = useField(name)

  return (
    <label
      className='label cursor-pointer flex justify-start 
      items-center w-fit-content p-0
    '
    >
      <input
        name={field.name}
        value={field.value || false}
        disabled={disabled}
        checked={field.value}
        onChange={(e) => {
          field.onChange(e)
        }}
        type='checkbox'
        className='checkbox checkbox-primary mr-2'
      />
      <span className='text-neutral-900 font-normal'>{t(label)}</span>
    </label>
  )
}
