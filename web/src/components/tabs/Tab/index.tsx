import React from 'react'
import clsx from 'clsx'

import { sizes, flexAlignments } from '../../../types'
import { Text } from '../../typography'
import { useFocusStyle } from '../../../styles/global'
import { getTextSize } from '../../../utils'

import useStyles from './styles'

export type TabProps = {
  onChangeTab: (tab: number) => void
  tab: number
  activeTab: number
  size: sizes
  align?: flexAlignments
  children: string
}

export const Tab: React.FC<TabProps> = props => {
  const { children, size, tab, activeTab, onChangeTab } = props

  const tabRef = React.useRef(null)

  const { onFocusVisible } = useFocusStyle(props)
  const classes = useStyles(props)

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
        size={getTextSize(size)}
      >
        {children}
      </Text>
    </button>
  )
}
