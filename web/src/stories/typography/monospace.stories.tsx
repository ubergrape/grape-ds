import React from 'react'
import { Monospace } from '../../components/typography'

export default {
  title: 'Typography/Monospace',
  component: Monospace,
  argTypes: { children: { control: 'text' } },
}

const Template = props => {
  return <Monospace {...props} />
}

export const Base = Template.bind({})
Base.args = {
  children: 'Monospace',
}
