import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
/* eslint-enable import/no-extraneous-dependencies */

export default {
  title: 'Storybook Actions',
}

export const defaultView = () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
)
