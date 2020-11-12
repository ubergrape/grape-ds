import React from 'react'

import { Icon } from '../../icon'
import { Text } from '../../typography'
import { Group, GroupProps } from '..'

import useStyles from './styles'

export interface GroupItemProps extends GroupProps {
  name: string
  description?: string
  members?: number
}

export const GroupItem: React.FC<GroupItemProps> = props => {
  const classes = useStyles(props)

  const { name, description, members, ...rest } = props

  return (
    <div className={classes.wrapper}>
      <Group {...rest} />
      <div className={classes.text}>
        <Text emphasis size="small" className={classes.name}>
          {name}
        </Text>
        <div className={classes.secondary}>
          {members && (
            <Text size="small">
              <div className={classes.members}>
                <Icon name="people" size="small" />
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
    </div>
  )
}

GroupItem.defaultProps = {
  name: 'Group name',
}

export default GroupItem
