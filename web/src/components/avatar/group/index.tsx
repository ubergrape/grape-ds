import React from 'react'

import { Icon } from '../../icon'

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
  color?: groupColorsTypes
}

export const Group: React.FC<GroupProps> = props => {
  const classes = useStyles(props)

  const { isPrivate } = props

  return (
    <div className={classes.wrapper}>
      <div className={classes.group}>
        <span className={classes.color} />
      </div>
      {isPrivate && (
        <span className={classes.status}>
          <Icon name="lock" size="small" />
        </span>
      )}
    </div>
  )
}

Group.defaultProps = {
  size: 'regular',
  isPrivate: false,
  color: 'grey',
}

export default Group
