import { useState, useEffect } from 'react'
import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import MapComponent from './MapComponent.tsx'
import Arrow from '../../../components/atoms/icons/Arrow.tsx'

export default function PropertiesList({
  mapOpen,
  mobileMapOpen,
  properties,
  setMapState,
}: {
  mapOpen: boolean
  mobileMapOpen: boolean
  properties: PropertySerializerRead[]
  setMapState: () => void
}): JSX.Element {
  const [item, setItem] = useState<number | null>(
    properties.length ? (properties[0].property_id as number) : null,
  )

  const setItemToView = (itemId: number) => {
    setItem(itemId)
  }

  useEffect(() => {
    document
      .getElementById(String(item))
      ?.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      document.getElementById(String(item))?.classList.add('bg-blue-100')
    }, 700)
    setTimeout(() => {
      document.getElementById(String(item))?.classList.remove('bg-blue-100')
    }, 2000)
  }, [item])

  return (
    <div
      className={`flex ${
        mapOpen ? 'md:h-[calc(100vh-165px)]' : ''
      } transition-all duration-700 linear`}
    >
      <div
        className={`mapContainer ${
          mapOpen ? 'w-9/12 h-full' : 'w-0 h-full'
        } transition-all duration-700 linear h-full rounded-r-lg`}
      >
        <MapComponent
          properties={properties}
          markers={properties.map((property) => ({
            id: property.address_id as number,
            property_id: property.property_id as number,
            position: [Number(property.latitude), Number(property.longitude)],
          }))}
          height='100%'
          onClick={setItemToView}
        />
      </div>
      <div
        className={`mobileMapContainer ${
          mobileMapOpen ? 'h-4/5' : 'h-0'
        } transition-all duration-700 linear w-full rounded-t-lg`}
      >
        <div
          onClick={setMapState}
          className='h-[40px] w-full z-50 rounded-t-lg flex items-center justify-center bg-primary md:hidden'
        >
          <Arrow rotate={!mobileMapOpen} color='white' />
        </div>
        <MapComponent
          properties={properties}
          markers={properties.map((property) => ({
            id: property.address_id as number,
            property_id: property.property_id as number,
            position: [Number(property.latitude), Number(property.longitude)],
          }))}
          onClick={setItemToView}
          height='100%'
        />
      </div>
      <div
        className={`flex justify-center  pb-3 ${
          mapOpen ? 'md:w-5/12 overflow-scroll no-scrollbar' : 'w-full'
        }`}
      >
        <div
          className={`gap-4 md:pl-4 pt-3 md:max-w-[1200px] md:w-11/12 grid w-10/12 relative ${
            mapOpen
              ? 'flex flex-wrap md:w-full justify-center'
              : 'grid md:grid-cols-3 grid-cols-1 justify-items-center '
          }`}
        >
          {mapOpen && (
            <div className='topShadow w-11/12 absolute top-0 left-0 -mt-4'></div>
          )}
          {properties.length
            ? properties.map((property: PropertySerializerRead) => (
                <PropertyCard
                  key={property.name}
                  mapOpened={mapOpen}
                  property={property}
                />
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}
