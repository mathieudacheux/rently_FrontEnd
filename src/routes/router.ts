import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([{ path: '/', action: () => import('../App.tsx') }])
