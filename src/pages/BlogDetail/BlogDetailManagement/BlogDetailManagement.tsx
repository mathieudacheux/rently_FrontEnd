import { ArticleSerializerRead } from '../../../api/index.ts'
import HTMLReactParser from 'html-react-parser'

export default function BlogDetailManagement({
  articleData,
}: {
  articleData: ArticleSerializerRead
}): JSX.Element {
  const renderContent = (content: string) => {
    const description = content.replace(/\\/g, '')

    return <div className='w-full'>{HTMLReactParser(description)}</div>
  }

  return (
    <div className='flex flex-col w-full items-center p-0 md:p-4'>
      <div className='w-11/12 md:w-[750px] flex justify-center'>
        {renderContent(articleData?.content || '')}
      </div>
    </div>
  )
}
