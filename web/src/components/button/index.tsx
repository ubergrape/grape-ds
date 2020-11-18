import React, { useRef } from 'react'
import { useTheme } from 'react-jss'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'
import clsx from 'clsx'

import useStyles from './styles'
import { Icon, IconTypes } from '../icon'

export type ButtonProps = {
  onClick?: () => void
  isDisabled?: boolean
  variant?: 'primary' | 'basic' | 'danger'
  appearance?: 'filled' | 'minimal'
  size?: 'small' | 'regular' | 'large'
  icon?: IconTypes
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  children?: string
  className?: string
}

export const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme()
  const ref = useRef()
  const {
    isDisabled,
    size,
    icon,
    children,
    iconPosition,
    ariaLabel,
    className,
  } = props
  const { onClick, ...rest } = props
  const iconOnly = (children === undefined || children === '') && icon

  const { buttonProps, isPressed } = useButton(
    { ...rest, onPress: onClick, isDisabled },
    ref,
  )

  const classes = useStyles({
    ...props,
    theme,
    iconOnly,
  })

  const iconComponent = icon && (
    <Icon
      name={icon}
      {...(!iconOnly && {
        style: iconPosition === 'left' ? { marginRight: 5 } : { marginLeft: 5 },
      })}
      aria-hidden
      focusable={false}
      size={size === 'large' ? 'medium' : 'small'}
    />
  )

  return (
    <FocusRing focusRingClass={classes.focusRing} within>
      <button
        className={clsx(
          classes.button,
          isPressed && !isDisabled && 'active',
          className,
        )}
        type="button"
        ref={ref}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
        {...buttonProps}
      >
        {iconPosition === 'left' && iconComponent}
        {children && <span>{children}</span>}
        {iconPosition === 'right' && iconComponent}
      </button>
    </FocusRing>
  )
}

Button.defaultProps = {
  isDisabled: false,
  iconPosition: 'left',
  variant: 'basic',
  size: 'regular',
  appearance: 'filled',
}

export default Button
