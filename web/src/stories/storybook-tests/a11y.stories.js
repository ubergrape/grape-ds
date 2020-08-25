import React from 'react'

export default {
  title: 'Storybook Accessibility',
}

export const accessible = () => <button type="button">Accessible button</button>

export const inaccessible = () => (
  <button type="button" style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)
