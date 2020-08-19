import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Storybook Designs',
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello Button</Button>

myStory.storyName = 'Button'
myStory.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
  },
}
