import React from 'react'
import { Flex } from '../../components/layout'
import { SearchField } from '../../components/text-input'

export default {
  title: 'Forms/SearchField',
  component: SearchField,
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
    type: {
      table: {
        control: false,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=635%3A0',
    },
  },
}

const Template = props => {
  return <SearchField {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}

export const Default = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField
      removeAriaLabel="Remove"
      label="Label"
      placeholder="Placeholder"
    />
    <SearchField removeAriaLabel="Remove" label="Label" />
  </Flex>
)

export const WithoutLabel = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField
      removeAriaLabel="Remove"
      aria-label="Label"
      placeholder="Placeholder"
    />
  </Flex>
)

export const Required = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField isRequired isNecessityLabel label="Label" />
    <SearchField isRequired label="Label" />
  </Flex>
)

export const Optional = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField isNecessityLabel label="Label" />
    <SearchField label="Label" />
  </Flex>
)

export const customLabels = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isRequired
      isNecessityLabel
      defaultValue="Some value"
    />
    <SearchField
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isNecessityLabel
      defaultValue="Some value"
    />
  </Flex>
)

export const WithHelp = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField
      label="Label"
      removeAriaLabel="Remove"
      description="Help Text"
    />
  </Flex>
)

export const MinLength = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField
      label="Has Min Length"
      removeAriaLabel="Remove"
      minLength={1}
    />
  </Flex>
)

export const AutoFocused = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField label="Auto Focused" removeAriaLabel="Remove" autoFocus />
  </Flex>
)

export const Invalid = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField
      label="Label"
      removeAriaLabel="Remove"
      isInvalid
      validationHelp="Validation Help"
      placeholder="Placeholder"
      description="Additional Information"
    />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField
      isDisabled
      removeAriaLabel="Remove"
      label="Disabled"
      value="Some value"
    />
  </Flex>
)

export const CustomIcon = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField label="Custom" removeAriaLabel="Remove" icon="people" />
  </Flex>
)
