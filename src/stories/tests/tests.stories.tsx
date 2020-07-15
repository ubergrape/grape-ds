import React from 'react'

export default {
  title: 'Storybook Tests',
}

export const defaultView = (): React.FC => <div>Jest results in storybook</div>

defaultView.story = {
  parameters: {
    jest: ['tests.test.js'],
  },
}
