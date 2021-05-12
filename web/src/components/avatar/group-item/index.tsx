import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon } from '../../icon'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { Group, GroupProps } from '..'

import { useItemStyle } from '../styles/item'
import { useFocusStyle } from '../../../styles/common'
import useStyles from './styles'

export interface GroupItemProps extends GroupProps {
  name: string
  description?: string
  className?: string
  members?: number
  ariaLabel?: string
  groupImageRenderDelay?: number
  isVisible?: boolean
  isUnclickable?: boolean
  isInactive?: boolean
  excludeFromTabOrder?: boolean
}

export const GroupItem: React.FC<GroupItemProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const itemClasses = useItemStyle(props)
  const {
    size,
    members,
    name,
    description,
    ariaLabel,
    isVisible,
    groupImageRenderDelay,
    className,
    ...restGroupProps
  } = props
  const { onClick, isDisabled, ...restButtonProps } = props

  const isMembersVisible = members > 0 && size === 'regular'

  const [isGroupImageVisible, toggleGroupImage] = useState(
    !groupImageRenderDelay,
  )
  const [isMembersImageVisible, toggleMembersImage] = useState(
    !groupImageRenderDelay,
  )

  if (groupImageRenderDelay && isVisible) {
    setTimeout(() => {
      toggleGroupImage(true)
      if (isMembersVisible) toggleMembersImage(true)
    }, props.groupImageRenderDelay)
  }

  const { buttonProps } = useButton(
    { ...restButtonProps, isDisabled, onPress: onClick },
    ref,
  )

  return (
    <FocusRing focusRingClass={onFocus} within>
      <button
        type="button"
        className={clsx(itemClasses.wrapper, className, classes.wrapper)}
        ref={ref}
        aria-label={ariaLabel || name}
        {...buttonProps}
      >
        {isGroupImageVisible ? (
          <Group isUnclickable {...restGroupProps} />
        ) : (
          <div className={itemClasses.imageSkeleton} />
        )}
        <div className={itemClasses.text}>
          <Text
            emphasis
            size="small"
            className={clsx(itemClasses.name, classes.name)}
          >
            {name}
          </Text>
          <div className={classes.secondary}>
            {isMembersVisible && (
              <Text className={classes.membersText} size="small">
                <Flex
                  items="center"
                  justify="center"
                  className={classes.members}
                >
                  {isMembersImageVisible ? (
                    <Icon
                      width={11.25}
                      height={11.25}
                      name="people"
                      color="secondary"
                      size="small"
                    />
                  ) : (
                    <div className={classes.membersIconSkeleton} />
                  )}
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
  size: 'regular',
  isInactive: false,
  excludeFromTabOrder: false,
}

export default GroupItem
