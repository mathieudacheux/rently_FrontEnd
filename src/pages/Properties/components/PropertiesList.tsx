import { useState, useEffect } from 'react'
import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import MapComponent from './MapComponent.tsx'

export default function PropertiesList({
  mapOpen,
  properties,
}: {
  mapOpen: boolean
  properties: PropertySerializerRead[]
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
  }, [item])

  return (
    <div className='flex h-[calc(100vh-165px)] transition-all duration-700 linear '>
      <div
        className={`mapContainer ${
          mapOpen ? 'w-7/12' : 'w-0'
        } transition-all duration-700 linear h-full`}
      >
        <MapComponent
          properties={properties}
          markers={properties.map((property) => ({
            id: property.address_id as number,
            property_id: property.property_id as number,
            position: [Number(property.latitude), Number(property.longitude)],
          }))}
          onClick={setItemToView}
        />
      </div>
      <div
        className={`flex justify-center pb-3 ${
          mapOpen ? 'w-5/12 overflow-scroll no-scrollbar' : 'w-full'
        }`}
      >
        <div
          className={`gap-4 pl-4 max-w-[1200px] ${
            mapOpen ? 'flex flex-wrap' : 'grid grid-cols-4'
          }`}
        >
          {mapOpen && <div className='topShadow w-11/12 -mt-4'></div>}
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
