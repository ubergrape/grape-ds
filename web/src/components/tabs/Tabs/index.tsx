import React, { ReactElement, useState } from 'react'
import { useTheme } from 'react-jss'

import { Tab } from '../Tab'

import useStyles from './styles'

export type TabsProps = {
  size?: 'large' | 'regular' | 'small'
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
    if (tab < 0 || tab > children.length - 1) return
    setActiveTab(tab)
  }

  return (
    <div className={classes.wrapper}>
      {children.map((tab, i) => {
        const {
          props: { children: text },
        } = tab

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
  )
}

Tabs.defaultProps = {
  size: 'regular',
  align: 'left',
}
