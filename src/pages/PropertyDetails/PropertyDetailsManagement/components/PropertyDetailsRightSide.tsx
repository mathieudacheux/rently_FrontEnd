import { useTranslation } from 'react-i18next'
import Phone from '../../../../components/atoms/icons/Phone.tsx'
import Calendar from '../../../../components/atoms/icons/Calendar.tsx'
import Contact from '../../../../components/atoms/icons/Contact.tsx'
import { MapContainer, TileLayer } from 'react-leaflet'
import {
  AddressSerializerRead,
  PropertySerializerRead,
} from '../../../../api/index.ts'
import { useGetAddressByIdQuery } from '../../../../features/address/addressApi.ts'
import { Recenter } from '../../../Properties/components/MapComponent.tsx'
import DPE_A from '../../../../assets/images/DPE_A.png'
import DPE_B from '../../../../assets/images/DPE_B.png'
import DPE_C from '../../../../assets/images/DPE_C.png'
import DPE_D from '../../../../assets/images/DPE_D.png'
import DPE_E from '../../../../assets/images/DPE_E.png'
import DPE_F from '../../../../assets/images/DPE_F.png'
import DPE_G from '../../../../assets/images/DPE_G.png'

export default function PropertyDetailsRightSide({
  property,
}: {
  property: PropertySerializerRead
}) {
  const address = useGetAddressByIdQuery(property.address_id)
    .data as AddressSerializerRead

  const DPE = [DPE_A, DPE_B, DPE_C, DPE_D, DPE_E, DPE_F, DPE_G]

  const { t } = useTranslation()

  return (
    <div className='w-full md:w-1/2 flex flex-col mt-4 px-2'>
      <div className='flex flex-col items-center justify-between h-[270px]'>
        <div className='border rounded-full w-[100px] h-[100px]'>
          <img
            src='https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg'
            alt=''
            className='object-cover rounded-full w-full h-full'
          />
        </div>
        <div className='w-full text-center text-neutral-900'>
          le nom de lagent
        </div>
        <div className='w-full text-center text-neutral-400'>
          ville de lagent
        </div>
        <div className='w-8/12 flex justify-between'>
          <div className='btn-cta btn-call'>
            <Phone />
            {t('propertyDetails.call')}
          </div>
          <div className='btn-cta btn-calendar'>
            <Calendar />
            {t('propertyDetails.calendar')}
          </div>
          <div className='btn-cta btn-contact'>
            <Contact />
            {t('propertyDetails.contact')}
          </div>
        </div>
      </div>
      <MapContainer
        center={[
          Number(address?.latitude || null),
          Number(address?.longitude || null),
        ]}
        zoom={13}
        scrollWheelZoom={false}
        className='w-full h-[300px] md:h-[450px] rounded-[10px] mt-4'
      >
        <Recenter
          lat={Number(address?.latitude || null)}
          lng={Number(address?.longitude || null)}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
      {property.dpe && (
        <div className='w-full md:h-[450px] rounded-[10px] mt-4'>
          <img src={DPE[property?.dpe - 1]} alt='DPE image' />
        </div>
      )}
    </div>
  )
}
