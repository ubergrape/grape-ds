import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Storybook Controls',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Basic = args => <Button {...args} />
Basic.args = { children: 'My Button' }
