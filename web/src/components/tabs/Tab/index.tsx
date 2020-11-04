import React from 'react'
import { useTheme } from 'react-jss'

import { Text } from '../../typography'

import useStyles from './styles'

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
    <button
      type="button"
      role="tab"
      ref={tabRef}
      onClick={() => onChangeTab(tab)}
      onKeyDown={e => onKeyDown(e)}
      className={classes.button}
      {...(isActive && { 'aria-selected': true })}
      {...(!isActive && { tabIndex: -1 })}
    >
      <div className={classes.tab}>
        <Text color={isActive ? 'active' : 'primary'} size={size}>
          {children}
        </Text>
      </div>
    </button>
  )
}

Tab.defaultProps = {}
