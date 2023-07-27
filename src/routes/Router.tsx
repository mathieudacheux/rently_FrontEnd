import { APP_ROUTES } from './routes.ts'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Playground from '../pages/Playground/Playground.tsx'
import PropertiesStep from '../pages/Properties/PropertiesStep.tsx'

export default function RouterElement(): JSX.Element {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
      <Route path={APP_ROUTES.PROPERTIES} element={<PropertiesStep />} />
      <Route path={APP_ROUTES.PLAYGROUND} element={<Playground />} />
    </Routes>
  )
}
