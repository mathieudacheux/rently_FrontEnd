import { createContext, useState, useEffect } from 'react'
import { APP_TITLES } from '../routes/routes.ts'
import { useTranslation } from 'react-i18next'

export interface PageTitleContextType {
  pageTitle: string
  setPageTitle: (title: string) => void
}

const PageTitleContext = createContext<PageTitleContextType | undefined>(
  undefined,
)

function PageTitleProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { t } = useTranslation()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const updatePageTitle = () => {
      const currentPath = window.location.pathname

      const matchedPage = APP_TITLES.find((page) => page.path === currentPath)

      if (matchedPage) {
        setPageTitle(`${t(matchedPage.title)} - Rently`)
      }
    }

    updatePageTitle()

    window.addEventListener('popstate', updatePageTitle)

    return () => {
      window.removeEventListener('popstate', updatePageTitle)
    }
  }, [])

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  )
}

export { PageTitleContext, PageTitleProvider }
