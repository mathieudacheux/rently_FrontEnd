import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageTitleProvider } from './contexts/PageTitleProvider.tsx'
import './main.css'
import RouterElement from './routes/Router.tsx'
import './translations/i18n.ts'
import Title from './pages/Title/Title.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTitleProvider>
        <Title />
      </PageTitleProvider>
      <RouterElement />
    </BrowserRouter>
  </React.StrictMode>,
)
