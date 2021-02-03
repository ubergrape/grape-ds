import React from 'react'
import { Switch } from '../../components/switch'

export default {
  title: 'Forms/Switch',
  component: Switch,
  argTypes: { onChange: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=451%3A5',
    },
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
    <Switch label="Label 1" name="form-name" />
    <Switch label="Label 2" isChecked />
    <Switch label="Label 3" helpText="with help text" />
  </div>
)

export const WithoutLabel = (): JSX.Element => (
  <div>
    <Switch ariaLabel="My aria" name="form-name" />
    <Switch ariaLabel="Switch checked" isChecked />
    <Switch ariaLabel="Switch with help text" helpText="with help text" />
  </div>
)

export const Disabled = (): JSX.Element => (
  <div>
    <Switch label="Label 1" isDisabled />
    <Switch label="Label 2" isChecked isDisabled />
  </div>
)
