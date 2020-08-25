import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Storybook Actions',
}

export const defaultView = () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
)
