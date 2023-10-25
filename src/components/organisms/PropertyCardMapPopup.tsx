import { PropertySerializerRead } from '../../api/index.ts'
import { useGetAllFolderImageQuery } from '../../features/attachment/attachmentApi.ts'

export default function PropertyCardMapPopup({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  const images = useGetAllFolderImageQuery({
    id: Number(property?.property_id),
  }).data

  return (
    <div
      id={String(property.property_id)}
      className='w-full h-[180px] relative'
    >
      <figure className='w-full h-full'>
        <img
          src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[0]}`}
          alt='Album'
          className='h-full w-full object-cover rounded-lg'
        />
      </figure>
    </div>
  )
}
