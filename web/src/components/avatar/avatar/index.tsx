import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon } from '../../icon'
import { Flex } from '../../layout'

import { useFocusStyle } from '../../../styles/common'
import { useAvatarStyle } from '../styles/avatar'
import useStyles from './styles'

type StatusType = 'online'

export type AvatarProps = {
  src: string
  alt: string
  status?: StatusType
  size?: 'regular' | 'small' | 'x-small'
  isDisabled?: boolean
  isInactive?: boolean
  isSelected?: boolean
  ariaLabel?: string
  isUnclickable?: boolean
  onClick?: () => void
}

const isWithImage = (props): props is AvatarProps => props.src !== undefined

export const Avatar: React.FC<AvatarProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const { wrapper, circle } = useAvatarStyle(props)

  const {
    alt,
    src,
    size,
    status,
    isDisabled,
    isInactive,
    isSelected,
    isUnclickable,
    ariaLabel,
  } = props

  const { onClick, ...rest } = props

  let Wrapper = null

  if (isUnclickable) {
    Wrapper = ({ children }) => (
      <div aria-label={ariaLabel || alt} className={wrapper}>
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
            className={wrapper}
            ref={ref}
            aria-label={ariaLabel || alt}
            {...buttonProps}
          >
            {children}
          </button>
        </FocusRing>
      )
    }
  }

  if (isSelected && size !== 'x-small') {
    return (
      <Wrapper>
        <Flex items="center" justify="center" className={circle}>
          <div className={classes.icon}>
            <Icon name="checkmark" size="medium" />
          </div>
        </Flex>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {isWithImage(props) ? (
        <img className={circle} alt={alt} src={src} />
      ) : (
        <div className={circle} />
      )}
      {!isInactive && status && size !== 'x-small' && (
        <div className={classes.status} />
      )}
    </Wrapper>
  )
}

Avatar.defaultProps = {
  size: 'regular',
  ariaLabel: 'Avatar',
  isDisabled: false,
  isInactive: false,
  isSelected: false,
}

export default Avatar
