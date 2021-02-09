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
    <SearchField label="Label" placeholder="Placeholder" />
    <SearchField label="Label" />
  </Flex>
)

export const WithoutLabel = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField aria-label="Label" placeholder="Placeholder" />
  </Flex>
)

export const Required = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField isRequired label="Label" />
  </Flex>
)

export const WithHelp = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <SearchField label="Label" description="Help Text" />
  </Flex>
)

export const MinLength = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField label="Has Min Length" minLength={1} />
  </Flex>
)

export const Invalid = (): JSX.Element => (
  <Flex>
    <SearchField
      label="Label"
      isInvalid
      validationHelp="Validation Help"
      placeholder="Placeholder"
      description="Additional Information"
    />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField isDisabled label="Disabled" value="Some value" />
  </Flex>
)

export const CustomIcon = (): JSX.Element => (
  <Flex gap="2x">
    <SearchField label="Custom" icon="people" />
  </Flex>
)
