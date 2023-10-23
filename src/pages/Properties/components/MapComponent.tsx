import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { MarkerType } from '../type.ts'
import Icon from '../../../assets/icons/MapIcon.svg'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { PropertySerializerRead } from '../../../api/index.ts'
import 'leaflet/dist/leaflet.css'
import PropertyCardMapPopup from '../../../components/organisms/PropertyCardMapPopup.tsx'
import { useEffect } from 'react'
import { useUserLocation } from '../../../hooks/useUserLocation.ts'

const Recenter = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng])
  return null
}

function ResizeMap() {
  const map = useMap()

  setTimeout(function () {
    map.invalidateSize()
  }, 400)

  return null
}

export default function MapComponent({
  markers,
  properties,
  height,
  marginTop,
  onClick,
}: {
  markers: MarkerType[]
  properties: PropertySerializerRead[]
  height: string
  marginTop?: string
  onClick: (itemId: number) => void
}): JSX.Element {
  const { userLocation } = useUserLocation()

  const myIcon = new L.Icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
  })

  return (
    <MapContainer
      center={[userLocation[0], userLocation[1]]}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height,
        marginTop,
        width: '100%',
        transition: 'all 0.7s linear',
      }}
    >
      <Recenter lat={userLocation[0]} lng={userLocation[1]} />
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
              <Popup className='customPopup'>
                <div className='h-full w-full'>
                  {properties?.length && (
                    <PropertyCardMapPopup property={properties[index]} />
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

export { Recenter }
