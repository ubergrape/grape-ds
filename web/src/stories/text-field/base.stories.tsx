import React from 'react'
import { Flex } from '../../components/layout'
import { TextField } from '../../components/text-input'

export default {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: {
    onChange: { action: 'typed' },
    label: {
      control: {
        type: 'text',
      },
    },
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    isRequired: {
      description:
        'Whether user input is required on the input before form submission. Paired with the `isNecessityLabel` prop to add a visual indicator to the input.',
    },
    min: {
      description: 'Minimum value',
      control: {
        type: 'number',
      },
    },
    max: {
      description: 'Maximum value',
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=586%3A5',
    },
  },
}

const Template = props => {
  return <TextField {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const Default = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <TextField label="Label" placeholder="Placeholder" />
    <TextField label="Label" />
  </Flex>
)

export const InputTypes = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <TextField label="Email" type="email" />
    <TextField label="Number between 1-10" type="number" min={1} max={10} />
    <TextField label="Password" type="password" />
    <TextField label="Telephone" type="tel" />
    <TextField label="Text" type="text" />
  </Flex>
)

export const WithoutLabel = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <TextField aria-label="Label" placeholder="Placeholder" />
  </Flex>
)

export const Required = (): JSX.Element => (
  <Flex gap="2x">
    <TextField isRequired isNecessityLabel label="Label" />
    <TextField isRequired label="Label" />
  </Flex>
)

export const Optional = (): JSX.Element => (
  <Flex gap="2x">
    <TextField isNecessityLabel label="Label" />
    <TextField label="Label" />
  </Flex>
)

export const customLabels = (): JSX.Element => (
  <Flex gap="2x">
    <TextField
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isRequired
      isNecessityLabel
      defaultValue="Some value"
    />
    <TextField
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isNecessityLabel
      defaultValue="Some value"
    />
  </Flex>
)

export const WithHelp = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <TextField label="Label" description="Help Text" />
  </Flex>
)

export const MaxLength = (): JSX.Element => (
  <Flex gap="2x">
    <TextField label="Has Max Length" maxLength={30} />
  </Flex>
)

export const AutoFocused = (): JSX.Element => (
  <Flex gap="2x">
    <TextField label="Auto Focused" autoFocus />
  </Flex>
)

export const Invalid = (): JSX.Element => (
  <Flex gap="2x">
    <TextField
      label="Label"
      isInvalid
      validationHelp="Validation Help"
      placeholder="Placeholder"
      description="Additional Information"
    />
  </Flex>
)

export const ReadOnly = (): JSX.Element => (
  <Flex gap="2x">
    <TextField label="Read only" value="Some value" isReadOnly />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x">
    <TextField isDisabled label="Disabled" value="Some value" />
  </Flex>
)

export const Long = (): JSX.Element => (
  <Flex gap="2x" direction="column" style={{ width: 500 }}>
    <TextField label="Adresse" />
    <TextField label="Adresse" />
  </Flex>
)
