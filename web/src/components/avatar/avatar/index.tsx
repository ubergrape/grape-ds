import clsx from 'clsx'
import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
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
  isWrapped?: boolean
  onClick?: () => void
}

export const Avatar: React.FC<AvatarProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { alt, src, isWrapped, isOnline, size, ariaLabel, isSelected } = props

  let Wrapper = null

  if (isWrapped) {
    Wrapper = ({ children }) => (
      <div className={classes.wrapper}>{children}</div>
    )
  } else {
    Wrapper = ({ children }) => {
      const { onClick, ...rest } = props
      const { buttonProps } = useButton({ ...rest, onPress: onClick }, ref)

      return (
        <FocusRing focusRingClass={onFocus} within>
          <button
            type="button"
            className={classes.wrapper}
            ref={ref}
            aria-label={ariaLabel}
            {...buttonProps}
          >
            {children}
          </button>
        </FocusRing>
      )
    }
  }

  if (isSelected) {
    return (
      <Wrapper>
        <div className={clsx(classes.avatar, classes.selected)}>
          <div className={classes.icon}>
            <Icon
              name="checkmark"
              size={size === 'regular' ? 'medium' : 'small'}
            />
          </div>
        </div>
      </Wrapper>
    )
  }

  if (!src || !alt) {
    return (
      <Wrapper>
        <div className={classes.avatar} />
        {isOnline && <div className={classes.online} />}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <img className={classes.avatar} alt={alt} src={src} />
      {isOnline && <div className={classes.online} />}
    </Wrapper>
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
