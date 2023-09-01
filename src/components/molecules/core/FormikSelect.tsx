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
  label,
}: {
  name: string
  options: ((values: FormikValues) => Option[]) | Option[]
  onValueChange?: (value: Option['value']) => unknown
  placeholder?: string
  disabled?: boolean
  label?: string
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

    return [
      <option
        key={field.name}
        value={''}
        disabled={true}
        className='text-neutral-500 hidden'
      >
        {placeholder}
      </option>,
      ...options
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
        )),
    ]
  }

  return (
    <>
      <div className='w-full max-w-xs'>
        {label && <label className='text-neutral-900'>{label}</label>}
        <div className='relative'>
          <select
            {...field}
            name={field.name}
            value={field.value || ''}
            placeholder={placeholder ? t(placeholder) : ''}
            disabled={disabled}
            onClick={toggleOptions}
            className={`input input-bordered w-full max-w-xs ${
              field.value ? 'text-neutral-900' : 'text-neutral-300'
            } placeholder-neutral-300  appearance-none`}
            onChange={(e) => {
              field.onChange(e)
              toggleOptions()
            }}
            onBlur={() => {
              toggleOptions()
            }}
          >
            {getOptions()}
          </select>
          <div
            className={`w-fit input-icon absolute right-5 top-1/2 -translate-y-1/2`}
          >
            <Arrow rotate={showOptions} />
          </div>
        </div>
      </div>

      {meta.touched && meta.error ? (
        <div className='text-xs text-error'>{t(meta.error)}</div>
      ) : null}
    </>
  )
}
