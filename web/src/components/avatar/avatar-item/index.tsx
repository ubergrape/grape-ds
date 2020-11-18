import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Text } from '../../typography'
import { Avatar, AvatarProps } from '..'

import { useItemStyle } from '../styles/item'
import { useFocusStyle } from '../../../styles/global'
import useStyles from './styles'

export interface AvatarItemProps extends AvatarProps {
  name: string
  description?: string
  maxWidth?: number
  ariaLabel?: string
  onClick?: () => void
}

export const AvatarItem: React.FC<AvatarItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const { wrapper, text } = useItemStyle(props)

  const { name, ariaLabel, description, ...restAvatarProps } = props
  const { onClick, isDisabled, ...restButtonProps } = props

  const { buttonProps } = useButton(
    { ...restButtonProps, isDisabled, onPress: onClick },
    ref,
  )

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={wrapper}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        <Avatar isUnclickable {...restAvatarProps} />
        <div className={text}>
          <Text emphasis size="small" className={classes.name}>
            {name}
          </Text>
          {description && (
            <Text size="small" className={classes.description}>
              {description}
            </Text>
          )}
        </div>
      </button>
    </FocusRing>
  )
}

AvatarItem.defaultProps = {
  name: 'First-name Last-name',
}

export default AvatarItem
