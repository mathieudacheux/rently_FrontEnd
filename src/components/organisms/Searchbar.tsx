import Search from '../atoms/icons/Search.tsx'
import FormikTextField from '../molecules/core/FormikTextField.tsx'
import FormikSelect from '../molecules/core/FormikSelect.tsx'
import { useTranslation } from 'react-i18next'
import { useGetPropertyTypesQuery } from '../../features/propertyType/propertyTypeApi.ts'

export default function Searchbar({
  onClick,
  propertyList = false,
}: Readonly<{
  onClick: () => void
  propertyList?: boolean
}>) {
  const { t } = useTranslation()

  const { data: propertyType } = useGetPropertyTypesQuery({})

  const optionsPropertyType: { label: string; value: number }[] =
    propertyType?.map((item: any) => ({
      label: item.label,
      value: item.property_type_id,
    })) || []

  const propertyListCSS = propertyList ? 'md:w-full' : 'md:w-1/3'

  return (
    <div className='searchbar flex justify-between items-center w-11/12 md:w-8/12 bg-white mb-3 md:mb-0'>
      <div className='flex flex-wrap flex-row w-full items-center'>
        <div
          className={`py-2 md:px-4 md:py-0 w-full md:w-1/3 text-secondary text-center ${propertyListCSS} border-b-2 md:border-b-0  md:border-r-2`}
        >
          <FormikTextField
            name='searchCity'
            textCenter
            disableShadows
            placeholder={'searchbar.city'}
          />
        </div>
        {!propertyList && (
          <>
            <div className='py-2 md:px-4 md:py-0 text-secondary text-center w-full md:w-1/3 border-b-2 md:border-r-2 md:border-b-0 border-text-light'>
              <FormikTextField
                name='searchBudget'
                textCenter
                disableShadows
                placeholder={'searchbar.budget'}
              />
            </div>
            <div className='py-2 md:px-4 md:py-0 text-secondary text-center flex justify-center w-full md:w-1/3 md:border-r-2 border-text-light'>
              <FormikSelect
                name='searchType'
                options={optionsPropertyType}
                placeholder={t('searchbar.type')}
                noShadow
              />
            </div>
          </>
        )}
      </div>
      <div
        className='pl-4 w-3/12 md:w-1/12 flex justify-center'
        onClick={onClick}
      >
        <Search />
      </div>
    </div>
  )
}
