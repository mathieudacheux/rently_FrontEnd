// eslint-disable-next-line import/named
import { FormikValues, useField, useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Arrow from '../../atoms/icons/Arrow.tsx'

export type Option = {
  label: string
  value: string | number
  disabled?: boolean
}

export default function FormikSelect({
  name,
  options: selectOptions,
  placeholder,
  disabled = false,
}: {
  name: string
  options: ((values: FormikValues) => Option[]) | Option[]
  onValueChange?: (value: Option['value']) => unknown
  placeholder?: string
  disabled?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  const formContext = useFormikContext()
  const [field, meta] = useField(name)
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const options: Option[] =
    typeof selectOptions === 'function'
      ? selectOptions(formContext.values as FormikValues)
      : selectOptions

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const getOptions = () => {
    if (!options.length) {
      return (
        <option value='' disabled>
          {t('formik.noData')}
        </option>
      )
    }

    return options
      .sort((a, b) => Number(a?.disabled ?? 1) - Number(b?.disabled ?? 1))
      .map((item) => (
        <option
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className='text-neutral-900 placeholder-neutral-500 flex items-center'
        >
          {item.label}
        </option>
      ))
  }

  return (
    <div className='relative w-full max-w-xs '>
      <select
        {...field}
        name={field.name}
        value={field.value || ''}
        placeholder={placeholder ? t(placeholder) : ''}
        disabled={disabled}
        onClick={toggleOptions}
        className='input input-bordered w-full max-w-xs text-neutral-900 placeholder-neutral-500  appearance-none'
        onChange={toggleOptions}
      >
        {getOptions()}
      </select>
      <div className='w-fit input-icon absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'>
        <Arrow rotate={showOptions} />
      </div>
      {meta.touched && meta.error ? (
        <div className='text-xs text-error'>{t(meta.error)}</div>
      ) : null}
    </div>
  )
}
