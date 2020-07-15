import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Button from '../components/Button'
/* eslint-enable import/no-extraneous-dependencies */

export default {
  title: 'Button',
  decorators: [withDesign, withKnobs],
}

export const primaryButton = (): React.FC => (
  <Button
    color={text('Color', 'primary')}
    variant={text('Variant', 'standard')}
    size={text('Size', 'regular')}
    disabled={boolean('Disabled', false)}
    onClick={action('Button click')}
  >
    Primary
  </Button>
)

primaryButton.story = {
  name: 'Primary',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
    },
  },
}

export const basicButton = (): React.FC => (
  <Button
    color={text('Color', 'basic')}
    variant={text('Variant', 'standard')}
    size={text('Size', 'regular')}
    disabled={boolean('Disabled', false)}
    onClick={action('Button click')}
  >
    Basic
  </Button>
)

basicButton.story = {
  name: 'Basic',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
    },
  },
}

export const dangerButton = (): React.FC => (
  <Button
    color={text('Color', 'danger')}
    variant={text('Variant', 'standard')}
    size={text('Size', 'regular')}
    disabled={boolean('Disabled', false)}
    onClick={action('Button click')}
  >
    Danger
  </Button>
)

dangerButton.story = {
  name: 'Danger',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=1%3A2',
    },
  },
}
