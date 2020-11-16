import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon, IconTypes } from '../../icon'

import { useFocusStyle } from '../../../styles/global'
import useStyles from './styles'

const groupTypeIconData = {
  private: {
    name: 'lock',
    width: 10,
    height: 10,
  },
}

type groupColorsTypes =
  | 'grey'
  | 'light-grey'
  | 'gold'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'blue'
  | 'light-blue'
  | 'green'
  | 'light-green'

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

  const { groupType, isUnclickable, ariaLabel } = props
  const { onClick, isDisabled, ...rest } = props

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

  const icon = groupTypeIconData[groupType]

  return (
    <Wrapper>
      <div className={classes.group}>
        <span className={classes.color} />
      </div>
      {groupType && (
        <div className={classes.status}>
          <Icon
            width={icon.width}
            height={icon.height}
            name={icon.name as IconTypes}
            className={classes.icon}
            size="small"
          />
        </div>
      )}
    </Wrapper>
  )
}

Group.defaultProps = {
  isDisabled: false,
  size: 'regular',
  ariaLabel: 'Group',
  color: 'grey',
}

export default Group
