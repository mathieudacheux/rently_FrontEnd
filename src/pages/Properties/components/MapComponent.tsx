import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MarkerType } from '../type.ts'
import Icon from '../../../assets/icons/MapIcon.svg'
import MarkerClusterGroup from 'react-leaflet-cluster'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import { PropertySerializerRead } from '../../../api/index.ts'

export default function MapComponent({
  markers,
  properties,
  onClick,
}: {
  markers: MarkerType[]
  properties: PropertySerializerRead[]
  onClick: (itemId: number) => void
}): JSX.Element {
  function ResizeMap() {
    const map = useMap()

    setTimeout(function () {
      map.invalidateSize()
    }, 400)

    return null
  }

  console.log(properties)

  const myIcon = new L.Icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
  })

  return (
    <MapContainer
      center={[49.898158, 2.295668]}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: '100%',
        width: '100%',
        transition: 'all 0.7s linear',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => {
          return (
            <Marker
              icon={myIcon}
              key={`${Math.random()}-${marker.id}`}
              position={marker.position}
              eventHandlers={{
                click: () => onClick(marker.property_id),
              }}
            >
              <Popup>
                <div className='h-full w-full'>
                  {properties?.length && (
                    <PropertyCard property={properties[index]} />
                  )}
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MarkerClusterGroup>
      <ResizeMap />
    </MapContainer>
  )
}
