import React from 'react'
import { Text } from '../../components/typography'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: { children: { control: 'text' } },
}

const Template = props => {
  return <Text {...props} />
}

export const Base = Template.bind({})
Base.args = {
  children: 'Text',
}

export const Sizes: React.FC = () => (
  <div>
    <Text size="large">Large</Text>
    <Text size="base">Base</Text>
    <Text size="small">Small</Text>
  </div>
)
