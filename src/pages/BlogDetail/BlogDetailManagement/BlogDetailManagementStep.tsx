import BlogDetailManagement from './BlogDetailManagement.tsx'
import { useParams } from 'react-router-dom'
import { useGetArticleByIdQuery } from '../../../features/article/articleApi.ts'

export default function BlogDetailManagementStep(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const articleData = useGetArticleByIdQuery(Number(id))?.data

  return <BlogDetailManagement articleData={articleData} />
}
