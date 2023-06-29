import { createBrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from './routes.ts'
import Home from '../pages/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    Component: Home,
  },
])

export { router }
