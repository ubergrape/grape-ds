import React from 'react'
import { CheckboxProps, Checkbox } from '../../components/checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: { onChange: { action: 'clicked' }, children: { control: 'text' } },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url:
    //     'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=78%3A3331',
    // },
  },
}

const Template = props => {
  return <Checkbox {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const Types = (): JSX.Element => (
  <div>
    <Checkbox label="Label" />
    <Checkbox label="Label" checked />
    <Checkbox label="Label" invalid />
    <Checkbox />
    <Checkbox checked />
    <Checkbox invalid />
    <Checkbox label="Label" helpText="with help text" />
  </div>
)
