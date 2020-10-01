/* eslint-disable import/no-unresolved */
import React from 'react'
import { DOMProps } from '@react-types/shared'
import * as icons from '../../icons'

// type iconsVariants = keyof typeof icons
type IconSize = 'small' | 'medium' | 'large'

export type IconTypes = 'arrowLeft' | 'close' | 'people' | 'person'
export type GenericIconProps = Omit<DOMProps, 'name'> & {
  name: IconTypes
  size?: IconSize
  color?: string
  ariaLabel?: string
  ariaHidden?: boolean
  focusable?: boolean
}

const getFromSize = (name: string, size: IconSize) => {
  switch (size) {
    case 'small':
      return icons[`${name}16`]
    case 'medium':
      return icons[`${name}20`]
    case 'large':
      return icons[`${name}24`]
    default:
      return null
  }
}

export const Icon: React.FC<GenericIconProps> = ({
  name,
  size,
  color,
  ariaLabel,
  ariaHidden,
  ...rest
}) => {
  const IconComponent = getFromSize(name, size)
  return (
    <IconComponent
      style={{ color }}
      {...rest}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? false : ariaHidden}
    />
  )
}

Icon.defaultProps = {
  ariaHidden: true,
  size: 'large',
}
