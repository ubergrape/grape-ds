import React, { useRef } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton } from '@react-aria/button'

import { Icon } from '../../icon'

import { useFocusStyle } from '../../../styles/global'
import useStyles from './styles'

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

export type GroupProps = {
  size?: 'regular' | 'small'
  isPrivate?: boolean
  isButton?: boolean
  color?: groupColorsTypes
  ariaLabel?: string
  onClick?: () => void
}

export const Group: React.FC<GroupProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { isPrivate, isButton, ariaLabel } = props

  let Wrapper = null

  if (isButton) {
    Wrapper = ({ children }) => (
      <div className={classes.wrapper}>{children}</div>
    )
  } else {
    Wrapper = ({ children }) => {
      const { onClick, ...rest } = props
      const { buttonProps } = useButton({ ...rest, onPress: onClick }, ref)

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

  return (
    <Wrapper>
      <div className={classes.group}>
        <span className={classes.color} />
      </div>
      {isPrivate && (
        <div className={classes.status}>
          <div className={classes.iconWrapper}>
            <Icon
              width={10}
              height={10}
              className={classes.icon}
              name="lock"
              size="small"
            />
          </div>
        </div>
      )}
    </Wrapper>
  )
}

Group.defaultProps = {
  size: 'regular',
  ariaLabel: 'Group',
  isPrivate: false,
  color: 'grey',
}

export default Group
