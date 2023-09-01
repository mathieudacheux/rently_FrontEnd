import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyDetailsRightSide from './components/PropertyDetailsRightSide.tsx'
import PropertyDetailsLeftSide from './components/PropertyDetailsLeftSide.tsx'
import { useGetAllFolderImageQuery } from '../../../features/attachment/attachmentApi.ts'
import PropertyDetailsDesktopImages from './components/PropertyDetailsDesktopImages.tsx'
import PropertyDetailsMobileImages from './components/PropertyDetailsMobileImages.tsx'
import { useState } from 'react'

export default function PropertyDetailsDetailsManagement({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  const images = useGetAllFolderImageQuery({
    id: Number(property?.property_id),
  }).data

  const [selectedImage, setSelectedImage] = useState<number>(0)

  const openModal = (selectedImage: number) => {
    window.image_modal.showModal()
    setSelectedImage(selectedImage)
  }

  return (
    property && (
      <div className='w-11/12 md:w-[1200px] flex flex-col items-center'>
        {window.innerWidth > 768 ? (
          <PropertyDetailsDesktopImages
            property={property}
            images={images}
            openModal={openModal}
          />
        ) : (
          <PropertyDetailsMobileImages
            property={property}
            images={images}
            openModal={openModal}
          />
        )}
        <div className='md:w-11/12 flex flex-col md:flex-row pt-4'>
          <PropertyDetailsLeftSide property={property} />
          <PropertyDetailsRightSide property={property} />
        </div>

        <dialog id='image_modal' className='modal w-full h-full'>
          <form method='dialog' className='modal-box'>
            <img
              src={
                images?.length
                  ? `https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[selectedImage]}`
                  : ''
              }
              alt=''
              className='w-full h-full object-cover'
            />
            <button className='fixed right-5 top-2 w-[25px] h-[25px] bg-white text-black rounded-md'>
              ✕
            </button>
          </form>
        </dialog>
      </div>
    )
  )
}
