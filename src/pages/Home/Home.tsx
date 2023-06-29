import ToggleLanguage from '../../components/atoms/Toggle/ToggleLanguage.tsx'
import Navbar from '../../components/organisms/Navbar.tsx'

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <ToggleLanguage />
    </>
  )
}
