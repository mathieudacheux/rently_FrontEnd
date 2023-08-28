// import L from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
// import Icon from '../../../assets/icons/MapIcon.svg'

export default function MapHome(): JSX.Element {
  // const myIcon = new L.Icon({
  //   iconUrl: Icon,
  //   iconRetinaUrl: Icon,
  //   popupAnchor: [-0, -0],
  //   iconSize: [25, 30],
  // })

  return (
    <MapContainer
      center={[49.894067, 2.295753]}
      zoom={13}
      scrollWheelZoom={false}
      className='w-full h-full rounded-[10px]'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  )
}
