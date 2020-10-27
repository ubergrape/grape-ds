import React from 'react'
import { Checkbox } from '../../components/checkbox'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: { onChange: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=432%3A0',
    },
  },
}

const Template = props => {
  return <Checkbox {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const WithLabel = (): JSX.Element => (
  <div>
    <Checkbox label="Label" name="form-name" />
    <Checkbox label="Label" checked />
    <Checkbox label="Label" invalid />
    <Checkbox label="Label" indeterminate />
    <Checkbox label="Label" helpText="with help text" />
  </div>
)

export const WithoutLabel = (): JSX.Element => (
  <div>
    <Checkbox ariaLabel="My aria" id="random-id" />
    <Checkbox ariaLabel="Checkbox checked" checked />
    <Checkbox ariaLabel="Checkbox invalid" invalid />
    <Checkbox ariaLabel="Checkbox indeterminate" indeterminate />
  </div>
)

export const Disabled = (): JSX.Element => (
  <div>
    <Checkbox label="Label" disabled />
    <Checkbox label="Label" checked disabled />
    <Checkbox label="Label" indeterminate disabled />
  </div>
)

export const Invalid = (): JSX.Element => (
  <div>
    <Checkbox invalid label="Label" helpText="with help text" />
  </div>
)
