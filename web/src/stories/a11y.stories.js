import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Storybook Accessibility',
  decorators: [withA11y],
}

export const accessible = () => <button type="button">Accessible button</button>

export const inaccessible = () => (
  <button type="button" style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)
