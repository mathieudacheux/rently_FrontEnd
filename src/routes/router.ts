import { createBrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from './routes.ts'
import Home from '../pages/Home/Home.tsx'
import ToggleLanguage from '../components/atoms/ToggleLanguage.tsx'

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    Component: Home,
  },
  {
    path: APP_ROUTES.LOGIN,
    Component: ToggleLanguage,
  },
])

export { router }
