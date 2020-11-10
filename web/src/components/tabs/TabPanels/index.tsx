import React, { ReactElement } from 'react'

export type TabPanels = {
  active: number
  children: Array<ReactElement>
}

export const TabPanels: React.FC<TabPanels> = props => {
  const { children, active } = props

  const activeTab = children[active]

  return <div>{activeTab}</div>
}
