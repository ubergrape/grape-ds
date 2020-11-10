import React from 'react'

import { Group, GroupProps } from '../../components/avatar'

export default {
  title: 'Components/Group',
  component: Group,
}

export const Base: React.FC<GroupProps> = props => <Group {...props} />

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
  },
}
