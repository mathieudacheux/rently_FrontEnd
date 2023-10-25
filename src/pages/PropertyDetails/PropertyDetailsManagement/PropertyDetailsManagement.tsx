import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyDetailsRightSide from './components/PropertyDetailsRightSide.tsx'
import PropertyDetailsLeftSide from './components/PropertyDetailsLeftSide.tsx'
import { useGetAllFolderImageQuery } from '../../../features/attachment/attachmentApi.ts'
import PropertyDetailsDesktopImages from './components/PropertyDetailsDesktopImages.tsx'
import PropertyDetailsMobileImages from './components/PropertyDetailsMobileImages.tsx'
import { useState } from 'react'
import Arrow from '../../../components/atoms/icons/Arrow.tsx'

export default function PropertyDetailsDetailsManagement({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  const images = useGetAllFolderImageQuery({
    id: Number(property?.property_id || null),
  }).data

  const [selectedImage, setSelectedImage] = useState<number>(0)

  const openModal = (selectedImage: number) => {
    window.image_modal.showModal()
    setSelectedImage(selectedImage)
  }

  return (
    property && (
      <div className='w-11/12 md:w-full md:max-w-[1200px] flex flex-col items-center'>
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
        <div className='flex flex-col md:flex-row pt-4'>
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
            <button className='fixed right-5 top-5 w-[35px] h-[35px] bg-white rounded-md text-primary font-extrabold'>
              ✕
            </button>
            <div
              className='fixed cursor-pointer -rotate-90 right-5 top-[50%] w-[35px] h-[35px] text-xl flex justify-center items-center bg-white text-black rounded-md'
              onClick={() =>
                setSelectedImage(
                  selectedImage === images.length - 1 ? 0 : selectedImage + 1,
                )
              }
            >
              <Arrow />
            </div>
            <div
              className='fixed cursor-pointer rotate-90 left-5 top-[50%] w-[35px] h-[35px] text-xl flex justify-center items-center bg-white text-black rounded-md'
              onClick={() =>
                setSelectedImage(
                  selectedImage === 0 ? images.length - 1 : selectedImage - 1,
                )
              }
            >
              <Arrow />
            </div>
          </form>
        </dialog>
      </div>
    )
  )
}
