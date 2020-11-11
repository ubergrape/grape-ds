import React from 'react'

import useStyles from './styles'

import { Text } from '../../typography'
import { Avatar, AvatarProps } from '..'

export interface AvatarItemProps extends AvatarProps {
  name: string
  description?: string
}

export const AvatarItem: React.FC<AvatarItemProps> = props => {
  const classes = useStyles(props)

  const { name, description, ...rest } = props

  return (
    <div className={classes.wrapper}>
      <Avatar {...rest} />
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
    </div>
  )
}

AvatarItem.defaultProps = {
  name: 'First-name Last-name',
}

export default AvatarItem
