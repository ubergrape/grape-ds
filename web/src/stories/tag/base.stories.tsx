import React from 'react'
import { Flex } from '../../components/layout'
import { Tag } from '../../components/tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=709%3A0',
    },
  },
}

const Template = props => {
  return <Tag {...props} />
}
export const Base = Template.bind({})

Base.args = {
  children: 'Label',
}

export const Tags = (): JSX.Element => (
  <Flex gap="1x">
    <Tag>Test</Tag>
    <Tag>Test</Tag>
    <Tag>Test</Tag>
    <Tag>Test</Tag>
  </Flex>
)

export const Removeable = (): JSX.Element => (
  <Tag onRemove={() => alert('Remove')} removeAriaLabel="Remove Label">
    Remove me
  </Tag>
)

export const Avatar = (): JSX.Element => (
  <Flex gap="1x" direction="column">
    <Tag
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag label
    </Tag>
    <Tag
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
      onRemove={() => alert('Remove')}
    >
      Tag label
    </Tag>
  </Flex>
)

export const Truncated = (): JSX.Element => (
  <Flex gap="1x">
    <Tag maxWidth={60}>This is a secret</Tag>
  </Flex>
)
