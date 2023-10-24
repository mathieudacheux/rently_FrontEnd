import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyDetailsRightSide from './components/PropertyDetailsRightSide.tsx'
import PropertyDetailsLeftSide from './components/PropertyDetailsLeftSide.tsx'
import { useGetAllFolderImageQuery } from '../../../features/attachment/attachmentApi.ts'
import PropertyDetailsDesktopImages from './components/PropertyDetailsDesktopImages.tsx'
import PropertyDetailsMobileImages from './components/PropertyDetailsMobileImages.tsx'
import { useState } from 'react'
import Arrow from '../../../components/atoms/icons/Arrow.tsx'
import FormikSelect from '../../../components/molecules/core/FormikSelect.tsx'
import Button from '../../../components/atoms/Button.tsx'
import { useTranslation } from 'react-i18next'
import FormikDatePicker from '../../../components/molecules/core/FormikDatePicker.tsx'
import { useFormikContext } from 'formik'
import { PropertyFormik } from '../hooks/usePropertyFormik.ts'

export default function PropertyDetailsDetailsManagement({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  const { t, i18n } = useTranslation()

  const { values } = useFormikContext<PropertyFormik>()

  const hoursOption = [
    { label: '9 h 00', value: '09:00' },
    { label: '9 h 30', value: '09:30' },
    { label: '10 h 00', value: '10:00' },
    { label: '10 h 30', value: '10:30' },
    { label: '11 h 00', value: '11:00' },
    { label: '11 h 30', value: '11:30' },
    { label: '13 h 00', value: '13:00' },
    { label: '13 h 30', value: '13:30' },
    { label: '14 h 00', value: '14:00' },
    { label: '14 h 30', value: '14:30' },
    { label: '15 h 00', value: '15:00' },
    { label: '15 h 30', value: '15:30' },
    { label: '16 h 00', value: '16:00' },
    { label: '16 h 30', value: '16:30' },
    { label: '17 h 00', value: '17:00' },
  ]
  const images = useGetAllFolderImageQuery({
    id: Number(property?.property_id),
  }).data

  const [selectedImage, setSelectedImage] = useState<number>(0)

  const openModal = (selectedImage: number) => {
    window.image_modal.showModal()
    setSelectedImage(selectedImage)
  }

  const openApptModal = () => {
    if (localStorage.getItem('userId')) {
      window.appointment_modal.showModal()
    } else {
    }
  }

  const isDateSelected = values.appointment_date !== ''

  // format date to dd-mm-yyyy
  const formatDate = (date: Date, hour: string) => {
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('-').concat(` ${hour}:00`)
  }

  return (
    property && (
      <div className='w-11/12 md:w-full md:max-w-[1200px] flex flex-col items-center'>
        {window.innerWidth > 768 ? (
          <PropertyDetailsDesktopImages
            property={property}
            images={images}
            openModal={openModal}
          />
        ) : (
          <PropertyDetailsMobileImages
            property={property}
            images={images}
            openModal={openModal}
          />
        )}
        <div className='flex flex-col md:flex-row pt-4'>
          <PropertyDetailsLeftSide property={property} />
          <PropertyDetailsRightSide
            property={property}
            openApptModal={openApptModal}
          />
        </div>

        <dialog id='image_modal' className='modal w-full h-full'>
          <form method='dialog' className='modal-box'>
            <img
              src={
                images?.length
                  ? `https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[selectedImage]}`
                  : ''
              }
              alt=''
              className='w-full h-full object-cover'
            />
            <button className='fixed right-5 top-5 w-[35px] h-[35px] bg-white rounded-md text-primary font-extrabold'>
              ✕
            </button>
            <div
              className='fixed cursor-pointer -rotate-90 right-5 top-[50%] w-[35px] h-[35px] text-xl flex justify-center items-center bg-white text-black rounded-md'
              onClick={() =>
                setSelectedImage(
                  selectedImage === images.length - 1 ? 0 : selectedImage + 1,
                )
              }
            >
              <Arrow />
            </div>
            <div
              className='fixed cursor-pointer rotate-90 left-5 top-[50%] w-[35px] h-[35px] text-xl flex justify-center items-center bg-white text-black rounded-md'
              onClick={() =>
                setSelectedImage(
                  selectedImage === 0 ? images.length - 1 : selectedImage - 1,
                )
              }
            >
              <Arrow />
            </div>
          </form>
        </dialog>

        <dialog
          id='appointment_modal'
          className='modal w-full h-full flex justify-center items-center'
        >
          <div className='appt-modal-box bg-white rounded-md p-12'>
            <form method='dialog' className='pt-6'>
              <div className='relative h-full w-full flex flex-col justify-center items-center bg-white rounded-md'>
                <div className='text-black font-bold text-lg'>
                  {t('propertyDetails.apptDialog.title')}
                </div>
                <div className='mt-6 w-full h-[350px] flex justify-center text-black'>
                  <FormikDatePicker
                    name='appointment_date'
                    toFr={i18n.language === 'fr'}
                    disabledDays={[
                      {
                        from: new Date(1970, 1, 1),
                        to: new Date(Date.now() - 86400000),
                      },
                    ]}
                  />
                </div>
                {isDateSelected && (
                  <div className='w-3/12 flex justify-center'>
                    <FormikSelect
                      name='appointment_hour'
                      options={hoursOption}
                      placeholder={t('propertyDetails.apptDialog.hour')}
                    />
                  </div>
                )}
                <button className='absolute right-5 -top-2 w-[35px] h-[35px] bg-white rounded-md text-primary font-extrabold'>
                  ✕
                </button>
              </div>
            </form>
            <div className='mt-6 w-full flex justify-center pb-6'>
              <Button
                text={t('propertyDetails.apptDialog.button')}
                disabled={!values.appointment_date || !values.appointment_hour}
                onClick={() =>
                  console.log(
                    formatDate(
                      new Date(values.appointment_date),
                      values.appointment_hour || '',
                    ),
                  )
                }
              />
            </div>
          </div>
        </dialog>
      </div>
    )
  )
}
