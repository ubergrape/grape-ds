import React from 'react'
import { Flex } from '../../components/layout'
import { TextArea } from '../../components/text-input'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
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
  return <TextArea {...props} />
}
export const Base = Template.bind({})

Base.args = {
  label: 'Label',
}
export const Default = (): JSX.Element => (
  <Flex gap={4} direction="column" wrap>
    <TextArea label="Label" placeholder="Placeholder" rows={100} />
    <TextArea label="Label" />
  </Flex>
)

export const WithoutLabel = (): JSX.Element => (
  <Flex gap={4} direction="column" wrap>
    <TextArea aria-label="Label" placeholder="Placeholder" />
  </Flex>
)

export const Required = (): JSX.Element => (
  <Flex gap={4} direction="column" wrap>
    <TextArea isRequired label="Label" />
  </Flex>
)

export const Optional = (): JSX.Element => (
  <Flex gap={4} direction="column" wrap>
    <TextArea label="Label" />
    <TextArea isRequired={false} label="Label" />
  </Flex>
)

export const WithHelp = (): JSX.Element => (
  <Flex gap={4} direction="column" wrap>
    <TextArea label="Label" description="Help Text" />
  </Flex>
)

export const MaxLength = (): JSX.Element => (
  <Flex gap={3}>
    <TextArea label="Has Max Length" maxLength={30} />
  </Flex>
)

export const ReadOnly = (): JSX.Element => (
  <Flex gap={3}>
    <TextArea label="Read only" value="Some value" />
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

export const Disabled = (): JSX.Element => (
  <Flex gap={3}>
    <TextArea isDisabled label="Disabled" value="Some value" />
  </Flex>
)
