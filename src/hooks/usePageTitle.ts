import { useContext } from 'react'
import {
  PageTitleContext,
  PageTitleContextType,
} from '../contexts/PageTitleProvider.tsx'

export const usePageTitle = (): PageTitleContextType => {
  const context = useContext(PageTitleContext)

  if (!context) {
    throw new Error(
      "usePageTitle doit être utilisé à l'intérieur de PageTitleProvider",
    )
  }

  return context
}
