import clsx from 'clsx'
import React from 'react'
import { useFocusStyle } from '../../styles/common'

import { Icon, IconTypes } from '../icon'
import { Flex } from '../layout'
import { Text } from '../typography'
import { useStyles } from './styles'
import { getTextSize } from '../../utils'

export type ActionLinkProps = {
  variant?: 'primary' | 'basic' | 'danger'
  size?: 'regular' | 'small'
  onClick?: () => void
  href: string
  target?: '_blank' | '_self'
  className?: string
  icon?: IconTypes
  isDisabled?: boolean
  ariaLabel?: string
  children: string
  title: string
}

export const ActionLink: React.FC<ActionLinkProps> = props => {
  const {
    href,
    icon,
    target,
    ariaLabel,
    children,
    title,
    onClick,
    className,
    ...rest
  } = props
  const { isDisabled, size } = props
  const classes = useStyles(rest)
  const focus = useFocusStyle({ isInvalid: false, isDisabled })
  return (
    <div className={clsx(classes.wrapper, className)}>
      <a
        {...(!isDisabled && { href })}
        target={target}
        onClick={onClick}
        onKeyPress={onClick}
        className={clsx(classes.actionLink, focus.onFocus)}
        title={title}
        {...(isDisabled && { tabIndex: -1 })}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
      >
        <Flex direction="row" items="center">
          <div className={classes.iconWrapper}>
            <Icon
              ariaHidden
              name={icon || 'search'}
              size="small"
              color="primary"
              focusable={false}
            />
          </div>
          <Text as="span" size={getTextSize(size)} className={classes.label}>
            {title}
          </Text>
        </Flex>
      </a>
    </div>
  )
}

ActionLink.defaultProps = {
  variant: 'basic',
  size: 'regular',
}

export default ActionLink
