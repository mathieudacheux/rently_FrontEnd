import BlogDetailManagement from './BlogDetailManagement.tsx'
import { useLocation, useParams } from 'react-router-dom'

export default function BlogDetailManagementStep(): JSX.Element {
  const { title } = useParams<{ title: string }>()
  console.log(title)

  return <BlogDetailManagement />
}
