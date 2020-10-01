import React from 'react'
import { IconProps, Icon } from '../../components/icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=78%3A3331',
    },
  },
}

export const Base: React.FC<IconProps> = props => {
  return <Icon name="person" size="medium" {...props} />
}

export const Types = (): JSX.Element => (
  <div>
    <Icon name="arrowLeft" size="medium" />
    <Icon name="close" size="medium" />
    <Icon name="person" size="medium" />
    <Icon name="people" size="medium" />
  </div>
)

export const Sizes = (): JSX.Element => (
  <div>
    <Icon name="person" size="small" />
    <Icon name="person" size="medium" />
    <Icon name="person" size="large" />
  </div>
)
