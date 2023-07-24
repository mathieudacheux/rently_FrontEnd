import ToggleLanguage from '../../components/atoms/Toggle/ToggleLanguage.tsx'
import Navbar from '../../components/organisms/Navbar.tsx'
import { selectedPropertyId } from '../../features/property/propertySlice.ts'
import { useAppSelector } from '../../store/store.ts'

export default function Home(): JSX.Element {
  const selectedProperty = useAppSelector(selectedPropertyId)

  console.log(selectedProperty)
  return (
    <>
      <Navbar />
      <ToggleLanguage />
    </>
  )
}
