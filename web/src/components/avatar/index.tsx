import React from 'react'
import clsx from 'clsx'
import { useTheme } from 'react-jss'

import useStyles from './styles'

export type AvatarProps = {
  src?: string
  alt?: string
  status?: undefined | 'offline' | 'reachable' | 'inCall' | 'online'
  size?: 'regular' | 'small'
  isInactive?: boolean
  isSelected?: boolean
}

export const Avatar: React.FC<AvatarProps> = props => {
  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  const { alt, src, status, isSelected } = props

  if (isSelected) {
    return <div className={clsx(classes.avatar, classes.selected)} />
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
