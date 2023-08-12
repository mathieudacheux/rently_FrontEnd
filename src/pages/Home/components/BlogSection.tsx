import BlogCard from '../../../components/organisms/BlogCard.tsx'
export default function BlogSection(): JSX.Element {
  return (
    <div className='w-full flex justify-center pt-7'>
      <div className='w-11/12 md:max-w-[1200px] md:w-11/12 grid grid-cols-2 grid-rows-2'>
        <div className='h-[390px]'>
          <BlogCard
            title='blogCard.title'
            link='blogCard.link'
            description='blogCard.description'
          />
        </div>
        <div className='col-start-1 row-start-2 h-[390px]'>
          <BlogCard
            title='blogCard.title'
            link='blogCard.link'
            description='blogCard.description'
          />
        </div>
        <div className='row-span-2 col-start-2 row-start-1'>
          <BlogCard
            title='blogCard.title'
            link='blogCard.link'
            description='blogCard.description'
          />
        </div>
      </div>
    </div>
  )
}
