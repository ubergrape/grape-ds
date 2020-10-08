import React from 'react'
import { CheckboxProps, Checkbox } from '../../components/checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
  children: 'Test',
}

export const Types = (): JSX.Element => (
  <div>
    <Checkbox>Label</Checkbox>
    <Checkbox checked>Label</Checkbox>
    <Checkbox invalid>Label</Checkbox>
    <Checkbox />
    <Checkbox checked />
    <Checkbox invalid />
  </div>
)

// export const Sizes = (): JSX.Element => (
//   <div>
//     <Icon name="person" size="small" />
//     <Icon name="person" size="medium" />
//     <Icon name="person" size="large" />
//   </div>
// )
