import { useField } from 'formik'
import { useTranslation } from 'react-i18next'

export default function FormikTextArea({
  name,
  disabled = false,
  placeholder,
}: {
  name: string
  disabled?: boolean
  placeholder?: string
}) {
  const { t } = useTranslation()
  const [field, meta] = useField(name)

  return (
    <>
      <textarea
        name={field.name}
        value={field.value || ''}
        onChange={(e) => field.onChange(e)}
        disabled={disabled}
        className='textarea min-w-full text-neutral-900 placeholder-neutral-500 '
        placeholder={placeholder ? t(placeholder) : ''}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className='text-xs text-error'>{t(meta.error)}</div>
      ) : null}
    </>
  )
}
