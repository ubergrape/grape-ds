import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'
import clsx from 'clsx'

import { Icon, IconTypes } from '../icon'
import { Text } from '../typography'
import { getTextSize, testify } from '../../utils'

import { useFocusStyle } from '../../styles/common'
import useStyles from './styles'

export type ButtonProps = {
  onClick?: () => void
  isDisabled?: boolean
  excludeFromTabOrder?: boolean
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

  const { focus } = useFocusStyle(props)
  const classes = useStyles({
    ...props,
    iconOnly,
  })

  const iconComponent = icon && (
    <Icon
      name={icon}
      className={classes.children}
      {...(!iconOnly && {
        style: iconPosition === 'left' ? { marginRight: 5 } : { marginLeft: 5 },
      })}
      aria-hidden
      focusable={false}
      size={size === 'large' ? 'medium' : 'small'}
    />
  )

  return (
    <div className={clsx(classes.wrapper, className)}>
      <FocusRing focusRingClass={focus} within>
        <button
          type="button"
          ref={ref}
          disabled={isDisabled}
          className={clsx(classes.button, isPressed && !isDisabled && 'active')}
          {...testify('button', children)}
          {...(ariaLabel && { 'aria-label': ariaLabel })}
          {...buttonProps}
        >
          {iconPosition === 'left' && iconComponent}
          {children && (
            <Text
              as="span"
              emphasis
              className={classes.children}
              size={getTextSize(size)}
            >
              {children}
            </Text>
          )}
          {iconPosition === 'right' && iconComponent}
        </button>
      </FocusRing>
    </div>
  )
}

Button.defaultProps = {
  isDisabled: false,
  excludeFromTabOrder: false,
  iconPosition: 'left',
  variant: 'basic',
  size: 'regular',
  appearance: 'filled',
}

export default Button
