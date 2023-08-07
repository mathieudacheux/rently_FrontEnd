import Herobanner from '../../components/organisms/Herobanner.tsx'
import { FormikProvider } from 'formik'
import useHomeFormik from './hooks/useHomeFormik.ts'
import { useAppDispatch } from '../../store/store.ts'
import { setSearchFilter } from '../../features/property/propertySlice.ts'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../routes/routes.ts'
import BestProperties from './components/BestProperties.tsx'

export default function Home(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { homeFormik } = useHomeFormik()

  const navigateToProperties = async () => {
    await dispatch(
      setSearchFilter({
        searchFilter: {
          searchBudget: homeFormik.values.searchBudget,
          searchCity: homeFormik.values.searchCity,
          searchType: homeFormik.values.searchType,
        },
      }),
    )
    navigate(APP_ROUTES.PROPERTIES)
  }

  return (
    <FormikProvider value={homeFormik}>
      <Herobanner onClick={navigateToProperties} />
      <BestProperties />
    </FormikProvider>
  )
}
