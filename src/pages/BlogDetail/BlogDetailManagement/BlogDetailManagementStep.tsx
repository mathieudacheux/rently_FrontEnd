import BlogDetailManagement from './BlogDetailManagement.tsx'
import { useParams } from 'react-router-dom'
import { useGetArticleByIdQuery } from '../../../features/article/articleApi.ts'
import { useAppSelector } from '../../../store/store.ts'
import { selectedArticle } from '../../../features/article/articleSlice.ts'

export default function BlogDetailManagementStep(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const articleSelected = useAppSelector(selectedArticle)

  const articleData =
    articleSelected === null
      ? useGetArticleByIdQuery(Number(id))?.data
      : articleSelected

  return <BlogDetailManagement articleData={articleData} />
}
