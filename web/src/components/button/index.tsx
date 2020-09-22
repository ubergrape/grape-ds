import React, { useRef } from 'react'
import { useTheme } from 'react-jss'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import useStyles from './styles'
import { Icon, IconTypes } from '../icon'

export type ButtonProps = {
  onPress?: () => void
  disabled?: boolean
  variant?: 'primary' | 'basic' | 'danger'
  appearance?: 'standard' | 'minimal'
  size?: 'regular' | 'small'
  icon?: IconTypes
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  children?: string
}

export const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme()
  const ref = useRef()
  const { disabled, icon, children, iconPosition, ariaLabel } = props
  const iconOnly = (children === undefined || children === '') && icon

  const { buttonProps, isPressed } = useButton(props, ref)

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
      size="small"
    />
  )

  return (
    <FocusRing focusRingClass={classes.focusRing} within>
      <button
        className={`${classes.button} ${isPressed ? `active` : ''}`}
        disabled={disabled}
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
  disabled: false,
  iconPosition: 'left',
  variant: 'basic',
  size: 'regular',
  appearance: 'standard',
}

export default Button
