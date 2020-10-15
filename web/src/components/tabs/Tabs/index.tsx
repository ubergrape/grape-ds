import React, { ReactElement, useState } from 'react'
import { useTheme } from 'react-jss'

import { Tab } from '../Tab'

import useStyles from './styles'

export type TabsProps = {
  size?: 'large' | 'regular' | 'small'
  align?: 'left' | 'right' | 'justify'
  margin?: number
  width?: number
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

  return (
    <div>
      <div className={classes.wrapper}>
        {children.map((tab, i) => {
          const {
            props: { children: text },
          } = tab

          return (
            <Tab
              size={size}
              active={active === i}
              onClick={setActiveTab}
              tab={i}
              align={align}
              key={text}
            >
              {text}
            </Tab>
          )
        })}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  size: 'regular',
  align: 'left',
  margin: 0,
}
