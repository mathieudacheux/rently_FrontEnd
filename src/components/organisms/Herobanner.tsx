import Searchbar from './Searchbar.tsx'
import HerobannerImage from '../../assets/images/herobanner.png'

export default function Herobanner({
  onClick,
}: {
  onClick: () => void
}): JSX.Element {
  return (
    <div
      className='w-full h-[calc(80vh-75px)] md:h-[calc(100vh-75px)] flex justify-center items-center'
      style={{
        // add filter to darken the image
        background: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${HerobannerImage})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Searchbar onClick={onClick} />
    </div>
  )
}
