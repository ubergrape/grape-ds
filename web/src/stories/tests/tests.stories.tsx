import React from 'react'

export default {
  title: 'Storybook Tests',
}

export const defaultView = (): JSX.Element => (
  <div>Jest results in storybook</div>
)

defaultView.story = {
  parameters: {
    jest: ['tests.test.js'],
  },
}
