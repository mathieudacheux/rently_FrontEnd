import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { MarkerType } from '../type.ts'
import Icon from '../../../assets/icons/MapIcon.svg'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { PropertySerializerRead } from '../../../api/index.ts'
import 'leaflet/dist/leaflet.css'
import PropertyCardMapPopup from '../../../components/organisms/PropertyCardMapPopup.tsx'

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
  function ResizeMap() {
    const map = useMap()

    setTimeout(function () {
      map.invalidateSize()
    }, 400)

    return null
  }

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
        height,
        marginTop,
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
