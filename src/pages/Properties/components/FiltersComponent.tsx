import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormikSelect from '../../../components/molecules/core/FormikSelect.tsx'
import FormikTextField from '../../../components/molecules/core/FormikTextField.tsx'
import { useGetPropertyTypesQuery } from '../../../features/propertyType/propertyTypeApi.ts'
import Filters from '../../../components/atoms/icons/Filters.tsx'
import {
  dpeList,
  numberList,
  surfaceList,
  yearList,
} from '../constants/constants.ts'
import FormikCheckbox from '../../../components/molecules/core/FormikCheckbox.tsx'

export default function FiltersComponent({ open }: { open: boolean }) {
  const { t } = useTranslation()

  const property_type = useGetPropertyTypesQuery({}).data || []

  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  const expandFilters = () => {
    setFiltersOpen(!filtersOpen)
  }

  return (
    <div
      className={`w-full flex items-center flex-col bg-white rounded-md ${
        open ? 'h-auto' : 'h-0 hidden'
      }`}
    >
      <div className='filterContainer flex justify-between w-9/12 flex-wrap'>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='property_type'
            options={property_type}
            placeholder={t('properties.propertyType')}
            label={t('properties.propertyType')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='rooms_number'
            options={numberList}
            placeholder={t('properties.roomsNumber')}
            label={t('properties.roomsNumber')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikTextField
            name='price'
            placeholder={t('properties.price')}
            label={t('properties.price')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikTextField
            name='surface'
            placeholder={t('properties.surface')}
            label={t('properties.surface')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='bedrooms'
            options={numberList}
            placeholder={t('properties.bedroomNumber')}
            label={t('properties.bedroomNumber')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='bathrooms'
            options={numberList}
            placeholder={t('properties.bathroomNumber')}
            label={t('properties.bathroomNumber')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='toilets'
            options={numberList}
            placeholder={t('properties.toiletNumber')}
            label={t('properties.toiletNumber')}
          />
        </div>
        <div className='w-full md:w-[22%] my-3'>
          <FormikSelect
            name='kitchen'
            options={numberList}
            placeholder={t('properties.kitchenNumber')}
            label={t('properties.kitchenNumber')}
          />
        </div>
        <div
          className='w-full flex justify-end items-center my-3 text-neutral-300 cursor-pointer'
          onClick={() => expandFilters()}
        >
          <Filters marginRight />
          {t('properties.moreFilters')}
        </div>
        <div
          className={`w-full md:w-[31%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikSelect
            name='build_year'
            options={yearList}
            placeholder={t('properties.buildYear')}
            label={t('properties.buildYear')}
          />
        </div>
        <div
          className={`w-full md:w-[31%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikSelect
            name='dpe'
            options={dpeList}
            placeholder={t('properties.dpe')}
            label={t('properties.dpe')}
          />
        </div>
        <div
          className={`w-full md:w-[31%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikSelect
            name='land_size'
            options={surfaceList}
            placeholder={t('properties.landSizeLabel')}
            label={t('properties.landSizeLabel')}
          />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='elevator' label='properties.elevator' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='terace' label='properties.terace' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='balcony' label='properties.balcony' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='cellar' label='properties.cellar' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='parking' label='properties.parking' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='garden' label='properties.garden' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='garage' label='properties.garage' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox
            name='swimming_pool'
            label='properties.swimmingPool'
          />
        </div>
        <div
          className={`w-full md:w-[13%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='keeper' label='properties.keeper' />
        </div>
        <div
          className={`w-full md:w-[15%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='fiber' label='properties.fiber' />
        </div>
        <div
          className={`w-full md:w-[12%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='duplex' label='properties.duplex' />
        </div>
        <div
          className={`w-full md:w-[15%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='ground_floor' label='properties.groundFloor' />
        </div>
        <div
          className={`w-full md:w-[15%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='last_floor' label='properties.lastFloor' />
        </div>
        <div
          className={`w-full md:w-[11%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='life_annuity' label='properties.lifeAnnuity' />
        </div>
        <div
          className={`w-full md:w-[15%] my-3 ${filtersOpen ? '' : 'hidden'}`}
        >
          <FormikCheckbox name='work_done' label='properties.workDone' />
        </div>
      </div>
    </div>
  )
}
