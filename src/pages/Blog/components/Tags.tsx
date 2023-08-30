import { useGetTagsQuery } from '../../../features/tag/tagApi.ts'
import { TagSerializerRead } from '../../../api/index.ts'

export default function Tags({
  activeTag,
  handleTagClick,
}: {
  activeTag: number | null
  handleTagClick: (tagId: number | null) => void
}): JSX.Element {
  const tagsData: TagSerializerRead[] = useGetTagsQuery({})?.data

  return (
    <div className='flex w-11/12 md:w-full flex-row flex-wrap justify-center md:px-4 mb-7'>
      {tagsData?.map((tag, index: number) => (
        <div
          className={`w-[115px] bg-neutral-100 rounded-[10px] p-2 mr-4 mb-4 md:mb-0
          hover:bg-primary cursor-pointer transition-all duration-300
          hover:text-neutral-100 text-center
          ${
            activeTag === tag.tag_id
              ? 'bg-primary text-neutral-100'
              : 'bg-neutral-100 text-neutral-500'
          }
          `}
          key={index}
          onClick={() => {
            const isEquals = activeTag === tag.tag_id
            handleTagClick(isEquals ? null : (tag.tag_id as number))
          }}
        >
          {tag.name}
        </div>
      ))}
    </div>
  )
}
