import React from 'react'

import { Tabs, Tab, TabsProps } from '../../components/tabs/index.tsx'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Base: React.FC<TabsProps> = props => (
  <Tabs {...props}>
    <Tab>Tab name 1</Tab>
    <Tab>Tab name 2 </Tab>
    <Tab>Tab name 3</Tab>
  </Tabs>
)

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=413%3A0',
  },
}

export const Alignment: React.FC<TabsProps> = () => (
  <div>
    <Tabs width={500} align="left" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
    <Tabs width={500} align="right" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
    <Tabs width={500} align="justify" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
  </div>
)

Alignment.parameters = {
  layout: 'fullscreen',
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=413%3A0',
  },
}

export const Size: React.FC<TabsProps> = () => (
  <div>
    <Tabs size="small" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
    <Tabs size="regular" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
    <Tabs size="large" margin="16px 0">
      <Tab>Tab name 1</Tab>
      <Tab>Tab name 2 </Tab>
      <Tab>Tab name 3</Tab>
    </Tabs>
  </div>
)

Size.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=413%3A0',
  },
}
