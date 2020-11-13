import clsx from 'clsx'
import React, { useRef } from 'react'
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
  isWrapped?: boolean
  color?: groupColorsTypes
  ariaLabel?: string
  onClick?: () => void
}

export const Group: React.FC<GroupProps> = props => {
  const ref = useRef()
  const classes = useStyles(props)
  const { onFocus } = useFocusStyle(props)

  const { isPrivate, isWrapped, ariaLabel } = props

  let Wrapper = null

  if (isWrapped) {
    Wrapper = ({ children }) => (
      <div className={classes.wrapper}>{children}</div>
    )
  } else {
    Wrapper = ({ children }) => {
      const { onClick, ...rest } = props
      const { buttonProps } = useButton({ ...rest, onPress: onClick }, ref)

      return (
        <button
          type="button"
          className={clsx(classes.wrapper, onFocus)}
          ref={ref}
          aria-label={ariaLabel}
          {...buttonProps}
        >
          {children}
        </button>
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
            <Icon className={classes.icon} name="lock" size="small" />
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
