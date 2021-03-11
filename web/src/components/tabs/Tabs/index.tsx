import React, { ReactElement, useState } from 'react'

import { sizes, flexAlignments } from '../../../types'
import { Tab } from '../Tab'

import useStyles from './styles'

export type TabsProps = {
  size?: sizes
  align?: flexAlignments
  tab?: number
  onTabClick?: (tab: number) => void
  className?: string
  children: Array<ReactElement>
}

export const Tabs: React.FC<TabsProps> = props => {
  const classes = useStyles(props)

  const { children, size, className, onTabClick, tab, align } = props

  const [activeTab, setActiveTab] = useState(tab || 0)

  const onChangeTab = (_tab: number) => {
    if (_tab < 0 || _tab > children.length - 1) return
    onTabClick(_tab)
    setActiveTab(_tab)
  }

  const activeTabContent = children[activeTab].props.children

  return (
    <div className={className}>
      <div role="tablist" className={classes.tabs}>
        {children.map((tab, i) => {
          const {
            props: { name },
          } = tab

          return (
            <Tab
              size={size}
              onChangeTab={onChangeTab}
              activeTab={activeTab}
              tab={i}
              align={align}
              key={name}
            >
              {name}
            </Tab>
          )
        })}
      </div>
      {activeTabContent}
    </div>
  )
}

Tabs.defaultProps = {
  size: 'regular',
  align: 'left',
}
