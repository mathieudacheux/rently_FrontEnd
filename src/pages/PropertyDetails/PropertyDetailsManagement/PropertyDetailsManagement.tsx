import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyDetailsRightSide from './components/PropertyDetailsRightSide.tsx'
import PropertyDetailsLeftSide from './components/PropertyDetailsLeftSide.tsx'
import { useGetAllFolderImageQuery } from '../../../features/attachment/attachmentApi.ts'

export default function PropertyDetailsDetailsManagement({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  const images = property?.property_id
    ? useGetAllFolderImageQuery({ id: property?.property_id }).data
    : []

  return (
    property && (
      <div className='md:w-[1200px] flex flex-col items-center'>
        <div className='w-11/12 flex justify-center'>
          {images && (
            <div className='flex h-[250px] md:h-[500px]'>
              <div className='w-1/2 h-full p-1 rounded-md'>
                <img
                  src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[0]}`}
                  alt='property'
                  key={`${property.property_id}-${images[0]}`}
                  className='object-cover h-full w-full rounded-md'
                />
              </div>
              <div className='w-1/2 h-full'>
                <div className='h-1/2 w-full flex'>
                  <div className='p-1 rounded-md'>
                    <img
                      src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[1]}`}
                      alt='property'
                      key={`${property.property_id}-${images[1]}`}
                      className='object-cover h-full w-full rounded-md'
                    />
                  </div>
                  <div className='p-1 rounded-md'>
                    <img
                      src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[2]}`}
                      alt='property'
                      key={`${property.property_id}-${images[2]}`}
                      className='object-cover h-full w-full rounded-md'
                    />
                  </div>
                </div>
                <div className='w-full h-1/2 p-1 rounded-md'>
                  <img
                    src={`https://back-rently.mathieudacheux.fr/public/img/property/${property?.property_id}/${images[3]}`}
                    alt='property'
                    key={`${property.property_id}-${images[3]}`}
                    className='object-cover h-full w-full rounded-md'
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='md:w-11/12 flex flex-col md:flex-row pt-4'>
          <PropertyDetailsLeftSide property={property} />
          <PropertyDetailsRightSide property={property} />
        </div>
      </div>
    )
  )
}
