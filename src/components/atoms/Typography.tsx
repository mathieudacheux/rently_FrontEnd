import { useMemo } from 'react'
import { TypographyVariants } from '../../constants/constants.ts'

export default function Typography({
  children,
  variant,
  className = 'text-secondary',
  price,
  surface,
}: {
  children: string | number
  variant: TypographyVariants
  className?: string
  price?: boolean
  surface?: boolean
}): JSX.Element {
  let element: JSX.Element

  switch (variant) {
    case 'h1':
      element = (
        <h1 className={`h1 ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h1>
      )
      break
    case 'h2':
      element = (
        <h2 className={`h2 ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h2>
      )
      break
    case 'h2-primary':
      element = (
        <h2 className={`h2 ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h2>
      )
      break
    case 'h3':
      element = (
        <h3 className={`h3 ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </h3>
      )
      break
    case 'span':
      element = (
        <span className={`span ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </span>
      )
      break
    case 'text-light':
      element = (
        <p className={`textLight ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
    case 'tiny-text':
      element = (
        <p className={`tiny-text font-normal ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
    case 'cta':
      element = (
        <p className={`tiny-text font-normal text-primary ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
    default:
      element = (
        <p className={`text ${className}`}>
          {children}
          {price ? '€' : ''}
          {surface ? 'm²' : ''}
        </p>
      )
      break
  }

  return useMemo(() => element, [])
}
