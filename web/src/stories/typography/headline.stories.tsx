import React from 'react'
import { Headline } from '../../components/typography'

export default {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: { children: { control: 'text' } },
}

const Template = props => {
  return <Headline {...props} />
}

export const Base = Template.bind({})
Base.args = {
  children: 'Headline',
}

export const Sizes: React.FC = () => (
  <div>
    <Headline size="page">Headline Page</Headline>
    <Headline size="base">Headline Base</Headline>
  </div>
)
