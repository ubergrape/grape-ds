import React from 'react'
import { useTheme } from 'react-jss'
import clsx from 'clsx'

import { Text } from '../../typography'
import { useFocusStyle } from '../../../styles/global'

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

  const { onFocusVisible } = useFocusStyle(props)
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
      className={clsx(classes.button, onFocusVisible)}
      {...(isActive && { 'aria-selected': true })}
      {...(!isActive && { tabIndex: -1 })}
    >
      <Text
        color={isActive ? 'active' : 'primary'}
        className={classes.text}
        size={size}
      >
        {children}
      </Text>
    </button>
  )
}

Tab.defaultProps = {}
