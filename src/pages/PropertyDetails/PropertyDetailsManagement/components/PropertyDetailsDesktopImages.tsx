import { PropertySerializerRead } from '../../../../api/index.ts'

export default function PropertyDetailsDesktopImages({
  property,
  images,
  openModal,
}: {
  property: PropertySerializerRead
  images: string[]
  openModal: (selectedImage: number) => void
}) {
  return (
    images && (
      <div className='flex h-[250px] md:h-[500px]'>
        <div className='w-1/2 h-full p-1 rounded-md'>
          <img
            src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[0]}`}
            alt='property'
            key={`${property.property_id}-${images[0]}`}
            className='property-image h-full w-full rounded-md'
            onClick={() => {
              openModal(0)
            }}
          />
        </div>
        <div className='w-1/2 h-full'>
          <div className='h-1/2 w-full flex'>
            <div className='p-1 rounded-md'>
              <img
                src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[1]}`}
                alt='property'
                key={`${property.property_id}-${images[1]}`}
                className='property-image h-full w-full rounded-md'
                onClick={() => {
                  openModal(1)
                }}
              />
            </div>
            <div className='p-1 rounded-md'>
              <img
                src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[2]}`}
                alt='property'
                key={`${property.property_id}-${images[2]}`}
                className='property-image h-full w-full rounded-md'
                onClick={() => {
                  openModal(2)
                }}
              />
            </div>
          </div>
          <div className='w-full h-1/2 p-1 rounded-md'>
            <img
              src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[3]}`}
              alt='property'
              key={`${property.property_id}-${images[3]}`}
              className='property-image h-full w-full rounded-md'
              onClick={() => {
                openModal(3)
              }}
            />
          </div>
        </div>
      </div>
    )
  )
}
