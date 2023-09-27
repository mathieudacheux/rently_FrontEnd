import BlogDetailManagement from './BlogDetailManagement.tsx'
import { useParams } from 'react-router-dom'
import { useGetArticleByIdQuery } from '../../../features/article/articleApi.ts'

export default function BlogDetailManagementStep(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  console.log('id', id)
  const articleData = useGetArticleByIdQuery(Number(id))?.data

  console.log('articleData', articleData)

  return <BlogDetailManagement articleData={articleData} />
}
