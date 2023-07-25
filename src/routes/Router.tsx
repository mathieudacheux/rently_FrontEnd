import { APP_ROUTES } from './routes.ts'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Playground from '../pages/Playground/Playground.tsx'
import Properties from '../pages/Properties/Properties.tsx'

export default function RouterElement(): JSX.Element {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
      <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
      <Route path={APP_ROUTES.PLAYGROUND} element={<Playground />} />
    </Routes>
  )
}
