import React from 'react'

import { Flex } from '../../components/layout'
import { Avatar, AvatarProps } from '../../components/avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
    },
  },
}

export const Base: React.FC<AvatarProps> = props => <Avatar {...props} />

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Avatar size="regular" />
    <Avatar size="small" />
  </Flex>
)

export const Status = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Avatar size="regular" status="online" />
    <Avatar size="small" status="online" />
  </Flex>
)

export const Selected = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Avatar size="regular" isSelected />
    <Avatar size="small" isSelected />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <Avatar size="regular" isDisabled />
    <Avatar size="small" isDisabled />
  </Flex>
)
