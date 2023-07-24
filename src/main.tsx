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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PageTitleProvider>
          <Title />
        </PageTitleProvider>
        <RouterElement />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
