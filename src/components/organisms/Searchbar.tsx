import Search from '../atoms/icons/Search.tsx'
import FormikTextField from '../molecules/core/FormikTextField.tsx'

export default function Searchbar({ onClick }: { onClick: () => void }) {
  return (
    <div className='searchbar flex justify-between items-center w-6/12'>
      <div className='flex w-11/12'>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikTextField
            name='searchCity'
            textCenter
            disableShadows
            placeholder={'searchbar.city'}
            handleKeyDown={onClick}
          />
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikTextField
            name='searchBudget'
            textCenter
            disableShadows
            placeholder={'searchbar.budget'}
            handleKeyDown={onClick}
          />
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikTextField
            name='searchType'
            textCenter
            disableShadows
            placeholder={'searchbar.type'}
            handleKeyDown={onClick}
          />
        </div>
      </div>
      <div className='pl-4 w-1/12 flex justify-center' onClick={onClick}>
        <Search />
      </div>
    </div>
  )
}
