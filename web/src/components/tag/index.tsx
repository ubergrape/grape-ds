import React from 'react'
import { Button } from '../button'
import { Flex } from '../layout'
import { Text } from '../typography/text'
import { useStyles } from './styles'

export interface Props {
  onRemove?: () => void
  maxWidth?: number
  children: string
  avatar?: string
}

export const Tag: React.FC<Props> = props => {
  const { children, onRemove, avatar } = props
  const classes = useStyles(props)
  return (
    <Flex className={classes.tag} gap="0.5x" items="center">
      {avatar && <div className={classes.avatar} />}
      <Text
        maxWidth={props.maxWidth}
        as="div"
        size="regular"
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
          size="xs"
          className={classes.button}
        />
      )}
    </Flex>
  )
}
