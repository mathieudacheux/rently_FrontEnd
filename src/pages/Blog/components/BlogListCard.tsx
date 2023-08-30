import Typography from '../../../components/atoms/Typography.tsx'
import { ArticleSerializerRead } from '../../../api/models/ArticleSerializerRead.ts'
import CardButton from '../../../components/atoms/CardButton.tsx'

export default function BlogListCard({
  article,
}: {
  article: ArticleSerializerRead
}): JSX.Element {
  const title =
    article.name === undefined ? '' : article.name.replace(/\\/g, ' ')

  return (
    <div className='blogcard w-11/12 mb-7 p-4 h-[230px] flex flex-row'>
      <img
        src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
        alt='blog'
        className='w-1/3 h-full object-cover rounded-[10px]'
      />
      <div className='w-2/3 h-full overflow-hidden pl-4 flex flex-col justify-between'>
        <Typography variant='h2' className='text-neutral-900'>
          {title}
        </Typography>
        <Typography variant='text' className='h-[100px]'>
          {article.content as string}
        </Typography>
        <CardButton text='home.readBlog' />
      </div>
    </div>
  )
}
