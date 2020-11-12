import React from 'react'

import { Avatar, AvatarProps } from '../../components/avatar'

export default {
  title: 'Components/Avatar',
  argTypes: { onClick: { action: 'clicked' } },
  component: Avatar,
}

export const Base: React.FC<AvatarProps> = props => <Avatar {...props} />

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=466%3A3840',
  },
}
