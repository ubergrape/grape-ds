import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import useStyles from './styles'

import { useFocusStyle } from '../../../styles/global'
import { Text } from '../../typography'
import { Avatar, AvatarProps } from '..'

export interface AvatarItemProps extends AvatarProps {
  name: string
  description?: string
  ariaLabel?: string
  onClick?: () => void
}

export const AvatarItem: React.FC<AvatarItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { name, ariaLabel, description } = props
  const { onClick, ...rest } = props

  const { buttonProps } = useButton({ ...rest, onPress: onClick }, ref)

  console.log(classes)

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={classes.wrapper}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        <Avatar isWrapped {...rest} />
        <div className={classes.text}>
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
