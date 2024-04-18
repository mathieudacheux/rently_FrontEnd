import Chart from 'react-apexcharts'
import { useTranslation } from 'react-i18next'
import Typography from '../../../../components/atoms/Typography'
import { useGetFeesOwnerQuery } from '../../../../features/fees/feesApi'

export default function PropertiesSection() {
  const { t } = useTranslation()
  const user = JSON.parse(localStorage.getItem('user') as string)

  const ownerFees = useGetFeesOwnerQuery(user?.user_id as number)

  const MONTHS = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]

  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: MONTHS.map((month) => t(month)),
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '70%',
      },
    },
  }

  const series = [
    {
      name: 'Revenu Mensuel',
      data: ownerFees?.data ?? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: '#4A43EC',
    },
  ]
  return (
    <div className='md:pl-4 w-full'>
      <Typography variant='h2' className='text-neutral-900 mb-2'>
        {t('myAccount.myProperties')}
      </Typography>
      {ownerFees?.data ? (
        <div className='w-11/12 mt-4'>
          <Chart
            options={options}
            series={series}
            type='bar'
            width='900px'
            height='300px'
          />
        </div>
      ) : (
        <Typography variant='text' className='text-neutral-900 mb-2'>
          {t('myAccount.noProperties')}
        </Typography>
      )}
    </div>
  )
}
