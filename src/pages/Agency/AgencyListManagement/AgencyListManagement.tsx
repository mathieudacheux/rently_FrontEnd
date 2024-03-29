import BlogCard from '../../../components/organisms/BlogCard.tsx'
import Typography from '../../../components/atoms/Typography.tsx'
import { useGetAgenciesQuery } from '../../../features/agency/agencyApi.ts'
import { useTranslation } from 'react-i18next'
import { AgencySerializerRead } from '../../../api/index.ts'

export default function AgencyListManagement(): JSX.Element {
  const { t } = useTranslation()
  const { data: agencies } = useGetAgenciesQuery({})

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-11/12 flex justify-center items-center mb-7'>
        <Typography variant='h1'>{t('agency.home')}</Typography>
      </div>
      <div className='w-11/12 flex flex-col md:flex-row md:flex-wrap items-center justify-start md:justify-center gap-5 md:gap-10'>
        {agencies?.map((agency: AgencySerializerRead) => (
          <div
            key={agency.agency_id}
            className='h-[390px] w-full md:w-[calc(390px)] flex justify-center'
          >
            <BlogCard
              id={agency?.agency_id ?? 0}
              title={agency?.name ?? ''}
              description=''
              buttonTitle='home.readAgency'
              agency
            />
          </div>
        ))}
      </div>
    </div>
  )
}
