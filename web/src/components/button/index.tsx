import React from 'react'
import { useTheme } from 'react-jss'
import { FocusRing } from '@react-aria/focus'

import useStyles from './styles'
import { Icon, IconTypes } from '../icon'

export type ButtonProps = {
  onClick: () => void
  disabled: boolean
  type: 'primary' | 'basic' | 'danger'
  style: 'standard' | 'minimal'
  size: 'regular' | 'small'
  icon?: IconTypes
  iconPosition?: 'left' | 'right'
  children?: string
}

export const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme()
  const { disabled, onClick, icon, children, iconPosition = 'left' } = props
  const iconOnly = (children === undefined || children === '') && icon

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
    <FocusRing focusRingClass={classes.focusRing}>
      <button
        className={classes.button}
        disabled={disabled}
        type="button"
        onClick={onClick}
        aria-label={children}
      >
        {iconPosition === 'left' && iconComponent}
        {children && <span>{children}</span>}
        {iconPosition === 'right' && iconComponent}
      </button>
    </FocusRing>
  )
}

export default Button
