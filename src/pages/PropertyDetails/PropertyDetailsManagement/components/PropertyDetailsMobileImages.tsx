import { PropertySerializerRead } from '../../../../api/index.ts'

export default function PropertyDetailsMobileImages({
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
      <div className='carousel'>
        {images.map((image, index: number) => (
          <div
            className='carousel-item relative w-full'
            key={`${property.property_id}-${image}`}
          >
            <img
              src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${image}`}
              alt='property'
              className='property-image h-full w-full rounded-md'
              onClick={() => {
                openModal(index)
              }}
            />
          </div>
        ))}
      </div>
    )
  )
}
