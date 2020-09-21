import React from 'react'
import { GenericIconProps, Icon } from '../../components/icon'

export default {
  title: 'Icon',
  component: Icon,
}

export const Base: React.FC<GenericIconProps> = props => {
  return <Icon name="person" size="medium" {...props} />
}

export const Types: React.FC = () => (
  <div>
    <Icon name="arrowLeft" size="medium" />
    <Icon name="close" size="medium" />
    <Icon name="person" size="medium" />
    <Icon name="people" size="medium" />
  </div>
)
