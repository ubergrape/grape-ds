import clsx from 'clsx'
import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon } from '../../icon'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { Group, GroupProps } from '..'

import { useItemStyle } from '../styles/item'
import { useFocusStyle } from '../../../styles/global'
import useStyles from './styles'

export interface GroupItemProps extends GroupProps {
  name: string
  description?: string
  members?: number
  ariaLabel?: string
  isUnclickable?: boolean
  isInactive?: boolean
  maxWidth?: number
}

export const GroupItem: React.FC<GroupItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const itemClasses = useItemStyle(props)

  const { name, description, members, ariaLabel, ...restGroupProps } = props
  const { onClick, isDisabled, ...restButtonProps } = props
  const { size } = props

  const { buttonProps } = useButton(
    { ...restButtonProps, isDisabled, onPress: onClick },
    ref,
  )

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={itemClasses.wrapper}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        <Group isUnclickable {...restGroupProps} />
        <div className={itemClasses.text}>
          <Text
            emphasis
            size="small"
            className={clsx(itemClasses.name, classes.name)}
          >
            {name}
          </Text>
          <div className={classes.secondary}>
            {members && size !== 'small' && (
              <Text size="small">
                <Flex
                  items="center"
                  justify="center"
                  className={classes.members}
                >
                  <Icon
                    width={11.25}
                    height={11.25}
                    className={classes.icon}
                    name="people"
                    size="small"
                  />
                  <span className={classes.membersCount}>
                    {members.toString()}
                  </span>
                </Flex>
              </Text>
            )}
            {description && (
              <Text
                size="small"
                className={clsx(itemClasses.description, classes.description)}
              >
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
  isInactive: false,
}

export default GroupItem
