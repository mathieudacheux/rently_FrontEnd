import { ArticleSerializerRead } from '../../../api/index.ts'
import ReactHTMLParser from 'react-html-parser'

export default function BlogDetailManagement({
  articleData,
}: {
  articleData: ArticleSerializerRead
}): JSX.Element {
  const renderContent = (content: string) => {
    const description = content.replace(/\\/g, '')

    return (
      <div>
        {...ReactHTMLParser(description, {
          transform: (node) => {
            if (node.name === 'img') {
              return (
                <img
                  className='w-full h-auto mb-4'
                  src={node.attribs.src}
                  alt={node.attribs.alt}
                />
              )
            } else if (node.name === 'h2') {
              return (
                <h1 className='text-2xl font-bold text-primary mb-4'>
                  {node.children[0].data}
                </h1>
              )
            } else if (node.name === 'h3') {
              return (
                <h2 className='text-xl font-bold text-neutral-900 my-2'>
                  {node.children[0].data}
                </h2>
              )
            } else if (node.name === 'h4') {
              return (
                <h3 className='text-lg font-bold text-neutral-900 my-2'>
                  {node.children[0].data}
                </h3>
              )
            } else if (node.name === 'p') {
              return (
                <p className='text-sm text-neutral-900'>
                  {node.children[0].data}
                </p>
              )
            }
          },
        })}
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full items-center p-0 md:p-4'>
      <div className='w-11/12 md:w-[750px] flex justify-center'>
        {renderContent(articleData?.content || '')}
      </div>
    </div>
  )
}
