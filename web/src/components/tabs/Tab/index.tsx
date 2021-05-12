import React, { useRef } from 'react'
import clsx from 'clsx'

import { sizes, flexAlignments } from '../../../types'
import { Text } from '../../typography'
import { useFocusStyle } from '../../../styles/common'
import { getTextSize, usePrevious, testify } from '../../../utils'

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

  const tabRef = useRef(null)

  const { onFocusVisible } = useFocusStyle(props)
  const classes = useStyles(props)
  const prevProps = usePrevious({ activeTab })

  const isActive = activeTab === tab
  if (isActive && prevProps && prevProps.activeTab !== activeTab) {
    tabRef.current?.focus()
  }

  const onKeyDown = e => {
    switch (e.which) {
      case 37:
        onChangeTab(activeTab - 1)
        break
      case 38:
        onChangeTab(activeTab + 1)
        break
      case 39:
        onChangeTab(activeTab + 1)
        break
      case 40:
        onChangeTab(activeTab - 1)
        break
      default:
        break
    }
  }

  return (
    <button
      type="button"
      role="tab"
      ref={tabRef}
      onClick={() => onChangeTab(tab)}
      onKeyDown={e => onKeyDown(e)}
      className={clsx(classes.button, onFocusVisible)}
      {...testify("tab", children)}
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
