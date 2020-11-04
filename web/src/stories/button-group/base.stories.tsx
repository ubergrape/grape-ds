import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from '../../components/button'
import { Flex } from '../../components/layout'
import { ButtonGroupProps, ButtonGroup } from '../../components/button-group'

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
}

export const Base: React.FC<ButtonGroupProps> = props => (
  <ButtonGroup {...props}>
    <Button variant="primary">Button</Button>
    <Button>Button</Button>
    <Button appearance="minimal">Button</Button>
  </ButtonGroup>
)

Base.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=51%3A4438',
  },
}

export const Alignment: React.FC<ButtonGroupProps> = () => (
  <div>
    <Flex gap="2x">
      <ButtonGroup>
        <Button variant="primary" onPress={action('clicked')}>
          Button
        </Button>
        <Button onPress={action('clicked')}>Button</Button>
        <Button appearance="minimal" onPress={action('clicked')}>
          Button
        </Button>
      </ButtonGroup>
      <ButtonGroup align="right">
        <Button variant="primary" onPress={action('clicked')}>
          Button
        </Button>
        <Button onPress={action('clicked')}>Button</Button>
        <Button appearance="minimal" onPress={action('clicked')}>
          Button
        </Button>
      </ButtonGroup>
    </Flex>
  </div>
)

Alignment.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=51%3A4438',
  },
}
