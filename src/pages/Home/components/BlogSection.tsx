import BlogCard from '../../../components/organisms/BlogCard.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/atoms/Button.tsx'
import { APP_ROUTES } from '../../../routes/routes.ts'
import { useNavigate } from 'react-router-dom'
import { useGetArticlesQuery } from '../../../features/article/articleApi.ts'
import { ArticleSerializerRead } from '../../../api/index.ts'

export default function AgencySection(): JSX.Element {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const articlesData = useGetArticlesQuery({
    home: true,
  })?.data

  const blogComponents = articlesData?.map(
    (article: ArticleSerializerRead, index: number) => (
      <BlogCard
        key={article.article_id}
        title={
          article.name === undefined ? '' : article.name.replace(/\\/g, ' ')
        }
        id={article.article_id || 0}
        description={
          article.content === undefined
            ? ''
            : article.content.replace(/\\/g, ' ')
        }
        full={index === 2}
      />
    ),
  )

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography
        variant='h2'
        className='text-center text-neutral-900 w-11/12 pt-7'
      >
        {t('home.titleBlog')}
      </Typography>
      <div
        className='w-11/12 md:max-w-[1200px] flex flex-col-reverse items-center md:flex-row
        md:justify-between pt-7'
      >
        <div className='flex flex-col items-center md:items-start w-full md:1/2'>
          <div className='h-[390px] w-full md:w-[calc(100%-30px)] flex justify-center'>
            {blogComponents?.[0]}
          </div>
          <div className='h-[390px] w-full md:w-[calc(100%-30px)] flex justify-center mt-[30px]'>
            {blogComponents?.[1]}
          </div>
        </div>
        <div className='h-[810px] w-full md:max-w-[50%] flex justify-center mb-[30px] md:mb-0'>
          {blogComponents?.[2]}
        </div>
      </div>
      <div className='w-full flex justify-center pt-7'>
        <Button
          text={t('home.seeBlog')}
          onClick={() => navigate(APP_ROUTES.BLOG)}
        />
      </div>
    </div>
  )
}
