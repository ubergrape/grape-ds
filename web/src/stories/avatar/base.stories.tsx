import React from 'react'

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
