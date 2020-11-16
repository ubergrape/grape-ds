import React from 'react'

import { Flex } from '../../components/layout'
import { Group, GroupProps } from '../../components/avatar'

export default {
  title: 'Components/Group',
  component: Group,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
    },
  },
}

export const Base: React.FC<GroupProps> = props => <Group {...props} />

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Group size="regular" />
    <Group size="small" />
  </Flex>
)

export const Type = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Group size="regular" groupType="private" />
    <Group size="small" groupType="private" />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Group size="regular" isDisabled />
    <Group size="small" isDisabled />
  </Flex>
)
