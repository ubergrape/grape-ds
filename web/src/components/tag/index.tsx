import React from 'react'

import { Button } from '../button'
import { Avatar } from '../avatar'
import { Flex } from '../layout'
import { Text } from '../typography/text'
import { useStyles } from './styles'

type DefaultProps = {
  onRemove?: () => void
  maxWidth?: number
  children: string
  removeAriaLabel?: string
}

type WithAvatar = DefaultProps & {
  avatarSrc: string
  avatarAlt: string
}

export type Props = DefaultProps | WithAvatar

export const isAvatarTag = (va: Props): va is WithAvatar =>
  (va as WithAvatar).avatarSrc !== undefined

export const Tag: React.FC<Props> = props => {
  const { children, onRemove } = props
  const classes = useStyles(props)
  return (
    <Flex className={classes.tag} gap="0.5x" items="center">
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
