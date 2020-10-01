import React from 'react'
import { IconProps, Icon } from '../../components/icon'

export default {
  title: 'Components/Icon',
  component: Icon,
}

export const Base: React.FC<IconProps> = props => {
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

export const Sizes: React.FC = () => (
  <div>
    <Icon name="person" size="small" />
    <Icon name="person" size="medium" />
    <Icon name="person" size="large" />
  </div>
)
