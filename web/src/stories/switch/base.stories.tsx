import React from 'react'
import { Switch } from '../../components/switch'

export default {
  title: 'Forms/Switch',
  component: Switch,
  argTypes: { onChange: { action: 'clicked' } },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url:
    //     'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=432%3A0',
    // },
  },
}

const Template = props => {
  return <Switch {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const WithLabel = (): JSX.Element => (
  <div>
    <Switch label="Label" name="form-name" />
    <Switch label="Label" checked />
    <Switch label="Label" helpText="with help text" />
  </div>
)

export const Disabled = (): JSX.Element => (
  <div>
    <Switch label="Label" disabled />
    <Switch label="Label" checked disabled />
  </div>
)
