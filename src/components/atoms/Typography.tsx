import {
  TypographyVariants,
  TypographyColors,
} from '../../constants/constants.ts'

export default function Typography({
  children,
  variant,
  color,
}: {
  children: string
  variant: TypographyVariants
  color: TypographyColors
}): JSX.Element {
  console.log(color)

  let element: JSX.Element

  switch (variant) {
    case 'h1':
      element = <h1 className={`h1 text-${color}`}>{children}</h1>
      break
    case 'h2':
      element = <h2 className={`h2 text-${color}`}>{children}</h2>
      break
    case 'h3':
      element = <h3 className={`h3 text-${color}`}>{children}</h3>
      break
    case 'span':
      element = <span className={`span text-${color}`}>{children}</span>
      break
    case 'text-light':
      element = <p className={`p-light text-${color}`}>{children}</p>
      break
    default:
      element = <p className={`p text-${color}`}>{children}</p>
      break
  }

  return element
}
