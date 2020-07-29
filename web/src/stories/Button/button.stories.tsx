import React from 'react'
import { action } from '@storybook/addon-actions'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { withDesign } from 'storybook-addon-designs'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ThemeProvider from '../../styles'
import Button from '../../components/Button'
import docs from './Button.mdx'

export default {
  component: Button,
  title: 'Button',
  decorators: [withDesign, withKnobs],
  parameters: {
    component: Button,
    docs: {
      page: docs,
      container: ({
        children,
        context,
      }: {
        children: ReactChild | ReactChildren
        context: Context<Record<string, unknown>>
      }): JSX.Element => (
        <DocsContainer context={context}>
          <ThemeProvider>{children}</ThemeProvider>
        </DocsContainer>
      ),
    },
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
