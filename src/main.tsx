import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PageTitleProvider } from './contexts/PageTitleProvider.tsx'
import { router } from './routes/router.ts'
import './main.css'
import './translations/i18n.ts'
import Title from './pages/Title/Title.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageTitleProvider>
      <Title />
      <RouterProvider router={router} />
    </PageTitleProvider>
  </React.StrictMode>,
)
