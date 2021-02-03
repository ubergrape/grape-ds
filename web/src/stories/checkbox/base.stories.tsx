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
    <Checkbox label="Label 1" name="form-name" />
    <Checkbox label="Label 2" isChecked />
    <Checkbox label="Label 3" isInvalid />
    <Checkbox label="Label 4" isIndeterminate />
    <Checkbox label="It's my life" helpText="Some help." />
  </div>
)

export const WithoutLabel = (): JSX.Element => (
  <div>
    <Checkbox ariaLabel="My aria" id="random-id" />
    <Checkbox ariaLabel="Checkbox checked" isChecked />
    <Checkbox ariaLabel="Checkbox invalid" isInvalid />
    <Checkbox ariaLabel="Checkbox indeterminate" isIndeterminate />
  </div>
)

export const Disabled = (): JSX.Element => (
  <div>
    <Checkbox label="Label 1" isDisabled />
    <Checkbox label="Label 2" isChecked isDisabled />
    <Checkbox label="Label 3" isIndeterminate isDisabled />
  </div>
)

export const Invalid = (): JSX.Element => (
  <div>
    <Checkbox isInvalid label="Label" helpText="with help text" />
  </div>
)
