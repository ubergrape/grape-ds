import React, { ReactElement, useState } from 'react'

import { sizes, flexAlignments } from '../../../types'
import { TabPanels } from '../TabPanels'
import { Tab } from '../Tab'

import useStyles from './styles'

export type TabsProps = {
  size?: sizes
  align?: flexAlignments
  children: Array<ReactElement>
}

export const Tabs: React.FC<TabsProps> = props => {
  const classes = useStyles(props)

  const { children, size, align } = props

  const [active, setActiveTab] = useState(0)

  const onChangeTab = (tab: number) => {
    if (tab < 0 || tab >= children.length - 1) return
    setActiveTab(tab)
  }

  const tabPanelsChildren = children.find(
    (tab: any) => tab.type.name === 'TabPanels',
  ).props.children

  return (
    <div>
      <div role="tablist" className={classes.tabs}>
        {children.map((tab: any, i) => {
          const {
            props: { children: text },
            type: { name },
          } = tab

          if (name === 'TabPanels') return null

          return (
            <Tab
              size={size}
              onChangeTab={onChangeTab}
              activeTab={active}
              tab={i}
              align={align}
              key={text}
            >
              {text}
            </Tab>
          )
        })}
      </div>
      <TabPanels active={active}>{tabPanelsChildren}</TabPanels>
    </div>
  )
}

Tabs.defaultProps = {
  size: 'regular',
  align: 'left',
}
