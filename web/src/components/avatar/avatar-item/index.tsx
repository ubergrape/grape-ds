import React, { useRef } from 'react'
import clsx from 'clsx'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Text } from '../../typography'
import { Avatar, AvatarProps } from '..'

import { useItemStyle } from '../styles/item'
import { useFocusStyle } from '../../../styles/common'
import useStyles from './styles'

export interface AvatarItemProps extends AvatarProps {
  name: string
  description?: string
  maxWidth?: number
  ariaLabel?: string
  className?: string
  excludeFromTabOrder?: boolean
  onClick?: () => void
}

export const AvatarItem: React.FC<AvatarItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const itemClasses = useItemStyle(props)

  const { name, ariaLabel, description, ...restAvatarProps } = props
  const { onClick, isDisabled, className, ...restButtonProps } = props

  const { buttonProps } = useButton(
    { ...restButtonProps, isDisabled, onPress: onClick },
    ref,
  )

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={clsx(itemClasses.wrapper, className)}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        <Avatar isUnclickable {...restAvatarProps} />
        <div className={itemClasses.text}>
          <Text
            emphasis
            size="small"
            className={clsx(itemClasses.name, classes.name)}
          >
            {name}
          </Text>
          {description && (
            <Text
              size="small"
              className={clsx(itemClasses.description, classes.description)}
            >
              {description}
            </Text>
          )}
        </div>
      </button>
    </FocusRing>
  )
}

AvatarItem.defaultProps = {
  excludeFromTabOrder: false,
}

export default AvatarItem
