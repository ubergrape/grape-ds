import React from 'react'

import { Flex } from '../../components/layout'
import { AvatarItem, AvatarItemProps } from '../../components/avatar'

export default {
  title: 'Components/AvatarItem',
  component: AvatarItem,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
    },
  },
}

export const Base: React.FC<AvatarItemProps> = props => (
  <AvatarItem {...props} />
)

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <AvatarItem size="regular" />
    <AvatarItem size="small" />
  </Flex>
)

export const Description = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <AvatarItem size="regular" description="Description" />
    <AvatarItem size="small" description="Description" />
  </Flex>
)

export const Status = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <AvatarItem size="regular" status="online" />
    <AvatarItem size="small" status="online" />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <AvatarItem size="regular" isDisabled />
    <AvatarItem size="small" isDisabled />
    <AvatarItem size="regular" isDisabled description="Description" />
    <AvatarItem size="small" isDisabled description="Description" />
  </Flex>
)

export const Selected = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <AvatarItem size="regular" isSelected />
    <AvatarItem size="small" isSelected />
  </Flex>
)

export const Truncated = (): JSX.Element => (
  <div style={{ width: 200 }}>
    <Flex gap="2x" direction="column">
      <AvatarItem
        size="regular"
        name="First-name Second-name First-name Second-name"
        description="Description"
      />
      <AvatarItem
        size="regular"
        name="First-name Second-name First-name Second-name"
        description="Description Description Description"
      />
      <AvatarItem size="small" description="Description" />
      <AvatarItem
        size="small"
        name="First-name Second-name First-name Second-name"
        description="Description"
      />
    </Flex>
  </div>
)
