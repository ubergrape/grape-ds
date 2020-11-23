import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon, IconTypes } from '../../icon'
import { Flex } from '../../layout'

import { useFocusStyle } from '../../../styles/global'
import { useAvatarStyle } from '../styles/avatar'
import useStyles from './styles'

const groupTypeIconData = {
  private: {
    name: 'lock',
    width: 10,
    height: 10,
  },
}

type groupColorsTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type GroupTypes = 'private'

export type GroupProps = {
  size?: 'regular' | 'small'
  groupType?: GroupTypes
  isUnclickable?: boolean
  isDisabled?: boolean
  color?: groupColorsTypes
  ariaLabel?: string
  onClick?: () => void
}

export const Group: React.FC<GroupProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)
  const { wrapper, circle } = useAvatarStyle(props)

  const { groupType, isUnclickable, ariaLabel } = props
  const { onClick, isDisabled, ...rest } = props

  let Wrapper = null

  if (isUnclickable) {
    Wrapper = ({ children }) => (
      <div aria-label={ariaLabel} className={wrapper}>
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
            aria-label={ariaLabel}
            {...buttonProps}
          >
            {children}
          </button>
        </FocusRing>
      )
    }
  }

  const icon = groupTypeIconData[groupType]

  return (
    <Wrapper>
      <Flex items="center" justify="center" className={circle}>
        <span className={classes.color} />
      </Flex>
      {groupType && (
        <Flex items="center" justify="center" className={classes.status}>
          <Icon
            width={icon.width}
            height={icon.height}
            name={icon.name as IconTypes}
            className={classes.icon}
            size="small"
          />
        </Flex>
      )}
    </Wrapper>
  )
}

Group.defaultProps = {
  isDisabled: false,
  size: 'regular',
  ariaLabel: 'Group',
  color: 1,
}

export default Group
