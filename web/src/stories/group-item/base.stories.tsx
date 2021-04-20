import React from 'react'

import { Flex } from '../../components/layout'
import { GroupItem, AvatarItemProps } from '../../components/avatar'

export default {
  title: 'Components/GroupItem',
  component: GroupItem,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
    },
  },
}

export const Base: React.FC<AvatarItemProps> = props => <GroupItem {...props} />

export const Sizes = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <GroupItem size="regular" />
    <GroupItem size="small" />
  </Flex>
)

export const Description = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <GroupItem size="regular" description="Description" />
    <GroupItem size="small" description="Description" />
  </Flex>
)

export const Disabled = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <GroupItem size="regular" isDisabled />
    <GroupItem size="small" isDisabled />
    <GroupItem size="regular" isDisabled description="Description" />
    <GroupItem size="small" isDisabled description="Description" />
  </Flex>
)

export const Members = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <GroupItem size="regular" members={123} />
    <GroupItem size="small" members={123} />
  </Flex>
)

export const Type = (): JSX.Element => (
  <Flex gap="2x" direction="column">
    <GroupItem size="regular" groupType="private" />
    <GroupItem size="small" groupType="private" />
  </Flex>
)

export const Truncated = (): JSX.Element => (
  <Flex gap="2x" direction="column" style={{ width: 200 }} wrap>
    <GroupItem
      size="regular"
      description="Description Description Description"
      maxWidth={200}
      members={123}
    />
    <GroupItem
      size="regular"
      name="Group Name Group Name Group Name"
      description="Description Description Description Very Long Description Description Description Description Very Long Description"
      maxWidth={200}
      members={123}
    />
    <GroupItem
      size="regular"
      name="Group Name Group Name Group Name"
      description="Description Description Description"
      maxWidth={200}
    />
    <GroupItem
      size="regular"
      name="Group Name Group Name Group Name"
      maxWidth={200}
    />
    <GroupItem
      size="small"
      description="Description Description Description"
      maxWidth={200}
      members={123}
    />
    <GroupItem
      size="small"
      name="Group Name Group Name Group Name"
      description="Description Description Description Very Long Description Description Description Description Very Long Description"
      maxWidth={200}
      members={123}
    />
  </Flex>
)
