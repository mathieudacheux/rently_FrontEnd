import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageTitleProvider } from './contexts/PageTitleProvider.tsx'
import './main.css'
import RouterElement from './routes/Router.tsx'
import './translations/i18n.ts'
import Title from './pages/Title/Title.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import Navbar from './components/organisms/Navbar.tsx'
import { UserLocationProvider } from './contexts/UserLocationProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserLocationProvider>
          <Navbar />
          <PageTitleProvider>
            <Title />
          </PageTitleProvider>
          <RouterElement />
        </UserLocationProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
