import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Tags from '../components/Tags.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useLazyGetArticleByFilterQuery } from '../../../features/article/articleApi.ts'
import { ArticleSerializerRead } from '../../../api/index.ts'
import BlogListCard from '../components/BlogListCard.tsx'

export default function BlogListManagement(): JSX.Element {
  const { t } = useTranslation()

  const [activeTag, setActiveTag] = useState<number | null>(null)

  const [triggerArticles, { data: triggerLists }] =
    useLazyGetArticleByFilterQuery({})

  useEffect(() => {
    if (activeTag === null) {
      triggerArticles({})
      return
    }
    triggerArticles({ tag_id: activeTag })
  }, [activeTag])

  const handleTagClick = (tagId: number | null) => {
    setActiveTag(tagId)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography
        variant='h1'
        className='text-center text-neutral-900 w-11/12 mb-7'
      >
        {t('blog.title')}
      </Typography>
      <Tags activeTag={activeTag} handleTagClick={handleTagClick} />
      <div className='w-full flex flex-col items-center'>
        {triggerLists ? (
          triggerLists?.map((article: ArticleSerializerRead) => (
            <BlogListCard key={article.article_id} article={article} />
          ))
        ) : (
          <Typography variant='text' className='mb-2'>
            {t('blog.noArticle')}
          </Typography>
        )}
      </div>
    </div>
  )
}
