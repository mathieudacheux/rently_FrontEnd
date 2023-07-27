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
        {markers.map((marker) => {
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
                <img
                  src='https://s3-alpha-sig.figma.com/img/ebfd/d8cc/7eb42cf9d865b262fe2556f782aad1ea?Expires=1691366400&Signature=U7hzI5kJwalGftk9~-EKZxHwMmPvR~Km4pZ2TCTJuPsNbqKhLEDDwk3633LxbBC2aG6J1rGr2pWczCJlL7O4YMxwcoN8ym9-xJyRJmBlV3KZAg3FW84d4KxiJTZRXEwsOzafyLATediX4WVNfyqEHYU0m9c-~9BtIfPZepLeHWaNGPDfyqXvxpSnOjkrYMLYbTXEF2L301pO4S02wAdRgp~0Y8rGUB6O9PkRcco5tZVzt4wYeHePcvS~~UxvpewkQzgB349vGHn7BrxoOHacl9KJxflVkxaX1LYXus1LIkt9C~tm0tyWpn5d-zNcGkOPPbjUbWwemyppJHLc-GwfOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                  alt='Album'
                  className='h-full object-cover'
                />
              </Popup>
            </Marker>
          )
        })}
      </MarkerClusterGroup>
      <ResizeMap />
    </MapContainer>
  )
}
