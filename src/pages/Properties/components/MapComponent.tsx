import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MarkerType } from '../type.ts'
import Icon from '../../../assets/icons/MapIcon.svg'
import MarkerClusterGroup from 'react-leaflet-cluster'

export default function MapComponent({
  markers,
}: {
  markers: MarkerType[]
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
        {markers.map((marker) => (
          <Marker
            icon={myIcon}
            key={`${Math.random()}-${marker.id}`}
            position={marker.position}
            eventHandlers={{
              click: () => {
                console.log(marker.property_id)
              },
            }}
          >
            <Popup>MAISON</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <ResizeMap />
    </MapContainer>
  )
}
