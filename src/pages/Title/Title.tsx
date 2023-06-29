import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { usePageTitle } from '../../hooks/usePageTitle.ts'

export default function Title(): JSX.Element {
  const { pageTitle } = usePageTitle()

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  )
}
