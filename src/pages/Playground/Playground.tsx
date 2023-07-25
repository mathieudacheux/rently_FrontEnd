import Typography from '../../components/atoms/Typography.tsx'
import PropertyCard from '../../components/organisms/PropertyCard.tsx'

export default function Playground(): JSX.Element {
  return (
    <div className='flex-col items-center text-center'>
      <Typography variant='h2' color='primary'>
        Properties list with map opened
      </Typography>
      <div className='flex justify-center w-12/12 my-4'>
        <PropertyCard />
      </div>
      <Typography variant='h2' color='primary'>
        Properties list
      </Typography>
      <div className='flex justify-evenly flex-wrap gap-2 my-4'>
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
        <PropertyCard mapOpened />
      </div>
    </div>
  )
}
