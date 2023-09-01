import { useTranslation } from 'react-i18next'
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet'
import Phone from '../../../../components/atoms/icons/Phone.tsx'
import Calendar from '../../../../components/atoms/icons/Calendar.tsx'
import Contact from '../../../../components/atoms/icons/Contact.tsx'
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
  const address = useGetAddressByIdQuery(property?.address_id)
    .data as AddressSerializerRead

  const DPE = [DPE_A, DPE_B, DPE_C, DPE_D, DPE_E, DPE_F, DPE_G]

  const { t } = useTranslation()

  const handleCall = () => {
    window.open(`tel:${property?.agent_phone || ''}`, '_blank')
  }

  const handleMail = () => {
    window.open(`mailto:${property?.agent_mail || ''}`, '_blank')
  }

  return (
    <div className='md:w-1/2 flex flex-col mt-4 px-2  md:pl-4'>
      <div className='flex flex-col items-center justify-between h-[250px] md:mb-4'>
        <div className='border rounded-full w-[100px] h-[100px]'>
          <img
            id='avatar'
            src={
              `https://back-rently.mathieudacheux.fr/public/img/agent/${property?.agent_id}/avatar.png` ||
              `https://back-rently.mathieudacheux.fr/public/img/agent/none/avatar.png`
            }
            alt=''
            className='object-cover rounded-full w-full h-full object-center'
          />
        </div>
        <div className='w-full text-center text-neutral-900'>
          {property?.agent_id
            ? `${property?.agent_firstname || ''} ${property?.agent_name || ''}`
            : t('propertyDetails.noAgent')}
        </div>
        <div className='w-full md:w-8/12 flex justify-between'>
          <div className='btn-cta btn-call' onClick={() => handleCall()}>
            <Phone />
            {t('propertyDetails.call')}
          </div>
          <div className='btn-cta btn-calendar'>
            <Calendar />
            {t('propertyDetails.calendar')}
          </div>
          <div className='btn-cta btn-contact' onClick={() => handleMail()}>
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
        maxZoom={15}
        minZoom={10}
      >
        <Recenter
          lat={Number(address?.latitude || null)}
          lng={Number(address?.longitude || null)}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <CircleMarker
          center={[
            Number(address?.latitude || null),
            Number(address?.longitude || null),
          ]}
          radius={40}
        />
      </MapContainer>
      {property.dpe && (
        <div className='w-full md:h-[450px] rounded-[10px] mt-4  md:mt-8'>
          <img src={DPE[property?.dpe - 1]} alt='DPE image' />
        </div>
      )}
    </div>
  )
}
