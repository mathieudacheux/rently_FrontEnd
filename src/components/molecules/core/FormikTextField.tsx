import { ChangeEvent } from 'react'
import { useField, useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'

export default function FormikTextField({
  name,
  placeholder,
  onlyAlpha,
  onlyNumbers,
  icon,
  textCenter,
  disableShadows,
}: {
  name: string
  placeholder?: string
  onlyAlpha?: boolean
  onlyNumbers?: boolean
  icon?: React.ReactNode
  textCenter?: boolean
  disableShadows?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  const formik = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e: ChangeEvent) => {
    if (onlyAlpha) {
      ;(e.target as HTMLInputElement).value = (
        e.target as HTMLInputElement
      ).value.replace(/[^a-z]/gi, '')

      formik.handleChange(e)
    }
    if (onlyNumbers) {
      ;(e.target as HTMLInputElement).value = (
        e.target as HTMLInputElement
      ).value.replace(/[^0-9.]/gi, '')

      formik.handleChange(e)
    } else {
      formik.handleChange(e)
    }
  }

  return (
    <div className={`relative w-full max-w-xs dark:bg-red`}>
      <input
        {...field}
        name={field.name}
        value={field.value || ''}
        onChange={handleChange}
        onBlur={(event) => {
          formik.handleBlur(event)
        }}
        type='text'
        placeholder={placeholder ? t(placeholder) : ''}
        className={`${
          disableShadows ? 'input-no-shadow' : 'input'
        } input-bordered w-full max-w-xs text-neutral-900 placeholder-neutral-500 shadow ${
          textCenter ? 'text-center' : ''
        }`}
      />
      {icon && (
        <div className='w-fit input-icon absolute right-5 top-1/2 -translate-y-1/2'>
          {icon}
        </div>
      )}
      {meta.touched && meta.error ? (
        <div className='text-xs text-error'>{t(meta.error)}</div>
      ) : null}
    </div>
  )
}
