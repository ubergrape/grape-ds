import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { useFocusStyle } from '../../../styles/global'
import { Icon } from '../../icon'
import { Text } from '../../typography'
import { Group, GroupProps } from '..'

import useStyles from './styles'

export interface GroupItemProps extends GroupProps {
  name: string
  description?: string
  members?: number
  ariaLabel?: string
  isWrapped?: boolean
}

export const GroupItem: React.FC<GroupItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { name, description, members, ariaLabel, ...restGroupProps } = props
  const { size } = props
  const { onClick, ...restButtonProps } = props

  const { buttonProps } = useButton(
    { ...restButtonProps, onPress: onClick },
    ref,
  )

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={classes.wrapper}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        <Group isWrapped {...restGroupProps} />
        <div className={classes.text}>
          <Text emphasis size="small" className={classes.name}>
            {name}
          </Text>
          <div className={classes.secondary}>
            {members && size !== 'small' && (
              <Text size="small">
                <div className={classes.members}>
                  <div className={classes.iconWrapper}>
                    <Icon className={classes.icon} name="people" size="small" />
                  </div>
                  <span className={classes.membersCount}>
                    {members.toString()}
                  </span>
                </div>
              </Text>
            )}
            {description && (
              <Text size="small" className={classes.description}>
                {description}
              </Text>
            )}
          </div>
        </div>
      </button>
    </FocusRing>
  )
}

GroupItem.defaultProps = {
  name: 'Group name',
}

export default GroupItem
