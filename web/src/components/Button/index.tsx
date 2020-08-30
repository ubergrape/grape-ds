import React from 'react'
import { useTheme } from 'react-jss'

import useStyles from './styles'
import { Icon, IconTypes } from '../icon'

export type ButtonProps = {
  onClick: () => void
  disabled: boolean
  color: 'primary' | 'basic' | 'danger'
  variant: 'standard' | 'minimal'
  size: 'regular' | 'small'
  icon?: IconTypes
  iconPosition?: 'left' | 'right'
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
      aria-label="Label"
      size="small"
    />
  )
  console.log({ children })

  return (
    <button
      className={classes.button}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {iconPosition === 'left' && iconComponent}
      {children && <span>{children}</span>}
      {iconPosition === 'right' && iconComponent}
    </button>
  )
}

export default Button
