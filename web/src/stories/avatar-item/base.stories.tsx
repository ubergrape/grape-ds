import React from 'react'

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
