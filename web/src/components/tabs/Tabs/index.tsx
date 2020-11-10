import React, { ReactElement, useState } from 'react'
import { useTheme } from 'react-jss'

import { textSizes } from '../../../types'
import { TabPanels } from '../TabPanels'
import { Tab } from '../Tab'

import useStyles from './styles'

export type TabsProps = {
  size?: textSizes
  align?: 'left' | 'right' | 'justify'
  children: Array<ReactElement>
}

export const Tabs: React.FC<TabsProps> = props => {
  const theme = useTheme()

  const classes = useStyles({
    ...props,
    theme,
  })

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
    <div role="tablist" className={classes.wrapper}>
      <div className={classes.tabs}>
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
  size: 'base',
  align: 'left',
}
