import React from 'react'

import { Tabs, Tab, TabsProps } from '../../components/tabs/index.tsx'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Base: React.FC<TabsProps> = props => (
  <Tabs {...props}>
    <Tab name="Tab name 1">
      <div>
        Tab 1 content with{' '}
        <a href="https://aurora.ubergrape.com/docs/components/tabs">link</a> and{' '}
        <button type="button">button</button>
      </div>
    </Tab>
    <Tab name="Tab name 2">
      <div>Tab 2 content</div>
    </Tab>
    <Tab name="Tab name 3">
      <div>Tab 3 content</div>
    </Tab>
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
    <Tabs align="left">
      <Tab name="Tab name 1">
        <div>
          Tab 1 content with{' '}
          <a href="https://aurora.ubergrape.com/docs/components/tabs">link</a>{' '}
          and <button type="button">button</button>
        </div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
    <Tabs align="right">
      <Tab name="Tab name 1">
        <div>Tab 1 content</div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
    <Tabs align="justify">
      <Tab name="Tab name 1">
        <div>Tab 1 content</div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
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
    <Tabs size="small">
      <Tab name="Tab name 1">
        <div>
          Tab 1 content with{' '}
          <a href="https://aurora.ubergrape.com/docs/components/tabs">link</a>{' '}
          and <button type="button">button</button>
        </div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
    <Tabs size="regular">
      <Tab name="Tab name 1">
        <div>Tab 1 content</div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
    <Tabs size="large">
      <Tab name="Tab name 1">
        <div>Tab 1 content</div>
      </Tab>
      <Tab name="Tab name 2">
        <div>Tab 2 content</div>
      </Tab>
      <Tab name="Tab name 3">
        <div>Tab 3 content</div>
      </Tab>
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
