import HeartIcon from '../../../assets/icons/HeartIcon.svg'

export default function Heart({
  marginRight,
  marginLeft,
}: {
  marginRight?: boolean
  marginLeft?: boolean
}): JSX.Element {
  return (
    <>
      <img
        src={HeartIcon}
        className={`h-4 ${marginLeft ? 'ml-1' : ''} ${
          marginRight ? 'mr-1' : ''
        }`}
        alt='Heart Icon'
      />
    </>
  )
}
