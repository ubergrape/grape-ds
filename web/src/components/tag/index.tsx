import React from 'react'
import clsx from 'clsx'

import { Button } from '../button'
import { Avatar } from '../avatar'
import { Flex } from '../layout'
import { Text } from '../typography/text'
import { useStyles } from './styles'

type DefaultProps = {
  onRemove?: () => void
  maxWidth?: number
  className?: string
  children: string
  removeAriaLabel?: string
}

type WithAvatar = DefaultProps & {
  avatarSrc: string
  avatarAlt: string
}

export type TagProps = DefaultProps | WithAvatar

export const isAvatarTag = (va: TagProps): va is WithAvatar =>
  (va as WithAvatar).avatarSrc !== undefined

export const Tag: React.FC<TagProps> = props => {
  const { children, className, onRemove } = props
  const classes = useStyles(props)
  return (
    <Flex className={clsx(classes.tag, className)} items="center">
      {isAvatarTag(props) && (
        <Avatar
          src={props.avatarSrc}
          alt={props.avatarAlt}
          size="x-small"
          isUnclickable
        />
      )}
      <Text
        maxWidth={props.maxWidth}
        as="div"
        size="base"
        title={children}
        className={classes.text}
      >
        {children}
      </Text>
      {onRemove && (
        <Button
          onClick={onRemove}
          variant="basic"
          appearance="minimal"
          icon="close"
          className={classes.button}
          ariaLabel={props.removeAriaLabel}
        />
      )}
    </Flex>
  )
}
