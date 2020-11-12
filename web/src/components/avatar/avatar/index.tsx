import React, { useRef } from 'react'
import clsx from 'clsx'
import { useButton } from '@react-aria/button'

import { useFocusStyle } from '../../../styles/global'
import { Icon } from '../../icon'

import useStyles from './styles'

export type AvatarProps = {
  src?: string
  alt?: string
  isOnline?: boolean
  size?: 'regular' | 'small'
  isInactive?: boolean
  isSelected?: boolean
  ariaLabel?: string
  onClick?: () => void
}

export const Avatar: React.FC<AvatarProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { alt, src, isOnline, size, ariaLabel, isSelected } = props
  const { onClick, ...rest } = props

  const { buttonProps } = useButton({ ...rest, onPress: onClick }, ref)

  if (isSelected) {
    return (
      <button
        type="button"
        className={clsx(classes.button, onFocus)}
        ref={ref}
        aria-label={ariaLabel}
        {...buttonProps}
      >
        <div className={clsx(classes.avatar, classes.selected)}>
          <div className={classes.icon}>
            <Icon
              name="checkmark"
              size={size === 'regular' ? 'medium' : 'small'}
            />
          </div>
        </div>
      </button>
    )
  }

  if (!src || !alt) {
    return (
      <button
        type="button"
        className={clsx(classes.button, onFocus)}
        ref={ref}
        aria-label={ariaLabel}
        {...buttonProps}
      >
        <div className={classes.avatar} />
        {isOnline && <div className={classes.online} />}
      </button>
    )
  }

  return (
    <button
      type="button"
      className={clsx(classes.button, onFocus)}
      ref={ref}
      aria-label={ariaLabel}
      {...buttonProps}
    >
      <img className={classes.avatar} alt={alt} src={src} />
      {isOnline && <div className={classes.online} />}
    </button>
  )
}

Avatar.defaultProps = {
  size: 'regular',
  ariaLabel: 'Avatar',
  isOnline: false,
  isInactive: false,
  isSelected: false,
}

export default Avatar
