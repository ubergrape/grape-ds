import React from 'react'

import { GroupItem, AvatarItemProps } from '../../components/avatar'

export default {
  title: 'Components/GroupItem',
  component: GroupItem,
}

export const Base: React.FC<AvatarItemProps> = props => (
  <GroupItem name="Group name" {...props} />
)

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
  },
}
