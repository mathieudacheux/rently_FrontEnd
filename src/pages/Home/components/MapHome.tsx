import { useEffect } from 'react'
import { useMap, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Icon from '../../../assets/icons/MapIcon.svg'
import { useUserLocation } from '../../../hooks/useUserLocation.ts'
import { useGetAgenciesQuery } from '../../../features/agency/agencyApi.ts'
import MarkerClusterGroup from 'react-leaflet-cluster'
import Typography from '../../../components/atoms/Typography.tsx'

const Recenter = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng])
  return null
}

export default function MapHome(): JSX.Element {
  const { userLocation } = useUserLocation()

  const agenciesMarkers = useGetAgenciesQuery({
    expanded: true,
  })

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
      scrollWheelZoom={false}
      className='w-full h-full rounded-[10px]'
    >
      <Recenter lat={userLocation[0]} lng={userLocation[1]} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MarkerClusterGroup chunkedLoading>
        {agenciesMarkers.data?.map((agency: any) => (
          <Marker
            key={`${Math.random()}-${agency.id}`}
            icon={myIcon}
            position={[agency.longitude, agency.latitude]}
          >
            <Popup className='customPopup'>
              <div className='h-full w-full'>
                {agenciesMarkers?.data.length && (
                  <figure className='w-[150px] h-[75px] bg-white rounded-[10px] flex flex-col items-center justify-center'>
                    <Typography
                      variant='h3'
                      className='text-center text-neutral-900 mb-2'
                    >
                      {agency.name}
                    </Typography>
                    <Typography
                      variant='h3'
                      className='text-center text-neutral-900'
                    >
                      {`${agency.way}, ${agency.city}, ${agency.zipcode}`}
                    </Typography>
                  </figure>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
