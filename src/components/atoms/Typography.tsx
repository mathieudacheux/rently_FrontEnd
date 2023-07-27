import { useMemo } from 'react'
import {
  TypographyVariants,
  TypographyColors,
} from '../../constants/constants.ts'

export default function Typography({
  children,
  variant,
  className = '',
  color = 'secondary',
  price,
  surface,
}: {
  children: string | number
  variant: TypographyVariants
  className?: string
  color?: TypographyColors
  price?: boolean
  surface?: boolean
}): JSX.Element {
  let element: JSX.Element

  switch (variant) {
    case 'h1':
      element = (
        <h1 className={`h1 text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h1>
      )
      break
    case 'h2':
      element = (
        <h2 className={`h2 text-secondary ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h2>
      )
      break
    case 'h2-primary':
      element = (
        <h2 className={`h2 text-primary ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h2>
      )
      break
    case 'h3':
      element = (
        <h3 className={`h3 text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h3>
      )
      break
    case 'span':
      element = (
        <span className={`span text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </span>
      )
      break
    case 'text-light':
      element = (
        <p className={`text-light text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
    case 'tiny-text':
      element = (
        <p className={`tiny-text font-normal text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
    default:
      element = (
        <p className={`text text-${color} ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
  }

  return useMemo(() => element, [])
}
