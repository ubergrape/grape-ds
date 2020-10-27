import React from 'react'
import { TextField } from '../../components/text-input'

export default {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: { onChange: { action: 'typed' }, children: { control: 'text' } },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url:
    //     'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=432%3A0',
    // },
  },
}

const Template = props => {
  return <TextField {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const WithLabel = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <TextField label="Label" name="testing" autoFocus />
    <TextField placeholder="Placeholder" />
    <TextField placeholder="Placeholder" description="Additional Information" />
    <TextField
      isDisabled
      placeholder="Placeholder"
      description="Additional Information"
    />
    <TextField
      isReadOnly
      placeholder="Placeholder"
      description="Additional Information"
    />
    <TextField
      invalid
      placeholder="Placeholder"
      description="Additional Information"
    />
  </div>
)

export const Invalid = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <TextField
      invalid
      validationHelp="Validation Help"
      placeholder="Placeholder"
      description="Additional Information"
    />
  </div>
)
