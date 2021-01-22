import React from 'react'
import { Flex } from '../../components/layout'
import { SearchField } from '../../components/text-input'

export default {
  title: 'Forms/SearchField',
  component: SearchField,
  argTypes: { onChange: { action: 'typed' } },
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
  <Flex gap="2x" direction="column" wrap>
    <SearchField isRequired removeAriaLabel="Remove" label="Label" />
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
