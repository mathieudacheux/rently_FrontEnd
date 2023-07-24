import ToggleLanguage from '../../components/atoms/Toggle/ToggleLanguage.tsx'
import Navbar from '../../components/organisms/Navbar.tsx'
import PropertyCard from '../../components/organisms/PropertyCard.tsx'

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <ToggleLanguage />
      <PropertyCard />
    </>
  )
}
