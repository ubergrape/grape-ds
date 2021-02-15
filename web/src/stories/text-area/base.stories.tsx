import React from 'react'
import { Flex } from '../../components/layout'
import { TextArea } from '../../components/text-input'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
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
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=658%3A171',
    },
  },
}

const Template = props => {
  return <TextArea {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}
export const Default = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Label" />
  </Flex>
)

export const WithoutLabel = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea aria-label="Label" placeholder="Placeholder" />
  </Flex>
)

export const Required = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea isRequired isNecessityLabel label="Label" />
    <TextArea isRequired label="Label" />
  </Flex>
)

export const Optional = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea isNecessityLabel label="Label" />
    <TextArea label="Label" />
  </Flex>
)

export const customLabels = (): JSX.Element => (
  <Flex gap="2x" direction="column" wrap>
    <TextArea
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isRequired
      isNecessityLabel
      value="Some value"
    />
    <TextArea
      customLabels={{ required: 'REQUIRED', optional: 'OPTIONAL' }}
      label="Label"
      isNecessityLabel
      value="Some value"
    />
  </Flex>
)

export const WithHelp = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Label" description="Help Text" />
  </Flex>
)

export const Rows = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Label" placeholder="Placeholder" rows={10} />
  </Flex>
)

export const MaxLength = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Has Max Length" maxLength={30} />
  </Flex>
)

export const AutoExpandableWithRows = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Label" placeholder="Placeholder" rows={10} autoExpand />
  </Flex>
)

export const AutoExpandableWithMinAndMaxHeight = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea label="Label" minHeight={100} maxHeight={200} autoExpand />
  </Flex>
)

export const Invalid = (): JSX.Element => (
  <Flex>
    <TextArea
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
    <TextArea isReadOnly label="Read only" value="Some value" />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea isDisabled label="Disabled" value="Some value" />
  </Flex>
)

export const Resizable = (): JSX.Element => (
  <Flex gap="2x">
    <TextArea
      minHeight={100}
      maxHeight={200}
      allowResize
      autoExpand
      label="Resize"
      maxLength={100}
    />
  </Flex>
)
