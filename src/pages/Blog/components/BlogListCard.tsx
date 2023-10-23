import Typography from '../../../components/atoms/Typography.tsx'
import { ArticleSerializerRead } from '../../../api/models/ArticleSerializerRead.ts'
import CardButton from '../../../components/atoms/CardButton.tsx'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { useAppDispatch } from '../../../store/store.ts'
import { setSelectedArticle } from '../../../features/article/articleSlice.ts'

export default function BlogListCard({
  article,
}: {
  article: ArticleSerializerRead
}): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const title =
    article.name === undefined ? '' : article.name.replace(/\\/g, ' ')

  const description =
    article.content === undefined
      ? ''
      : article.content
          .replace(/\\/g, '')
          .replace(/<[^>]*>/g, '')
          .replace(title, '')

  const navigateToArticle = () => {
    dispatch(setSelectedArticle({ selectedArticle: article }))
    navigate(`${APP_ROUTES.BLOG_DETAIL}/${article.article_id}`)
  }

  return (
    <div className='blogcard w-11/12 mb-7 p-4 h-[350px] md:h-[230px] flex flex-col md:flex-row'>
      <img
        src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
        alt='blog'
        className='w-full md:w-1/3 h-[100px] md:h-full object-cover rounded-[10px] mb-2 md:mb-0'
      />
      <div className='w-full md:w-2/3 h-full overflow-hidden pl-0 md:pl-4 flex flex-col justify-between'>
        <Typography variant='h2' className='text-neutral-900'>
          {title}
        </Typography>
        <Typography
          variant='text'
          className='h-[80px] text-neutral-700 overflow-hidden'
        >
          {description}
        </Typography>
        <CardButton text='home.readBlog' onClick={navigateToArticle} />
      </div>
    </div>
  )
}
