import { PropertySerializerRead } from '../../api/index.ts'

export default function PropertyCardMapPopup({
  property,
}: {
  property: PropertySerializerRead
}): JSX.Element {
  return (
    <div
      id={String(property.property_id)}
      className='w-full h-[180px] relative'
    >
      <figure className='w-full h-full'>
        <img
          src='https://s3-alpha-sig.figma.com/img/ebfd/d8cc/7eb42cf9d865b262fe2556f782aad1ea?Expires=1691366400&Signature=U7hzI5kJwalGftk9~-EKZxHwMmPvR~Km4pZ2TCTJuPsNbqKhLEDDwk3633LxbBC2aG6J1rGr2pWczCJlL7O4YMxwcoN8ym9-xJyRJmBlV3KZAg3FW84d4KxiJTZRXEwsOzafyLATediX4WVNfyqEHYU0m9c-~9BtIfPZepLeHWaNGPDfyqXvxpSnOjkrYMLYbTXEF2L301pO4S02wAdRgp~0Y8rGUB6O9PkRcco5tZVzt4wYeHePcvS~~UxvpewkQzgB349vGHn7BrxoOHacl9KJxflVkxaX1LYXus1LIkt9C~tm0tyWpn5d-zNcGkOPPbjUbWwemyppJHLc-GwfOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='Album'
          className='h-full w-full object-cover rounded-lg'
        />
      </figure>
    </div>
  )
}
