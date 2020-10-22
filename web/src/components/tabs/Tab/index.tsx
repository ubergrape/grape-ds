import React from 'react'
import { useTheme } from 'react-jss'

import { Text } from '../../typography'
import { genUid } from '../../../utils'

import useStyles from './styles'

const getTextSize = (size): 'body-large' | 'body-base' | 'body-small' => {
  switch (size) {
    case 'large':
      return 'body-large'
    case 'regular':
      return 'body-base'
    case 'small':
      return 'body-small'
    default:
      return 'body-base'
  }
}

export type TabProps = {
  onChangeTab: (tab: number) => void
  tab: number
  activeTab: number
  size: 'large' | 'regular' | 'small'
  align?: 'left' | 'right' | 'justify'
  children: string
}

export const Tab: React.FC<TabProps> = props => {
  const { children, size, tab, activeTab, onChangeTab } = props

  const tabRef = React.useRef(null)

  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

  const isActive = activeTab === tab

  const onKeyDown = e => {
    e.preventDefault()
    switch (e.which) {
      case 37:
        onChangeTab(activeTab - 1)
        break
      case 39:
        onChangeTab(activeTab + 1)
        break
      default:
        break
    }
  }

  if (isActive) tabRef.current?.focus()

  return (
    <a
      href={`#${genUid()}${tab}`}
      ref={tabRef}
      role="tab"
      onClick={() => onChangeTab(tab)}
      onKeyDown={e => onKeyDown(e)}
      className={classes.tab}
      {...(isActive && { 'aria-selected': true })}
      {...(!isActive && { tabIndex: -1 })}
    >
      <Text color={isActive ? 'active' : 'primary'} size={getTextSize(size)}>
        {children}
      </Text>
    </a>
  )
}

Tab.defaultProps = {}
