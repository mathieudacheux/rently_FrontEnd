import Navbar from '../../components/organisms/Navbar.tsx'
import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import Searchbar from '../../components/organisms/Searchbar.tsx'

export default function Properties() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <Searchbar />
      </div>
      <div className='flex justify-evenly flex-wrap gap-6 my-4'>
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
      </div>
    </>
  )
}
