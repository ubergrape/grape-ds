import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
/* eslint-enable import/no-extraneous-dependencies */

import Button from '../../components/Button'
import docs from './Button.mdx'

export default {
  component: Button,
  title: 'Button',
  decorators: [withDesign, withKnobs],
  parameters: {
    component: Button,
    docs: { page: docs },
  },
}

export const defaultView = (): JSX.Element => (
  <Button
    color={text('Color', 'primary')}
    variant={text('Variant', 'standard')}
    size={text('Size', 'regular')}
    disabled={boolean('Disabled', false)}
    onClick={action('Button click')}
  >
    Button
  </Button>
)

defaultView.story = {
  name: 'Default',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
    },
  },
}
