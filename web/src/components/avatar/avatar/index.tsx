import React from 'react'
import clsx from 'clsx'

import useStyles from './styles'

import { Icon } from '../../icon'

export type AvatarProps = {
  src?: string
  alt?: string
  status?: undefined | 'offline' | 'reachable' | 'inCall' | 'online'
  size?: 'regular' | 'small'
  isInactive?: boolean
  isSelected?: boolean
}

export const Avatar: React.FC<AvatarProps> = props => {
  const classes = useStyles(props)

  const { alt, src, status, size, isSelected } = props

  if (isSelected) {
    return (
      <div className={clsx(classes.avatar, classes.selected)}>
        <div className={classes.icon}>
          <Icon
            name="checkmark"
            size={size === 'regular' ? 'medium' : 'small'}
          />
        </div>
      </div>
    )
  }

  if (!src || !alt) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.avatar} />
        {status && <div className={classes.status} />}
      </div>
    )
  }

  return (
    <div className={classes.wrapper}>
      <img className={classes.avatar} alt={alt} src={src} />
      {status && <div className={classes.status} />}
    </div>
  )
}

Avatar.defaultProps = {
  size: 'regular',
  status: undefined,
  isInactive: false,
  isSelected: false,
}

export default Avatar
