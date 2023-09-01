import { ChangeEvent } from 'react'
import { useField, useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'

export default function FormikTextField({
  name,
  placeholder,
  label,
  onlyAlpha = false,
  onlyNumbers = false,
  password = false,
  showPassword,
  icon = null,
  textCenter = false,
  disableShadows = false,
  handleKeyDown,
}: {
  name: string
  placeholder?: string
  label?: string
  onlyAlpha?: boolean
  onlyNumbers?: boolean
  password?: boolean
  showPassword?: () => void
  icon?: React.ReactNode
  textCenter?: boolean
  disableShadows?: boolean
  handleKeyDown?: () => void
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
    <>
      <div className=' w-full dark:bg-red'>
        {label && <label className='text-neutral-900'>{label}</label>}
        <div className={`relative`}>
          <input
            {...field}
            name={field.name}
            value={field.value || ''}
            onChange={handleChange}
            onBlur={(event) => {
              formik.handleBlur(event)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && handleKeyDown) {
                handleKeyDown()
              }
            }}
            type={password ? 'password' : 'text'}
            placeholder={placeholder ? t(placeholder) : ''}
            className={`
          ${
            disableShadows ? 'input-no-shadow' : 'input'
          } bg-white input-bordered w-full  text-neutral-900 placeholder-neutral-300 shadow 
          ${textCenter ? 'text-center' : ''}`}
          />
          {icon && (
            <div
              onClick={() => showPassword && showPassword()}
              className={`w-fit input-icon absolute right-5 top-1/2 -translate-y-1/2 ${
                showPassword
                  ? 'tooltip tooltip-primary tooltip-left md:tooltip-top'
                  : ''
              } ${showPassword ? 'cursor-pointer' : ''}`}
              data-tip={showPassword ? t('connection.showPassword') : ''}
            >
              {icon}
            </div>
          )}
          {meta.touched && meta.error ? (
            <div className='text-xs text-error mt-0.5 absolute transition-all'>
              {t(meta.error)}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
