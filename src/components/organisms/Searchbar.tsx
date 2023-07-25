import Heart from '../atoms/icons/Heart.tsx'

export default function Searchbar() {
  return (
    <div className='searchbar flex justify-between items-center w-6/12 mt-3'>
      <div className='flex w-11/12'>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          Ville
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          Budget
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          Type
        </div>
      </div>
      <div className='pl-4 w-1/12 flex justify-center'>
        <Heart />
      </div>
    </div>
  )
}
