import clsx from 'clsx'
import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { useFocusStyle } from '../../../styles/global'
import { Icon } from '../../icon'

import useStyles from './styles'

type StatusType = 'online'

export type AvatarProps = {
  src?: string
  alt?: string
  status?: StatusType
  size?: 'regular' | 'small'
  isDisabled?: boolean
  isSelected?: boolean
  ariaLabel?: string
  isUnclickable?: boolean
  onClick?: () => void
}

export const Avatar: React.FC<AvatarProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const {
    alt,
    src,
    status,
    isDisabled,
    isUnclickable,
    ariaLabel,
    isSelected,
  } = props

  const { onClick, ...rest } = props

  let Wrapper = null

  if (isUnclickable) {
    Wrapper = ({ children }) => (
      <div aria-label={ariaLabel} className={classes.wrapper}>
        {children}
      </div>
    )
  } else {
    Wrapper = ({ children }) => {
      const { buttonProps } = useButton(
        { ...rest, isDisabled, onPress: onClick },
        ref,
      )

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
        <div className={clsx(classes.avatar, classes.isSelected)}>
          <div className={classes.icon}>
            <Icon name="checkmark" size="medium" />
          </div>
        </div>
      </Wrapper>
    )
  }

  if (!src || !alt) {
    return (
      <Wrapper>
        <div className={classes.avatar} />
        {!isDisabled && status && <div className={classes.status} />}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <img className={classes.avatar} alt={alt} src={src} />
      {!isDisabled && status && <div className={classes.status} />}
    </Wrapper>
  )
}

Avatar.defaultProps = {
  size: 'regular',
  ariaLabel: 'Avatar',
  isDisabled: false,
  isSelected: false,
}

export default Avatar
