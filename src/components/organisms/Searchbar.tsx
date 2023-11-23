import Search from '../atoms/icons/Search.tsx'
import FormikTextField from '../molecules/core/FormikTextField.tsx'
import FormikSelect from '../molecules/core/FormikSelect.tsx'
import { useTranslation } from 'react-i18next'
import { useGetPropertyTypesQuery } from '../../features/propertyType/propertyTypeApi.ts'

export default function Searchbar({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()

  const property_type = useGetPropertyTypesQuery({}).data || []

  return (
    <div className='searchbar flex justify-between items-center w-10/12 md:w-6/12 bg-white mb-3 md:mb-0'>
      <div className='flex w-11/12 items-center'>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikTextField
            name='searchCity'
            textCenter
            disableShadows
            placeholder={'searchbar.city'}
          />
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikTextField
            name='searchBudget'
            textCenter
            disableShadows
            placeholder={'searchbar.budget'}
          />
        </div>
        <div className='px-4 text-secondary text-center w-1/3 border-r-2 border-text-light'>
          <FormikSelect
            name='searchType'
            options={property_type}
            placeholder={t('searchbar.type')}
            noShadow
          />
        </div>
      </div>
      <div className='pl-4 w-1/12 flex justify-center' onClick={onClick}>
        <Search />
      </div>
    </div>
  )
}
