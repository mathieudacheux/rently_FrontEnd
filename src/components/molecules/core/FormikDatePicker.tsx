// eslint-disable-next-line import/named
import { useField } from 'formik'
import { useTranslation } from 'react-i18next'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import fr from 'date-fns/locale/fr'
import en from 'date-fns/locale/en-US'

export default function FormikDatePicker({
  name,
  disabledDays = [],
  toFr = false,
}: {
  name: string
  disabledDays?: (Date | { from: Date; to: Date })[]
  toFr?: boolean
}): JSX.Element {
  const { t } = useTranslation()
  const [, meta, helpers] = useField(name)

  return (
    <>
      <div className='w-full max-w-xs'>
        <DayPicker
          mode='single'
          selected={meta.value}
          onSelect={(value) => helpers.setValue(value)}
          disabled={disabledDays}
          locale={toFr ? fr : en}
        />
      </div>

      {meta.touched && meta.error ? (
        <div className='text-xs text-error'>{t(meta.error)}</div>
      ) : null}
    </>
  )
}
