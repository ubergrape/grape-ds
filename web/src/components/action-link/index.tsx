import clsx from 'clsx'
import React from 'react'
import { useFocusStyle } from '../../styles/global'

import { Icon, IconTypes } from '../icon'
import { Flex } from '../layout'
import { Text } from '../typography'
import { useStyles } from './styles'

export type ActionLinkProps = {
  variant?: 'primary' | 'basic' | 'danger'
  size?: 'regular' | 'small'
  href: string
  target?: '_blank' | '_self'
  icon?: IconTypes
  isDisabled?: boolean
  ariaLabel?: string
  children: string
}

export const ActionLink: React.FC<ActionLinkProps> = props => {
  const { href, icon, target, ariaLabel, ...rest } = props
  const { isDisabled } = props
  const style = useStyles(rest)
  const focus = useFocusStyle({ isInvalid: false, isDisabled })
  return (
    <a
      {...(!isDisabled && { href })}
      target={target}
      title={props.children}
      className={clsx(style.actionLink, focus.onFocus)}
      {...(isDisabled && { tabIndex: -1 })}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
    >
      <Flex direction="row" items="center">
        <div className={style.iconWrapper}>
          <Icon
            ariaHidden
            name={icon || 'search'}
            size="small"
            color="primary"
          />
        </div>
        <Text as="span" size="base" className={style.label}>
          {props.children}
        </Text>
      </Flex>
    </a>
  )
}

ActionLink.defaultProps = {
  variant: 'basic',
  size: 'regular',
}

export default ActionLink
